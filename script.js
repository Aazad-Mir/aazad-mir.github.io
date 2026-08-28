/*
  Aazad Mir AI-Tech Portfolio
  English / Arabic language switcher, animated AI canvas, reveal effects.
*/

/* Page loader */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("pageLoader").classList.add("hide");
  }, 450);
});

/* Language */
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const isArabic = lang === "ar";
  document.body.classList.toggle("lang-ar", isArabic);
  document.body.classList.toggle("lang-en", !isArabic);
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("aazadPortfolioLang", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("aazadPortfolioLang") || "en");

/* Mobile menu */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Reveal on scroll */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
  revealObserver.observe(el);
});

/* Scroll progress */
const progress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${pct}%`;
});

/* Cursor glow */
const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", (e) => {
  cursorGlow.style.transform = `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`;
}, { passive: true });

/* Current year */
const y = new Date().getFullYear();
document.getElementById("year").textContent = y;
document.getElementById("yearAr").textContent = y;

/* Typewriter terminal */
const typeLine = document.getElementById("typeLine");
const lines = [
  "load_profile('Aazad Mir')",
  "skills = ['Microsoft 365', 'ERPNext', 'Cloud VPS', 'Network Support']",
  "experience.saudi = '8 years'",
  "status = 'Ready for senior IT opportunities'"
];
let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  const text = lines[lineIndex];
  typeLine.textContent = "> " + text.slice(0, charIndex);
  charIndex++;

  if (charIndex <= text.length) {
    setTimeout(typeTerminal, 45);
  } else {
    setTimeout(() => {
      charIndex = 0;
      lineIndex = (lineIndex + 1) % lines.length;
      typeTerminal();
    }, 1350);
  }
}
typeTerminal();

/* Tilt cards */
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});

/* AI particle canvas */
const canvas = document.getElementById("aiCanvas");
const ctx = canvas.getContext("2d");
let points = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  createPoints();
}

function createPoints() {
  const count = Math.min(95, Math.floor((window.innerWidth * window.innerHeight) / 13500));
  points = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 1.7 + 0.7
  }));
}

function animateCanvas() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const p of points) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
    if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(72, 230, 255, 0.72)";
    ctx.fill();
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const a = points[i];
      const b = points[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 135) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(72, 230, 255, ${0.13 * (1 - dist / 135)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animateCanvas);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
if (!reduceMotion) animateCanvas();

/* V5 interactive depth, counters, spotlight and active navigation */
const interactiveCards = document.querySelectorAll("[data-tilt]");
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  interactiveCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      card.style.transform = `rotateX(${(0.5 - py) * 7}deg) rotateY(${(px - 0.5) * 7}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

document.querySelectorAll(".skill-card, .project-card, .timeline-item, .credential-card, .contact-card, .about-card, .ai-console").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }, { passive: true });
});

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target);
    const duration = reduceMotion ? 1 : 1100;
    const started = performance.now();
    const tick = (now) => {
      const progressValue = Math.min((now - started) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progressValue, 3)));
      if (progressValue < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: .6 });
document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-38% 0px -55%", threshold: 0 });
navSections.forEach((section) => navObserver.observe(section));

