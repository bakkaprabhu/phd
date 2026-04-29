/* =============================================
   PhD Scholar Roadmap — script.js
   ============================================= */

/* ─────────────────────────────────────────────
   ROADMAP DATA
   To add a new node:
   1. Add a new entry here with a unique key.
   2. Add a matching <div class="node" data-id="KEY"> in index.html.
   ───────────────────────────────────────────── */
const roadmapData = {

  before: {
    icon: "🌱",
    title: "Before PhD",
    summary:
      "Your PhD journey begins well before you submit any application. Laying a strong academic and mental foundation is the most important preparation you can do.",
    points: [
      "Identify your research interests — explore papers, attend seminars, and talk to academics in your target field.",
      "Build a strong academic record: a solid GPA and relevant coursework signal readiness for research.",
      "Gain research experience through undergraduate projects, internships, or working as a research assistant.",
      "Decide between PhD types: industry vs. academia, funded vs. self-funded, full-time vs. part-time.",
      "Research potential supervisors thoroughly — their mentoring style can define your entire PhD experience.",
      "Understand the time commitment: a typical PhD spans 3–7 years depending on country and discipline.",
    ],
    tips: [
      "Read at least 20–30 papers in your target area before applying — it sharpens your research statement.",
      "Email potential supervisors before applying. A brief, specific message shows genuine interest.",
      "Talk to current PhD students about their day-to-day reality — it sets realistic expectations.",
      "Start building your academic network on LinkedIn, ResearchGate, and X (Twitter) early.",
    ],
  },

  admission: {
    icon: "📋",
    title: "Admission Process",
    summary:
      "Gaining admission to a PhD programme involves multiple components — each requiring careful preparation and often months of work. Give yourself at least 6–9 months of lead time.",
    points: [
      "Craft a compelling Statement of Purpose (SoP): describe your research question, why this programme, and why you.",
      "Secure strong Letters of Recommendation (LoRs) from academics who know your research work closely.",
      "Prepare for standardised tests: GRE (most US programmes), IELTS/TOEFL (international applicants).",
      "Write a Research Proposal if required — frame a clear problem, methodology, and contribution to knowledge.",
      "Prepare your CV/Resume: highlight publications, projects, conferences, awards, and teaching experience.",
      "Apply to 6–10 programmes spanning reach, target, and safety to maximise your chances.",
      "Understand funding models: fellowships, assistantships (RA/TA), scholarships, or self-funding.",
    ],
    tips: [
      "Tailor each SoP to the specific programme and supervisor — generic statements are obvious and weak.",
      "Give recommenders at least 6 weeks' notice, and provide them your CV and draft SoP to ease their work.",
      "Apply to funded positions first — PhD debt is a heavy burden unless strategically justified.",
      "Interview well: prepare a crisp 3-minute pitch of your research interest and past work.",
    ],
  },

  coursework: {
    icon: "📚",
    title: "Coursework",
    summary:
      "Most PhD programmes begin with a coursework phase lasting 1–2 years. These courses deepen your domain knowledge, introduce research methodology, and often include qualifying or comprehensive exams.",
    points: [
      "Core courses typically cover research methodology, statistics/data analysis, and domain-specific theory.",
      "Qualifying / Comprehensive Exams test broad knowledge of your field — treat them as a structured reading programme.",
      "Elective courses allow you to build specialist skills outside your narrow research focus.",
      "Teaching Assistantships (TA) during this phase fund your degree and develop communication skills.",
      "Attend departmental talks and colloquia — informal exposure to active research is invaluable.",
      "Begin building your literature review foundation even during coursework; maintain a reference manager (Zotero, Mendeley).",
    ],
    tips: [
      "Don't wait until courses end to start reading for your thesis — parallelise from day one.",
      "Form a cohort study group: sharing notes and discussing papers accelerates everyone's progress.",
      "Connect coursework assignments to your research question whenever the instructor allows.",
      "Zotero + a shared group library with your supervisor is a simple, powerful workflow.",
    ],
  },

  research: {
    icon: "🔬",
    title: "Research Phase",
    summary:
      "The heart of your PhD: original, independent investigation into your chosen problem. This is where most scholars spend the bulk of their time, and where the shape of your thesis emerges.",
    points: [
      "Define a clear, focused research question — 'too broad' is the single most common early-PhD mistake.",
      "Conduct a systematic literature review to map what is known, unknown, and contested in your field.",
      "Design your methodology: experimental, computational, qualitative, mixed-methods — justify every choice.",
      "Collect and analyse data rigorously; document every step for reproducibility.",
      "Hold regular check-ins with your supervisor — at least bi-weekly; share written progress notes.",
      "Attend national and international conferences to present work-in-progress and receive expert feedback.",
      "Expect and embrace iteration: most research paths fork, stall, or reverse before yielding contribution.",
    ],
    tips: [
      "Keep a research journal. Writing down dead-ends prevents repeating them and reveals patterns over time.",
      "Version-control all your code and data from day one (Git + GitHub/GitLab).",
      "Use a 'minimum viable paper' mindset: get to a submittable result quickly, then improve.",
      "Attend a writing retreat or camp — concentrated writing time is astonishingly productive.",
    ],
  },

  publishing: {
    icon: "📰",
    title: "Publishing Papers",
    summary:
      "Publications validate your research, establish your scholarly identity, and often form chapters of your thesis. Navigating the academic publishing ecosystem is a skill in itself.",
    points: [
      "Understand the journal vs. conference distinction: STEM favours conferences; humanities & social sciences favour journals.",
      "Target journals by impact factor, scope, and audience — check where your cited papers are published.",
      "Structure a manuscript using the IMRaD format: Introduction, Methods, Results and Discussion.",
      "Expect peer review to take 3–12 months; use waiting periods to start the next paper.",
      "Learn to handle reviewer comments professionally — a 'major revision' is not a rejection.",
      "Explore open-access routes (preprint servers, gold OA) to maximise visibility of your work.",
      "Track your submission pipeline in a simple spreadsheet: journal, submitted, status, decision.",
    ],
    tips: [
      "Post a preprint on arXiv, SSRN, or bioRxiv immediately after submission — your ideas get visible sooner.",
      "Co-authoring with your supervisor accelerates early publications and models good paper writing.",
      "Read journal reviewer guidelines before writing — editors desk-reject papers that ignore scope.",
      "Write the abstract last; it should summarise what you actually found, not what you hoped to find.",
    ],
  },

  thesis: {
    icon: "📝",
    title: "Thesis Writing",
    summary:
      "Your thesis is the definitive record of your PhD contribution. Writing it is a major project requiring sustained discipline, clear structure, and close collaboration with your supervisor.",
    points: [
      "Know your institution's thesis format: monograph (one long book) vs. paper-based (stapled publications) — they need very different strategies.",
      "Write from the beginning, not just at the end — early chapters written during the research phase save enormous time.",
      "Use a consistent style guide (APA, Chicago, Vancouver) and manage all citations in your reference manager.",
      "Create a detailed chapter outline agreed on with your supervisor before writing any chapter in full.",
      "Plan your submission timeline backwards from your target submission date, with milestones for each chapter.",
      "Seek feedback from peers on draft chapters — fresh eyes catch gaps in argument that you are too close to see.",
    ],
    tips: [
      "Aim to write 500–1000 words every working day rather than marathon sessions — consistency beats intensity.",
      "Use a dedicated writing tool (Scrivener, LaTeX with Overleaf, or even a well-organised Word template).",
      "Your introduction and conclusion are read most — allocate extra revision time to them.",
      "Schedule a mock viva with colleagues at least one month before submission to identify weaknesses.",
    ],
  },

  defense: {
    icon: "🏛️",
    title: "Defense / Viva Voce",
    summary:
      "The viva voce (oral examination) or dissertation defence is the final formal hurdle of your PhD. A panel of examiners evaluates your thesis and your understanding of the work. Preparation makes the decisive difference.",
    points: [
      "Know your thesis inside-out: be ready to discuss, justify, and critique every section and methodological choice.",
      "Prepare a concise 10–15 minute opening presentation summarising your key contribution and findings.",
      "Anticipate likely questions: What is your original contribution? What are the limitations? What would you do differently?",
      "Viva outcomes vary: pass without corrections, minor corrections (typically 3 months), major corrections (6–12 months), or rarely, a resubmission.",
      "The examiners want you to pass — approach the viva as a scholarly conversation, not an interrogation.",
    ],
    tips: [
      "Re-read your thesis one week before the viva — pay special attention to abstract, intro, methodology, and conclusion.",
      "Conduct a mock viva with your supervisor or a senior PhD student who will ask hard questions.",
      "It is completely valid (and professional) to say 'That is a good point; I would address that in future work.'",
      "Prepare one slide per chapter for your opening summary — visual anchors help both you and the panel.",
    ],
  },

  mentalhealth: {
    icon: "🧠",
    title: "Life & Mental Health",
    summary:
      "A PhD is a marathon, not a sprint. Studies consistently show that PhD students experience anxiety, depression, and burnout at rates far above the general population. Taking care of your mental health is not optional — it is foundational to finishing.",
    points: [
      "Imposter syndrome is near-universal in PhD programmes — recognise it as a cognitive distortion, not evidence of incompetence.",
      "Isolation is a structural feature of PhD programmes; counteract it actively through cohort, writing groups, and social events.",
      "Set firm boundaries: working 80-hour weeks is not productive; it is a path to burnout and poor-quality thinking.",
      "Know the difference between normal PhD difficulty (frustrating but manageable) and a toxic supervisor relationship (which requires intervention).",
      "Use your institution's counselling and mental health services without stigma — they exist for exactly this purpose.",
      "Build a life outside academia: exercise, hobbies, friendships, and rest make your PhD hours more effective, not less.",
    ],
    tips: [
      "Name your support network explicitly: at least one friend, one family member, and one fellow PhD student you can be honest with.",
      "A daily minimum viable routine (sleep, movement, meals) is not a luxury — protect it even in crunch periods.",
      "If your supervisor relationship becomes harmful, speak to your graduate advisor or ombudsperson — you have rights.",
      "Track small wins in a 'done list', not just your to-do list. Progress is often invisible day-to-day.",
    ],
  },

  career: {
    icon: "🚀",
    title: "Career After PhD",
    summary:
      "Completing a PhD opens multiple career paths, not just a postdoc or academic position. Your transferable skills — critical thinking, research design, communication, project management — are valuable far beyond universities.",
    points: [
      "Academic track: Postdoc → Lecturer/Assistant Professor → Senior/Associate → Full Professor. Highly competitive; plan publications and networks early.",
      "Industry R&D: Tech, pharma, finance, and consulting firms hire PhDs for research, data science, and product roles.",
      "Government and policy: think tanks, national labs, and civil service positions value research training and analytical rigour.",
      "Entrepreneurship: your deep domain expertise is a strong foundation for a research-driven startup or spin-out.",
      "Science communication, publishing, and education are rewarding alternative-academic ('alt-ac') paths.",
      "Begin networking, attending job talks, and updating your public profile at least 18 months before finishing.",
    ],
    tips: [
      "Maintain an online portfolio: a personal website with your CV, papers, and a brief research summary is expected in academic applications.",
      "Develop one strong non-research skill during your PhD: data engineering, science writing, project management, or public speaking.",
      "For industry roles, translate your PhD experience into outcomes and impact — not methods and terminology.",
      "Informational interviews with alumni in roles you are curious about cost nothing and teach you everything.",
    ],
  },
};

