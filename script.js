/* ==========================================================================
   CUSTOMWEBX TECHNOLOGIES — Site Script
   Sections: header scroll state, mobile nav, scroll reveal, counters,
   hero network canvas, contact form (WhatsApp), back-to-top.
   ========================================================================== */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "923140465045"; // no leading + or 0, country code first

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Keep the static pages on one shared site shell. */
  var isProjectPage = window.location.pathname.indexOf("/projects/") !== -1;
  var root = isProjectPage ? "../" : "";
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var logoPath = root + "assets/Customwebx.png";
  var navItems = [
    ["Home", root + "index.html", "index.html"],
    ["Services", root + "services.html", "services.html"],
    ["Projects", root + "index.html#projects", "projects"],
    ["Pricing", root + "pricing.html", "pricing.html"],
    ["About", root + "about.html", "about.html"],
    ["Contact", root + "contact.html", "contact.html"]
  ];
  var headerNav = navItems.map(function (item) {
    var active = (item[2] === currentPage || (item[2] === "projects" && isProjectPage)) ? " class=\"is-active\"" : "";
    return "<a" + active + " href=\"" + item[1] + "\">" + item[0] + "</a>";
  }).join("");
  var siteHeader = document.getElementById("siteHeader");
  if (siteHeader) {
    siteHeader.innerHTML = "<div class=\"container\"><a href=\"" + root + "index.html\" class=\"brand\"><img class=\"brand-mark\" src=\"" + logoPath + "\" alt=\"CustomWebX Technologies logo\"><span class=\"brand-name\"><b>CustomWebX</b> <span>Technologies</span></span></a><nav class=\"nav-links\" id=\"navLinks\">" + headerNav + "</nav><div class=\"header-actions\"><a href=\"" + root + "contact.html\" class=\"btn btn-primary btn-sm header-cta\">Book Consultation</a><button class=\"nav-toggle\" id=\"navToggle\" aria-label=\"Toggle navigation\" aria-expanded=\"false\"><span></span></button></div></div>";
  }
  var announceBar = document.querySelector(".announce-track");
  if (announceBar) {
    announceBar.innerHTML = "<a href=\"" + root + "pricing.html\">Get a website starting from $100 - limited time offer</a><a href=\"" + root + "projects/kandrex.html\">Just launched: Kandrex, enterprise-grade cloud communications</a><a href=\"https://eservices.secp.gov.pk/eServices/ControllerServlet\" target=\"_blank\" rel=\"noopener\">Registered and authorized by SECP Pakistan - verify us instantly</a><a href=\"" + root + "free-hosting.html\">Free hosting available for qualifying projects</a><a href=\"" + root + "whitelabel-telecom.html\">White-label telecom platforms available for resellers</a>";
  }
  var siteFooter = document.querySelector(".site-footer");
  if (siteFooter) {
    siteFooter.innerHTML = "<div class=\"container\"><div class=\"footer-grid\"><div class=\"footer-brand\"><a href=\"" + root + "index.html\" class=\"brand\"><img class=\"brand-mark\" src=\"" + logoPath + "\" alt=\"CustomWebX Technologies logo\"><span class=\"brand-name\"><b>CustomWebX</b> <span>Technologies</span></span></a><p>Websites, software, cloud communications and automation for businesses that need to be seen, trusted and chosen.</p><p><a href=\"mailto:contact@kandrex.com\">contact@kandrex.com</a></p></div><div class=\"footer-col\"><h5>Company</h5><ul><li><a href=\"" + root + "about.html\">About</a></li><li><a href=\"" + root + "founder.html\">Founder</a></li><li><a href=\"" + root + "services.html\">Services</a></li><li><a href=\"" + root + "contact.html\">Contact</a></li></ul></div><div class=\"footer-col\"><h5>Projects</h5><ul><li><a href=\"" + root + "projects/kandrex.html\">Kandrex</a></li><li><a href=\"" + root + "projects/scrapestack.html\">ScrapeStack</a></li><li><a href=\"" + root + "projects/leadgateway.html\">LeadGateway</a></li><li><a href=\"" + root + "projects/applyhub.html\">ApplyHub</a></li></ul></div><div class=\"footer-col\"><h5>Offers and legal</h5><ul><li><a href=\"" + root + "pricing.html\">Pricing</a></li><li><a href=\"" + root + "free-hosting.html\">Free hosting</a></li><li><a href=\"" + root + "privacy.html\">Privacy Policy</a></li><li><a href=\"" + root + "terms.html\">Terms of Service</a></li></ul></div></div><div class=\"footer-bottom\"><span>&copy; 2026 CustomWebX Technologies (SMC-Private) Limited. All rights reserved.</span><a class=\"footer-legalnote\" href=\"https://eservices.secp.gov.pk/eServices/ControllerServlet\" target=\"_blank\" rel=\"noopener\">Verify our registration at SECP Pakistan &#8599;</a></div></div>";
  }
  document.querySelectorAll("img, link[rel='icon']").forEach(function (element) {
    var attribute = element.tagName.toLowerCase() === "link" ? "href" : "src";
    if (element.getAttribute(attribute) && element.getAttribute(attribute).toLowerCase().indexOf("assets/customwebx.png") !== -1) element.setAttribute(attribute, logoPath);
  });
  document.querySelectorAll("a[href^='mailto:']").forEach(function (link) {
    link.href = "mailto:sufyanrasheed12@gmail.com";
    link.textContent = "sufyanrasheed12@gmail.com";
  });
  document.querySelectorAll(".project-wordmark").forEach(function (element) {
    var applyHubLogo = document.createElement("img");
    applyHubLogo.className = "project-logo";
    applyHubLogo.src = root + "assets/applyhub-logo.svg";
    applyHubLogo.alt = "ApplyHub logo";
    element.replaceWith(applyHubLogo);
  });

  var businessDetails = {
    "services.html": { eyebrow: "The business case", title: "What a well-built website gives your business.", intro: "A website is not decoration. It is where your reputation, offer and next action become clear to people who do not know you yet.", cards: [["Trust before the first call", "A professional presence answers whether your business is real before a prospect risks their time or money."], ["More qualified inquiries", "Explain your services and fit upfront so the people who contact you already understand the opportunity."], ["A portfolio that sells", "Turn past work into evidence of what you can build, not just a list of claims."], ["Your digital storefront", "Sell products, take bookings, show services or guide customers to the right action at any hour."], ["Search visibility", "Give search engines a clear, owned source of information about your company and what it offers."], ["One source of truth", "Keep your contact details, offers, projects and company story in one place you control."]]},
    "pricing.html": { eyebrow: "Why invest in a website", title: "Your website keeps working when your team is offline.", intro: "A good website can be your storefront, portfolio, sales assistant, credibility check and first point of contact at the same time.", cards: [["Be found", "Give customers a clear destination when they search for your company, service or product."], ["Be understood", "Explain what you do in plain language before a visitor has to ask basic questions."], ["Be remembered", "A distinct visual identity and useful content make your business easier to recognize and recommend."], ["Be chosen", "Show proof, services, pricing direction and a clear next step that reduces hesitation."], ["Own your presence", "Build an asset you control instead of depending entirely on social media or marketplaces."], ["Grow in stages", "Start with a focused website and add bookings, stores, portals or automation as the business grows."]]}
    ,"about.html": { eyebrow: "Your digital front door", title: "A business without a clear website leaves too much to guesswork.", intro: "Your website is where a customer, partner, candidate or investor gets the first complete picture of your company.", cards: [["A portfolio", "Show your strongest work, products, customers and capabilities in one credible place."], ["A storefront", "Present products and services clearly, with a path to buy, book or request a quote."], ["A company forefront", "Make your standards, story and professionalism visible before a meeting begins."], ["A trust signal", "Give people the details they need to decide that contacting you is worth it."], ["A growth platform", "Add content, landing pages, forms, tools and integrations as your needs become clearer."], ["An owned channel", "Stay discoverable and in control even when social platforms change their rules."]]}
  }[currentPage];
  if (businessDetails && document.querySelector("main")) {
    var detailCards = businessDetails.cards.map(function (card) { return "<div class=\"detail-card\"><h3>" + card[0] + "</h3><p>" + card[1] + "</p></div>"; }).join("");
    var businessSection = document.createElement("section");
    businessSection.className = "section-alt website-value";
    businessSection.innerHTML = "<div class=\"container\"><div class=\"section-head\"><div class=\"eyebrow\">" + businessDetails.eyebrow + "</div><h2>" + businessDetails.title + "</h2><p>" + businessDetails.intro + "</p></div><div class=\"detail-grid\">" + detailCards + "</div></div>";
    var cta = document.querySelector("main .cta-band");
    document.querySelector("main").insertBefore(businessSection, cta || null);
  }

  /* ------------------------------------------------------------------
     Header: scrolled state + mobile nav toggle
     ------------------------------------------------------------------ */
  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var announcements = document.querySelectorAll(".announce-track a");
  if (announcements.length) {
    var announcementIndex = 0;
    announcements[0].classList.add("is-active");
    if (announcements.length > 1 && !reduceMotion) {
      window.setInterval(function () {
        announcements[announcementIndex].classList.remove("is-active");
        announcementIndex = (announcementIndex + 1) % announcements.length;
        announcements[announcementIndex].classList.add("is-active");
      }, 5000);
    }
  }

  /* ------------------------------------------------------------------
     Scroll reveal (fade + slide up)
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------------------------
     Animated stat counters
     ------------------------------------------------------------------ */
  var counters = document.querySelectorAll(".num[data-count]");

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion || isNaN(target)) {
      el.textContent = target + suffix;
      return;
    }
    var duration = 1200;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length && "IntersectionObserver" in window) {
    var statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            counters.forEach(animateCounter);
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("[data-counter-block]").forEach(function (block) {
      statsObserver.observe(block);
    });
  }

  /* ------------------------------------------------------------------
     Hero network canvas — signature element
     ------------------------------------------------------------------ */
  var canvas = document.getElementById("heroCanvas");

  if (canvas && canvas.getContext && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var nodes = [];
    var NODE_COUNT = 46;
    var MAX_DIST = 150;
    var width, height, dpr;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.4 + 1
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (var j = i + 1; j < nodes.length; j++) {
          var m = nodes[j];
          var dx = n.x - m.x;
          var dy = n.y - m.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            var alpha = (1 - dist / MAX_DIST) * 0.35;
            ctx.strokeStyle = "rgba(110, 161, 255, " + alpha + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      for (var k = 0; k < nodes.length; k++) {
        var p = nodes[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(192, 132, 252, 0.75)";
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    resize();
    initNodes();
    requestAnimationFrame(step);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        initNodes();
      }, 200);
    });
  }

  /* ------------------------------------------------------------------
     Contact form — posts to the serverless Brevo handler
     ------------------------------------------------------------------ */
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");
  var messageField = document.getElementById("message");
  var charCount = document.getElementById("charCount");






  /* ------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------ */
  var toTop = document.getElementById("toTop");

  function toggleBackToTop() {
    if (!toTop) return;
    if (window.scrollY > 480) {
      toTop.classList.add("is-visible");
    } else {
      toTop.classList.remove("is-visible");
    }
  }

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }
})();