/* V4 AI Recruiter View */
const recruiterAnswers = {
  fit: {
    en: {
      title: "Best-fit roles",
      text: "Aazad is strongest for senior IT support, system administration, ERPNext administration, Microsoft 365 administration, and infrastructure support roles.",
      points: [
        "Sr. IT Support Specialist",
        "System & ERP Administrator",
        "ERPNext / Frappe Administrator",
        "Microsoft 365 Administrator",
        "IT Infrastructure Support Lead"
      ]
    },
    ar: {
      title: "أنسب الوظائف",
      text: "آزاد مناسب بشكل قوي لوظائف الدعم التقني المتقدم، إدارة الأنظمة، إدارة ERPNext، إدارة Microsoft 365، ودعم البنية التحتية.",
      points: [
        "أخصائي دعم تقني أول",
        "مسؤول أنظمة و ERP",
        "مسؤول ERPNext / Frappe",
        "مسؤول Microsoft 365",
        "قائد دعم البنية التحتية لتقنية المعلومات"
      ]
    }
  },
  erp: {
    en: {
      title: "ERPNext value",
      text: "He administers ERPNext across business departments, covering users, roles, permissions, workflows, reports, print formats, automation, troubleshooting, and end-user support.",
      points: [
        "Worked on ERPNext in AFMCO and current company",
        "Users, roles, permissions and workflows",
        "Automation and controlled cross-department processes",
        "End-user training and department support"
      ]
    },
    ar: {
      title: "قيمة ERPNext",
      text: "يدير ERPNext عبر أقسام الأعمال، بما يشمل المستخدمين والأدوار والصلاحيات وسير العمل والتقارير والنماذج والأتمتة وحل المشاكل ودعم المستخدمين.",
      points: [
        "عمل على ERPNext في AFMCO والشركة الحالية",
        "إدارة المستخدمين والأدوار والصلاحيات وسير العمل",
        "الأتمتة وضبط إجراءات العمل بين الأقسام",
        "تدريب المستخدمين ودعم الأقسام"
      ]
    }
  },
  infra: {
    en: {
      title: "Infrastructure strength",
      text: "Aazad combines end-user support with practical infrastructure knowledge across Microsoft 365, Windows/Linux, cloud VPS, networks, backups, and site support.",
      points: [
        "Microsoft 365, Exchange Online, Entra ID",
        "Windows Server and Linux Ubuntu support",
        "DigitalOcean / Contabo VPS environments",
        "LAN/WAN, VPN, routing, switching and Wi-Fi troubleshooting"
      ]
    },
    ar: {
      title: "قوة البنية التحتية",
      text: "يجمع آزاد بين دعم المستخدمين والخبرة العملية في البنية التحتية عبر Microsoft 365 وWindows/Linux والخوادم السحابية والشبكات والنسخ الاحتياطي ودعم المواقع.",
      points: [
        "Microsoft 365 وExchange Online وEntra ID",
        "دعم Windows Server وLinux Ubuntu",
        "بيئات VPS على DigitalOcean وContabo",
        "حل مشاكل LAN/WAN وVPN والتوجيه والسويتشات وWi-Fi"
      ]
    }
  },
  impact: {
    en: {
      title: "Business impact",
      text: "His value is in keeping IT services stable, reducing manual work, improving ERP follow-up, supporting departments, documenting SOPs, and making technology useful for business teams.",
      points: [
        "Improves follow-up through ERP workflows and reports",
        "Reduces paperwork through digital processes",
        "Supports multi-business environments",
        "Coordinates with vendors and internal users"
      ]
    },
    ar: {
      title: "الأثر على العمل",
      text: "قيمته في الحفاظ على استقرار خدمات تقنية المعلومات، تقليل العمل اليدوي، تحسين المتابعة عبر ERP، دعم الأقسام، توثيق الإجراءات، وجعل التقنية مفيدة لفرق العمل.",
      points: [
        "تحسين المتابعة عبر سير العمل والتقارير في ERP",
        "تقليل الأعمال الورقية عبر الإجراءات الرقمية",
        "دعم بيئات أعمال متعددة",
        "التنسيق مع الموردين والمستخدمين الداخليين"
      ]
    }
  }
};

const aiAnswer = document.getElementById("aiAnswer");
const promptChips = document.querySelectorAll(".prompt-chip");

function currentLang() {
  return document.body.classList.contains("lang-ar") ? "ar" : "en";
}

function renderRecruiterAnswer(key) {
  if (!aiAnswer || !recruiterAnswers[key]) return;
  const data = recruiterAnswers[key][currentLang()];
  aiAnswer.querySelector("h3").textContent = data.title;
  aiAnswer.querySelector("p").textContent = data.text;
  aiAnswer.querySelector("ul").innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
}

promptChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    promptChips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderRecruiterAnswer(chip.dataset.answer);
  });
});

renderRecruiterAnswer("fit");

/* Re-render recruiter answer when language changes */
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const activeChip = document.querySelector(".prompt-chip.active");
    setTimeout(() => renderRecruiterAnswer(activeChip?.dataset.answer || "fit"), 20);
  });
});