/* ─────────────────────────────────────────────
   CONNECTOR DEFINITIONS
   Format: [sourceNodeId, targetNodeId]
   The connector line is drawn between the
   centre of each matching .node element.
   ───────────────────────────────────────────── */
const connections = [
  ["before",      "admission"],
  ["admission",   "coursework"],
  ["admission",   "research"],
  ["coursework",  "publishing"],
  ["research",    "thesis"],
  ["publishing",  "defense"],
  ["thesis",      "defense"],
  ["defense",     "career"],
  ["admission",   "mentalhealth"],   // mental health runs alongside everything
];

/* ─────────────────────────────────────────────
   DARK MODE TOGGLE
   ───────────────────────────────────────────── */
const darkToggle = document.getElementById("darkToggle");
const toggleIcon  = darkToggle.querySelector(".toggle-icon");
const toggleLabel = darkToggle.querySelector(".toggle-label");

// Persist preference
const savedTheme = localStorage.getItem("phd-theme");
if (savedTheme) setTheme(savedTheme);

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  if (mode === "dark") {
    toggleIcon.textContent  = "☀️";
    toggleLabel.textContent = "Light Mode";
  } else {
    toggleIcon.textContent  = "🌙";
    toggleLabel.textContent = "Dark Mode";
  }
}

darkToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  setTheme(next);
  localStorage.setItem("phd-theme", next);
  // Redraw connectors since colours may change
  drawConnectors();
});

/* ─────────────────────────────────────────────
   MODAL LOGIC
   ───────────────────────────────────────────── */
const overlay   = document.getElementById("modalOverlay");
const modal     = document.getElementById("modal");
const closeBtn  = document.getElementById("modalClose");
const modalIcon    = document.getElementById("modalIcon");
const modalTitle   = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalPoints  = document.getElementById("modalPoints");
const modalTips    = document.getElementById("modalTips");

let activeNode = null;

function openModal(nodeId) {
  const data = roadmapData[nodeId];
  if (!data) return;

  // Populate
  modalIcon.textContent    = data.icon;
  modalTitle.textContent   = data.title;
  modalSummary.textContent = data.summary;

  modalPoints.innerHTML = data.points
    .map(p => `<li>${p}</li>`)
    .join("");

  modalTips.innerHTML = data.tips
    .map(t => `<li>${t}</li>`)
    .join("");

  overlay.classList.add("open");
  modal.scrollTop = 0;
  closeBtn.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (activeNode) {
    activeNode.classList.remove("active");
    activeNode = null;
  }
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ─────────────────────────────────────────────
   NODE CLICK HANDLERS
   ───────────────────────────────────────────── */
document.querySelectorAll(".node").forEach(node => {
  // Accessibility
  node.setAttribute("role", "button");
  node.setAttribute("tabindex", "0");
  node.setAttribute("aria-label", "Open details: " + node.querySelector(".node-label").textContent);

  node.addEventListener("click", () => {
    // Remove previous active state
    if (activeNode) activeNode.classList.remove("active");
    node.classList.add("active");
    activeNode = node;
    openModal(node.dataset.id);
  });

  node.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      node.click();
    }
  });
});

