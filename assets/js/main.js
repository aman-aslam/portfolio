(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Short branded opening animation. This is intentionally time-bounded and
  // does not pretend to measure network or asset-loading progress.
  const loader = document.getElementById("site-loader");
  if (loader) {
    if (reduceMotion) {
      loader.classList.add("is-done");
      loader.setAttribute("aria-hidden", "true");
    } else {
      const count = document.getElementById("loader-count");
      const bar = document.getElementById("loader-bar");
      const track = bar && bar.parentElement;
      const duration = 850;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min(100, Math.round(((now - start) / duration) * 100));
        if (count) count.textContent = String(progress).padStart(2, "0");
        if (bar) bar.style.width = `${progress}%`;
        if (track) track.setAttribute("aria-valuenow", String(progress));
        if (progress < 100) window.requestAnimationFrame(tick);
        else window.setTimeout(() => {
          loader.classList.add("is-done");
          loader.setAttribute("aria-hidden", "true");
        }, 70);
      };
      window.requestAnimationFrame(tick);
    }
  }

  // Keep skill labels readable if a third-party brand icon CDN is unavailable.
  document.querySelectorAll(".skill-icon").forEach(icon => {
    icon.addEventListener("error", () => { icon.hidden = true; }, { once: true });
  });

  // Reveal elements as they enter the viewport; content stays visible without JS.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Accessible mobile navigation.
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    mobileNav.hidden = true;
    document.body.classList.remove("menu-open");
  };
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      mobileNav.hidden = !open;
      document.body.classList.toggle("menu-open", open);
    });
    mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 800) closeMenu(); });
  }

  // Scroll progress.
  const progress = document.querySelector(".reading-progress span");
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Current footer year.
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Project inquiry: success is only shown after the form service confirms receipt.
  const form = document.getElementById("inquiry-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    const submit = form.querySelector('button[type="submit"]');
    let sending = false;
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (sending) return;
      if (!form.reportValidity()) {
        status.textContent = "Please complete the required fields and check your email address.";
        status.dataset.state = "error";
        return;
      }
      const data = new FormData(form);
      if (String(data.get("_honey") || "").trim()) return;
      sending = true;
      if (submit) {
        submit.disabled = true;
        submit.dataset.original = submit.innerHTML;
        submit.innerHTML = 'Sending… <span>↗</span>';
      }
      status.textContent = "Sending your inquiry…";
      delete status.dataset.state;
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 30000);
      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", Accept: "application/json" },
          body: new URLSearchParams(data),
          signal: controller.signal
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || String(result.success) !== "true") {
          throw new Error("The form service did not confirm delivery.");
        }
        form.reset();
        status.textContent = "Thank you — your inquiry was sent successfully.";
        status.dataset.state = "success";
      } catch (error) {
        status.textContent = error.name === "AbortError"
          ? "The request timed out. Please email me directly at amanaslam513@gmail.com."
          : "The inquiry could not be confirmed. Please email me directly at amanaslam513@gmail.com.";
        status.dataset.state = "error";
      } finally {
        window.clearTimeout(timer);
        sending = false;
        if (submit) {
          submit.disabled = false;
          submit.innerHTML = submit.dataset.original || 'Send inquiry <span>↗</span>';
        }
      }
    });
  }
})();