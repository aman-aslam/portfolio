(() => {
  "use strict";
  const projects = {
    roadnest: {
      number:"01 / RENTAL TECHNOLOGY", title:"One workspace for the rental business.", accent:"RoadNest",
      lede:"A full-stack single-shop car and bike rental system with customer bookings, fleet operations, staff workflows, payments, maintenance and AI-assisted features.",
      type:"Vehicle rental management", role:"Product design & full-stack development", stack:"Next.js · NestJS · PostgreSQL · Prisma", status:"Live product",
      challenge:"A local rental business needs more than a vehicle listing page. Staff need to maintain a fleet, understand availability, handle online and counter bookings, record payments and deposits, inspect vehicles at pickup and return, and track maintenance and costs.",
      solution:"RoadNest brings the customer booking journey and the shop's day-to-day operations together. It includes fleet and booking management, customer and staff workflows, and AI-assisted rental planning and vehicle photo recognition.",
      approach:["Build a customer experience for browsing cars and bikes, reviewing pricing and requesting bookings.","Create a shop workspace for fleet, walk-in and online bookings, payments, expenses and maintenance.","Add an AI Rental Planner that matches customer needs to the published fleet.","Add AI-assisted vehicle-photo recognition for staff, with human review before saving suggested details."],
      outcome:"A single-shop rental platform designed around the operational needs of a real rental business. AI-suggested details remain reviewable; the application does not treat image suggestions as verified vehicle facts.",
      tags:["Next.js","NestJS","PostgreSQL","Prisma","AI integration"],
      links:[["OPEN LIVE APPLICATION","https://roadnest-rentals.netlify.app/"],["AI RENTAL PLANNER","https://roadnest-rentals.netlify.app/ai-planner"],["SOURCE REPOSITORY","https://github.com/aman-aslam/roadnest-rental"]]
    },
    medidrift: {
      number:"02 / HEALTHCARE TECHNOLOGY",title:"Bring medication catalogue data into focus.",accent:"MediDrift",
      lede:"A medication catalogue workspace for importing supplier spreadsheets, mapping inconsistent source columns and reviewing RxNorm identifier findings while retaining original source values.",
      type:"Medication catalogue workspace",role:"React frontend & ASP.NET Core API",stack:"React · TypeScript · ASP.NET Core · PostgreSQL",status:"Live application",
      challenge:"Medication catalogue files arrive with different headers, layouts and identifier formats. Teams need to normalize fields without losing traceability to the original source and require a reviewable way to inspect terminology status.",
      solution:"MediDrift stages CSV and XLSX imports, suggests source-to-target mappings, saves normalized records and retains original row data. It can run an RxNorm terminology audit and produce findings for review and export.",
      approach:["Upload CSV or XLSX source files and stage the imported rows.","Map source columns to medication fields such as name, RxCUI, NDC, strength and dosage form.","Save mapping profiles for repeat supplier formats.","Run an RxNorm audit, review findings and export results."],
      outcome:"A traceable medication data workflow that separates source values, normalized records and terminology findings so teams can review transformations before relying on the data.",
      tags:["React","TypeScript","ASP.NET Core","PostgreSQL","RxNorm"],
      links:[["LIVE APPLICATION","https://medidrift.vercel.app/"],["FRONTEND REPOSITORY","https://github.com/MediDrift/MediDrift.Frontend"],["API REPOSITORY","https://github.com/MediDrift/MediDrift.Api"]]
    },
    healthcare: {
      number:"03 / HEALTHCARE TECHNOLOGY",title:"Reliable workflows for healthcare operations.",accent:"Enterprise Healthcare Platform",
      lede:"Healthcare application development supporting medication adherence, patient workflow management and operational processing across 50,000+ patient records.",
      type:"Enterprise healthcare application",role:"ASP.NET Core API, Vue.js dashboard & real-time integration development",stack:"C# · ASP.NET Core Web API · Vue.js · SignalR · SQL Server · Microsoft Azure",status:"Professional project experience",
      challenge:"Healthcare operations depend on reliable APIs and responsive interfaces to support medication adherence, patient workflows and day-to-day operational processing across a large patient-record workload.",
      solution:"Developed ASP.NET Core REST APIs and Vue.js dashboards with SignalR real-time updates. Implemented medication adherence and PDC calculation workflows using SQL Server stored procedures and Azure Timer Trigger Functions. Query and API optimization work using SQL joins, indexing strategies and LINQ was associated with a reported 40% improvement in API response time.",
      approach:["Develop REST APIs for medication adherence tracking, patient workflow management and healthcare operational processing.","Support application workflows spanning more than 50,000 patient records.","Build Vue.js dashboards with SignalR for real-time updates.","Implement PDC calculation workflows using SQL Server stored procedures and Azure Timer Trigger Functions.","Optimize SQL joins, indexing strategies and LINQ expressions to improve API response time."],
      outcome:"Professional healthcare software experience spanning API development, frontend dashboards, real-time communication and database optimization. Performance and scale figures reflect the project experience supplied for this portfolio; no private patient information or internal screenshots are published.",
      tags:["C#","ASP.NET Core Web API","Vue.js","SignalR","SQL Server","Azure Functions","LINQ"],
      links:[]
    },
    ordermanagement: {
      number:"04 / REAL-TIME APPLICATIONS",title:"Real-time updates across the order lifecycle.",accent:"Order Management System",
      lede:"An order management application supporting order creation, updates, assignment and delivery-status operations, with SignalR replacing a Cron-based polling workflow.",
      type:"Order management system",role:"ASP.NET Core REST API & SignalR development",stack:"C# · ASP.NET Core Web API · SignalR · JavaScript",status:"Professional project experience",
      challenge:"A polling-based order update flow can delay status visibility for kitchen and operations teams. The application needed to support the order lifecycle while making status changes available in real time.",
      solution:"Developed RESTful APIs for order creation, updates, assignment and delivery status. Replaced the Cron-based polling approach with SignalR real-time updates to improve the timeliness of order information and the user experience.",
      approach:["Develop REST endpoints for order creation and updates.","Support order assignment and delivery-status changes.","Replace Cron-based polling with SignalR real-time communication.","Deliver timely order updates to improve kitchen response and operational visibility."],
      outcome:"Replaced periodic polling with real-time order updates, improving kitchen response time and the overall user experience as described in the project brief. No unverified traffic or performance metrics are claimed.",
      tags:["C#","ASP.NET Core Web API","REST APIs","SignalR","Real-Time Updates","JavaScript"],
      links:[]
    },
    freightlook: {
      number:"05 / LOGISTICS TECHNOLOGY",title:"Air cargo rate discovery with a review-first workflow.",accent:"FreightLook",
      lede:"A prototype air cargo rate finder for searching by origin, destination and shipment weight, with PDF rate-sheet intake and staged human review.",
      type:"Air cargo rate finder",role:"Full-stack prototype development",stack:"ASP.NET Core Web API · C# · SQL Server · EF Core · JavaScript",status:"Prototype · source available",
      challenge:"Air cargo rate sheets can be inconsistent and may include scanned pages. Rate information needs to be searchable without inventing missing values or silently approving uncertain extraction results.",
      solution:"The prototype supports route and weight search, PDF uploads, selectable-text extraction and staging of candidate rate lines for human review. It also includes an optional OpenAI-compatible natural-language query endpoint.",
      approach:["Search approved rates by origin airport, destination airport and shipment weight.","Upload PDF rate sheets and retain upload and batch information.","Extract selectable PDF text and stage candidate rows for review.","Require a person to review and approve rate data before it is used in searches."],
      outcome:"A review-first prototype with an explicit limitation: image-only or scanned PDF pages require OCR, which this prototype does not claim to perform. Uploading a PDF does not invent or auto-approve rates.",
      tags:["ASP.NET Core","C#",".NET 8","SQL Server","EF Core","PdfPig","JavaScript"],
      links:[["SOURCE REPOSITORY","https://github.com/aman-aslam/FrieightLook"]]
    },
    healthmonitor: {
      number:"06 / MONITORING & AUTOMATION",title:"Make website availability easier to inspect.",accent:"WebsiteHealthMonitor",
      lede:"A website availability and page-load monitoring project using a real browser session to observe configured websites and surface failed checks.",
      type:"Website monitoring dashboard",role:"ASP.NET Core API & browser automation",stack:"ASP.NET Core · .NET 8 · C# · Microsoft Playwright · HTML/CSS/JavaScript",status:"Source available",
      challenge:"A simple ping does not always represent whether a site can load in a browser. A useful monitor needs bounded navigation waits and readable status details.",
      solution:"The application uses an ASP.NET Core API and Playwright-managed browser navigation to check configured websites and measure page-load duration. The dashboard can focus attention on unavailable sites rather than relying only on aggregate averages.",
      approach:["Check configured websites using a real browser session.","Measure page-load duration with Playwright and Stopwatch.","Apply a bounded navigation timeout so unresponsive pages do not block indefinitely.","Present monitoring results in a browser-based dashboard."],
      outcome:"A practical monitoring foundation that treats failed browser navigation as an observed check result, not proof that a remote host is permanently offline.",
      tags:["ASP.NET Core","C#",".NET 8","Playwright","JavaScript"],
      links:[["SOURCE REPOSITORY","https://github.com/aman-aslam/WebsiteHealthMonitor"]]
    },
    hrms: {
      number:"07 / ENTERPRISE SOFTWARE",title:"Reliable workflows for people operations.",accent:"HRMS Enterprise",
      lede:"Enterprise HRMS development covering disciplinary action and promotion workflows, with backend REST APIs and server-rendered MVC screens.",
      type:"Human Resource Management System",role:"ASP.NET Core API & MVC development",stack:"C# · ASP.NET Core Web API · ASP.NET MVC · Oracle · JavaScript",status:"Professional project experience",
      challenge:"Enterprise HRMS workflows need dependable backend operations and interfaces that support role-based tasks while keeping business logic consistent across screens and services.",
      solution:"Contributed to disciplinary action and promotion modules, developing backend API functionality and server-rendered MVC screens. The case-study overview is intentionally limited to publicly shareable work details.",
      approach:["Develop backend REST API functionality for disciplinary action and promotion workflows.","Build server-rendered user interfaces using ASP.NET MVC and Razor Views.","Connect application workflows to database operations and existing enterprise services.","Keep module scope focused on the work that can be publicly described."],
      outcome:"Professional enterprise software development experience across backend APIs and MVC workflow interfaces. No private client data, internal screenshots or non-public repository links are included.",
      tags:["ASP.NET Core Web API","ASP.NET MVC","C#","Oracle","JavaScript"],
      links:[]
    }
  };

  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const root = document.getElementById("case-content");
  const key = new URLSearchParams(window.location.search).get("project");
  const project = projects[key];
  if (root) {
    if (!project) {
      root.innerHTML = '<div class="case-empty"><span class="case-index">PROJECT NOT FOUND</span><h1>Let’s get you back on track.</h1><p>This case study is not available. Browse selected projects on the portfolio homepage.</p><a class="button button-primary" href="index.html#work">BACK TO PROJECTS <span>↗</span></a></div>';
    } else {
      document.title = `${project.accent} — Case Study | Aman Aslam`;
      const list = items => `<ul>${items.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`;
      const actions = project.links.map(([label,url]) => `<a class="button button-primary" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span>↗</span></a>`).join("");
      const tags = project.tags.map(tag => `<span>${esc(tag)}</span>`).join("");
      root.innerHTML = `
        <div class="case-crumb"><a href="index.html#work">← BACK TO PORTFOLIO</a><span>SELECTED WORK / CASE STUDY</span></div>
        <section class="case-hero"><div><span class="case-index">${esc(project.number)}</span><h1 class="case-title">${esc(project.title)} <em>${esc(project.accent)}</em></h1><p class="case-lede">${esc(project.lede)}</p><div class="case-actions">${actions}<a class="button button-outline" href="index.html#work">ALL PROJECTS <span>↗</span></a></div></div><aside class="case-stamp"><small>PROJECT NOTE / AMAN ASLAM</small><strong>${esc(project.type)}</strong><em>THINK · ENGINEER · DELIVER</em></aside></section>
        <div class="case-meta"><div><small>PROJECT TYPE</small><strong>${esc(project.type)}</strong></div><div><small>MY ROLE</small><strong>${esc(project.role)}</strong></div><div><small>TECHNOLOGY</small><strong>${esc(project.stack)}</strong></div><div><small>STATUS</small><strong>${esc(project.status)}</strong></div></div>
        <div class="case-layout"><aside class="case-aside"><small>ON THIS PAGE</small><nav><a href="#challenge">Challenge</a><a href="#solution">Approach</a><a href="#outcome">Outcome</a></nav></aside><div class="case-content">
          <section id="challenge"><h2>The challenge</h2><p>${esc(project.challenge)}</p></section>
          <section id="solution"><h2>What I built</h2><p>${esc(project.solution)}</p>${list(project.approach)}<div class="case-tags">${tags}</div></section>
          <section id="outcome"><h2>Outcome & notes</h2><p>${esc(project.outcome)}</p></section>
        </div></div>`;
    }
  }

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      mobileNav.hidden = !open;
    });
    mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded","false"); mobileNav.hidden = true;
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();