/* V4 Command Palette */
const commandPalette = document.getElementById("commandPalette");
const commandOpen = document.getElementById("commandOpen");
const commandClose = document.getElementById("commandClose");
const commandBackdrop = document.getElementById("commandBackdrop");
const commandInput = document.getElementById("commandInput");
const commandResults = document.getElementById("commandResults");

const commands = [
  { labelEn: "Open CV", labelAr: "فتح السيرة الذاتية", hintEn: "View or download Aazad's CV", hintAr: "عرض أو تحميل السيرة الذاتية", action: () => window.open("assets/Aazad_Mir_CV.pdf", "_blank") },
  { labelEn: "LinkedIn Profile", labelAr: "ملف LinkedIn", hintEn: "Open LinkedIn profile", hintAr: "فتح ملف LinkedIn", action: () => window.open("https://www.linkedin.com/in/aazadmir1996/", "_blank") },
  { labelEn: "Email Aazad", labelAr: "إرسال بريد إلى آزاد", hintEn: "Send email", hintAr: "إرسال بريد إلكتروني", action: () => window.location.href = "mailto:aazadmir111@gmail.com" },
  { labelEn: "WhatsApp", labelAr: "واتساب", hintEn: "Message on WhatsApp", hintAr: "مراسلة عبر واتساب", action: () => window.open("https://wa.me/966541802463", "_blank") },
  { labelEn: "Save Contact", labelAr: "حفظ جهة الاتصال", hintEn: "Download vCard contact file", hintAr: "تحميل ملف جهة الاتصال", action: () => window.location.href = "assets/Aazad_Mir_Contact.vcf" },
  { labelEn: "Go to ERPNext Projects", labelAr: "الانتقال إلى مشاريع ERPNext", hintEn: "Jump to project section", hintAr: "الانتقال إلى قسم المشاريع", action: () => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" }) },
  { labelEn: "Go to Skills", labelAr: "الانتقال إلى المهارات", hintEn: "Jump to skills section", hintAr: "الانتقال إلى قسم المهارات", action: () => document.querySelector("#skills").scrollIntoView({ behavior: "smooth" }) },
  { labelEn: "Recruiter Quick View", labelAr: "العرض السريع لأصحاب العمل", hintEn: "Jump to AI Recruiter View", hintAr: "الانتقال إلى العرض الذكي", action: () => document.querySelector("#command-center").scrollIntoView({ behavior: "smooth" }) }
];

function openPalette() {
  commandPalette.classList.add("open");
  commandPalette.setAttribute("aria-hidden", "false");
  commandInput.value = "";
  renderCommands();
  setTimeout(() => commandInput.focus(), 20);
}

function closePalette() {
  commandPalette.classList.remove("open");
  commandPalette.setAttribute("aria-hidden", "true");
}

function renderCommands() {
  const q = commandInput.value.trim().toLowerCase();
  const lang = currentLang();
  const filtered = commands.filter((cmd) => {
    const text = `${cmd.labelEn} ${cmd.labelAr} ${cmd.hintEn} ${cmd.hintAr}`.toLowerCase();
    return text.includes(q);
  });

  commandResults.innerHTML = filtered.map((cmd, index) => `
    <button class="command-item ${index === 0 ? "active" : ""}" data-index="${commands.indexOf(cmd)}">
      <strong>${lang === "ar" ? cmd.labelAr : cmd.labelEn}</strong>
      <span>${lang === "ar" ? cmd.hintAr : cmd.hintEn}</span>
    </button>
  `).join("");

  commandResults.querySelectorAll(".command-item").forEach((item) => {
    item.addEventListener("click", () => {
      const cmd = commands[Number(item.dataset.index)];
      closePalette();
      cmd.action();
    });
  });
}

commandOpen?.addEventListener("click", openPalette);
commandClose?.addEventListener("click", closePalette);
commandBackdrop?.addEventListener("click", closePalette);
commandInput?.addEventListener("input", renderCommands);

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openPalette();
  }

  if (event.key === "Escape") {
    closePalette();
  }

  if (event.key === "Enter" && commandPalette?.classList.contains("open")) {
    const active = commandResults.querySelector(".command-item.active");
    if (active) {
      const cmd = commands[Number(active.dataset.index)];
      closePalette();
      cmd.action();
    }
  }
});