/* ─────────────────────────────────────────────
   DRAW CONNECTORS (SVG lines)
   Uses the bounding box of each node to find
   centre points and draws a curved path.
   ───────────────────────────────────────────── */
function drawConnectors() {
  const svg    = document.getElementById("connectorSvg");
  const canvas = document.getElementById("roadmapCanvas");
  const canvasRect = canvas.getBoundingClientRect();

  svg.innerHTML = ""; // clear

  connections.forEach(([fromId, toId]) => {
    const fromEl = canvas.querySelector(`[data-id="${fromId}"]`);
    const toEl   = canvas.querySelector(`[data-id="${toId}"]`);
    if (!fromEl || !toEl) return;

    const fR = fromEl.getBoundingClientRect();
    const tR = toEl.getBoundingClientRect();

    // Centre points relative to canvas
    const x1 = fR.left - canvasRect.left + fR.width  / 2;
    const y1 = fR.top  - canvasRect.top  + fR.height / 2;
    const x2 = tR.left - canvasRect.left + tR.width  / 2;
    const y2 = tR.top  - canvasRect.top  + tR.height / 2;

    // Bezier control points (nice S-curve)
    const cx1 = x1;
    const cy1 = y1 + (y2 - y1) * 0.5;
    const cx2 = x2;
    const cy2 = y2 - (y2 - y1) * 0.5;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M${x1},${y1} C${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`);

    // Dashed mental-health branch
    if (fromId === "mentalhealth" || toId === "mentalhealth") {
      path.style.strokeDasharray = "5 5";
      path.style.opacity = "0.5";
    }

    svg.appendChild(path);
  });
}

// Draw on load and on resize
window.addEventListener("load",   drawConnectors);
window.addEventListener("resize", drawConnectors);

// Also re-draw once fonts are loaded (layout may shift)
document.fonts.ready.then(drawConnectors);
