/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║               YOUR WEBSITE DATA — ONLY EDIT THIS FILE          ║
 * ║                                                                  ║
 * ║  index.html reads this file automatically.                      ║
 * ║  You never need to touch index.html.                            ║
 * ║                                                                  ║
 * ║  QUICK UPDATE GUIDE:                                            ║
 * ║  ▸ New paper?      → add to PUBLICATIONS (copy a block)         ║
 * ║  ▸ New news?       → add to NEWS (newest at TOP)                ║
 * ║  ▸ New award?      → add to AWARDS                              ║
 * ║  ▸ New skill?      → add a tag inside any SKILLS category       ║
 * ║  ▸ New project?    → add to PROJECTS                            ║
 * ║  ▸ New service?    → add to SERVICE.reviewing or .talks         ║
 * ║  ▸ New course?     → add to TEACHING                            ║
 * ║  ▸ Change photo?   → update the "photo" field below             ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const DATA = {

  /* ── PERSONAL ─────────────────────────────────────────────────── */
  name:        "Dhrubajyoti Das",
  degree:      "PhD Researcher",
  title:       "Computer Vision",
  affiliation: "Queensland University of Technology",
  location:    "Brisbane, QLD, Australia",
  photo:       "images/dhruba.jpg",   // ← replace filename here if you update your photo
  cv_url:      "https://drive.google.com/file/d/16-ljwzCIxmD0AhrVS_FQ_7h1xU9lhrqn/view",

  /* ── CONTACT ──────────────────────────────────────────────────── */
  email_uni:      "dhrubajyoti.das@hdr.qut.edu.au",
  email_personal: "dhrubajyoti1212@gmail.com",
  phone:          "+61 0415 526 569",

  /* ── SOCIAL LINKS ─────────────────────────────────────────────── */
  links: {
    scholar:      "https://scholar.google.com/citations?user=TgJafOwAAAAJ&hl=en",
    github:       "https://github.com/dhrubapuc23",
    linkedin:     "https://www.linkedin.com/in/dhrubapuc/",
    researchgate: "https://www.researchgate.net/profile/Dhrubajyoti-Das-6",
    orcid:        "https://orcid.org/0000-0003-2419-1641",
  },

  /* ── BIO  (HTML tags like <strong>, <a href=""> are OK) ────────── */
  bio: `I am a first-year PhD student at <strong>Queensland University of Technology (QUT)</strong>,
    Brisbane, Australia, affiliated with the <strong>Allergy Research Group</strong>, the
    <strong>Centre for Immunology and Infection Control (CIIC)</strong>, and the
    <strong>QUT Centre for Robotics</strong>.

    My doctoral research focuses on <strong>identifying and monitoring flowering events in subtropical
    and temperate Australian grasses using computer vision and deep learning</strong>. This work
    advances real-time pollen forecasting and supports public health outcomes for the
    millions of Australians living with allergic rhinitis and asthma.

    Prior to QUT, I served as an <strong>Assistant Professor</strong> at Premier University,
    Chattogram, Bangladesh, where I taught and mentored students for over six years. My broader
    research interests span <strong>object detection, biomedical image analysis, explainable AI,
    and natural language processing</strong>.`,

  /* ── SUPERVISORS ──────────────────────────────────────────────── */
  supervisors: [
    { name: "Prof. Janet Davies",    dept: "School of Biomedical Sciences",               inst: "QUT" },
    { name: "Prof. Michael Milford", dept: "School of Electrical Engineering & Robotics", inst: "QUT" },
    { name: "Dr. Andelija Milic",    dept: "School of Biomedical Sciences",               inst: "QUT" },
  ],

  /* ── RESEARCH INTERESTS ───────────────────────────────────────── */
  research_interests: [
    "Computer Vision",
    "Deep Learning",
    "Explainable AI (XAI)",
    "Biomedical Image Analysis",
    "Natural Language Processing",
    "Vision and Language Models",
  ],

  /* ════════════════════════════════════════════════════════════════
     NEWS  ── Add newest item at the TOP
     { date: "Mon YYYY", text: "..." }   HTML allowed in text.
  ════════════════════════════════════════════════════════════════ */
  news: [
    // ↓ ADD NEW NEWS HERE — copy the block below and paste above this line
    // { date: "Mar 2026", text: "Your update here." },

    {
      date: "Jan 2026",
      text: `Paper accepted in <em>IET Image Processing</em> (Wiley): "Advancing Traffic Safety in Dense Urban Settings — Real-Time Wrong-Way Driving Detection System."`
    },
    {
      date: "Oct 2025",
      text: `Commenced <strong>PhD at Queensland University of Technology</strong>, joining the Allergy Research Group, CIIC and QUT Centre for Robotics.`
    },
    {
      date: "Jun 2025",
      text: `Paper published in <em>SN Computer Science</em>, Springer (vol. 6, art. 472): "An Enhanced Deep Learning Framework for Pneumonia Detection in Chest X-rays."`
    },
    {
      date: "Sep 2023",
      text: `Paper published in <em>IEEE Access</em>: "Outdoor Trash Detection in Natural Environment Using a Deep Learning Model."`
    },
    {
      date: "Aug 2023",
      text: `Paper published at <em>BIM 2023</em> (Springer LNNS): "Bengali Hate Speech Detection with BERT and Deep Learning Models."`
    },
    {
      date: "Nov 2022",
      text: `Received <strong>Top 10 Elected Paper Award</strong> at ICO 2022 for "Trash Image Classification Using Transfer Learning Based Deep Neural Network."`
    },
  ],

  /* ════════════════════════════════════════════════════════════════
     PUBLICATIONS
     type:     "journal" or "conference"
     award:    optional badge text e.g. "⭐ Best Paper Award"
     keywords: optional array of tags
     doi:      full DOI URL

     To add a new paper → copy one block, paste at top of correct
     group (journals or conferences), and fill in the details.
  ════════════════════════════════════════════════════════════════ */
  publications: [

    /* ─── JOURNAL ARTICLES ─────────────────────────────────────── */
    // ↓ ADD NEW JOURNAL PAPER HERE
    {
      type: "journal",
      year: 2026,
      authors: "Anik Majumder, Joya Mallick, <strong>Dhrubajyoti Das</strong>*, Avishek Chowdhury, Shranbanti Debi",
      title: "Advancing Traffic Safety in Dense Urban Settings: A Robust Real-Time Wrong-Way Driving Detection System with Hough Transform and YOLOv5",
      venue: "IET Image Processing, Wiley",
      doi: "https://doi.org/10.1049/ipr2.70322",
      keywords: ["YOLOv5", "Traffic Safety", "Computer Vision"],
    },
    {
      type: "journal",
      year: 2025,
      authors: "Asma Binte Rashid, Jannatul Asma, Krittika Barua, <strong>Dhrubajyoti Das</strong>*",
      title: "An Enhanced Deep Learning Framework for Pneumonia Detection in Chest X-rays",
      venue: "SN Computer Science, Springer, vol. 6, art. 472",
      doi: "https://doi.org/10.1007/s42979-025-04017-x",
      keywords: ["Medical Imaging", "Deep Learning", "Pneumonia"],
    },
    {
      type: "journal",
      year: 2023,
      authors: "<strong>Dhrubajyoti Das</strong>, Kaushik Deb, Taufique Sayeed, Pranab Kumar Dhar, Tetsuya Shimamura",
      title: "Outdoor Trash Detection in Natural Environment Using a Deep Learning Model",
      venue: "IEEE Access, vol. 11, pp. 103497–103508",
      doi: "https://doi.org/10.1109/ACCESS.2023.3313166",
      keywords: ["YOLOv5", "Object Detection", "Environmental AI"],
    },

    /* ─── CONFERENCE PAPERS ─────────────────────────────────────── */
    // ↓ ADD NEW CONFERENCE PAPER HERE
    {
      type: "conference",
      year: 2023,
      authors: "Md. Jobair, <strong>Dhrubajyoti Das</strong>*, Nimmy Binte Islam, Munna Dhar",
      title: "Bengali Hate Speech Detection with BERT and Deep Learning Models",
      venue: "2nd Int. Conf. on Big Data, IoT and Machine Learning (BIM 2023), Springer LNNS vol. 867, pp. 845–859",
      doi: "https://doi.org/10.1007/978-981-99-8937-9_56",
      keywords: ["NLP", "BERT", "Hate Speech"],
    },
    {
      type: "conference",
      year: 2023,
      authors: "Shuhena Salam Aonty, Kaushik Deb, <strong>Dhrubajyoti Das</strong>, Kanghyun Jo",
      title: "Human Pose Estimation Using Parallel Architecture",
      venue: "Int. Workshop on Intelligent Systems (IWIS 2023), IEEE",
      doi: "https://doi.org/10.1109/IWIS58789.2023.10284672",
      keywords: ["Pose Estimation", "Computer Vision"],
    },
    {
      type: "conference",
      year: 2022,
      authors: "<strong>Dhrubajyoti Das</strong>, Anik Sen, Syed Md. Minhaz Hossain, Kaushik Deb",
      title: "Trash Image Classification Using Transfer Learning Based Deep Neural Network",
      venue: "Int. Conf. on Optimization, Soft Computing and Signal Processing (ICO 2022), Springer, pp. 561–571",
      doi: "https://doi.org/10.1007/978-3-031-19958-5_53",
      award: "⭐ Top 10 Paper Award",
      keywords: ["Transfer Learning", "Image Classification", "DenseNet"],
    },
    {
      type: "conference",
      year: 2022,
      authors: "Md. Saiful Islam, <strong>Dhrubajyoti Das</strong>*, Saurav Das, Md. Nahid Ullah",
      title: "Sign Language Recognition for Bangla Alphabets Using Deep Learning Methods",
      venue: "Int. Conf. on Science and Technology Innovation (STI 2022), IEEE",
      doi: "https://doi.org/10.1109/STI56238.2022.10103291",
      keywords: ["Sign Language", "CNN", "Deep Learning"],
    },
  ],

  /* ════════════════════════════════════════════════════════════════
     EDUCATION
  ════════════════════════════════════════════════════════════════ */
  education: [
    {
      degree: "Doctor of Philosophy (PhD)",
      field:  "Computer Vision",
      inst:   "Queensland University of Technology (QUT)",
      loc:    "Brisbane, QLD, Australia",
      period: "Oct 2025 – Present",
      note:   "CIIC Allergy Research Group · QUT Centre for Robotics",
    },
    {
      degree: "M.Sc. in Computer Science and Engineering",
      inst:   "Chittagong University of Engineering & Technology (CUET)",
      loc:    "Chattogram, Bangladesh",
      period: "2018 – 2023 (part-time)",
      note:   "Thesis: Trash Classification Using Deep Neural Networks · Supervisor: Dr. Kaushik Deb",
    },
    {
      degree: "B.Sc. in Computer Science and Engineering",
      inst:   "Premier University (PU)",
      loc:    "Chattogram, Bangladesh",
      period: "2013 – 2018",
      note:   "Project: War71 - Real-time Multiplayer Quiz Game",
    },
  ],

  /* ════════════════════════════════════════════════════════════════
     EXPERIENCE  ── Add newest at TOP
  ════════════════════════════════════════════════════════════════ */
  experience: [
    {
      role:   "PhD Researcher",
      org:    "Queensland University of Technology (QUT)",
      loc:    "Brisbane, Australia",
      period: "Oct 2025 – Present",
      bullets: [
        "Building end-to-end CV and deep learning pipelines for real-time grass flowering event detection to advance pollen forecasting.",
        "Cross-disciplinary research across Biomedical Sciences and Electrical Engineering & Robotics.",
        "Affiliations: CIIC Allergy Research Group and QUT Centre for Robotics.",
      ],
    },
    {
      role:   "Assistant Professor (on leave)",
      org:    "Premier University, Dept. of CSE",
      loc:    "Chattogram, Bangladesh",
      period: "Jul 2024 – Sep 2025",
      bullets: [
        "Taught Algorithm Design & Analysis, Advanced OOP, and research methodology.",
        "Currently on study leave to pursue PhD at QUT.",
      ],
    },
    {
      role:   "Lecturer",
      org:    "Premier University, Dept. of CSE",
      loc:    "Chattogram, Bangladesh",
      period: "Oct 2018 – Jun 2024",
      bullets: [
        "Delivered 20+ undergraduate courses to 1,200+ students over 6 years: Data Structures, Algorithms, DBMS, OOP (Java), Software Engineering.",
        "Supervised 25+ final-year thesis projects; several led to peer-reviewed publications.",
        "Academic advisor for multiple student cohorts; co-designed department lab curricula.",
      ],
    },
    {
      role:   "Graduate Student Researcher",
      org:    "Computer Vision Research Group, CUET",
      loc:    "Chattogram, Bangladesh",
      period: "Jan 2021 – Oct 2023",
      bullets: [
        "DenseNet169 trash-categorisation model: <strong>93.10% accuracy</strong>.",
        "YOLOv5 outdoor detection: <strong>mAP 45.4%</strong>, single-class mAP 84.4%, F1 78.2% — IEEE Access.",
        "Contributed to bone-age assessment and human pose estimation research.",
      ],
    },
    {
      role:   "Teaching Assistant",
      org:    "Cox's Bazar International University, Dept. of CSE",
      loc:    "Cox's Bazar, Bangladesh",
      period: "Oct 2017 – Sep 2018",
      bullets: [
        "Taught OOP in Java and Data Structures for undergraduate classes.",
      ],
    },
  ],

  /* ════════════════════════════════════════════════════════════════
     AWARDS  ── Add newest at TOP
     icon: any emoji you like
  ════════════════════════════════════════════════════════════════ */
  awards: [
    { icon: "🎓", title: "QUT HDR Tuition Fee Scholarship",         desc: "Full tuition coverage for 4-year PhD — Queensland University of Technology, 2025" },
    { icon: "💰", title: "QUT Faculty Living Stipend Scholarship",   desc: "Full living stipend for PhD duration — Queensland University of Technology, 2025" },
    { icon: "🏥", title: "QUT Overseas Student Health Cover (OSHC)", desc: "Comprehensive health cover for full PhD duration — QUT, 2025" },
    { icon: "🏆", title: "ICO-2022 Top Ten Elected Paper Award",     desc: "Trash Image Classification recognised among top 10 papers at ICO 2022, Springer" },
    { icon: "📚", title: "University Merit Scholarship",             desc: "Premier University, 2013–2015 · Awarded for perfect 4.0 / 4.0 GPA in 5th semester" },
  ],

  /* ════════════════════════════════════════════════════════════════
     SKILLS  ── add/remove tags freely, or add a new category row
  ════════════════════════════════════════════════════════════════ */
  skills: [
    { cat: "Programming Languages",  items: ["Python", "C", "C++", "Java"] },
    { cat: "ML / Deep Learning",     items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV"] },
    { cat: "NLP & LLMs",             items: ["Transformers (HuggingFace)", "BERT", "NLTK", "spaCy", "GPT APIs"] },
    { cat: "Data & Analysis",        items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"] },
    { cat: "Web & Database",         items: ["PHP", "Laravel", "HTML5", "CSS3", "Bootstrap", "jQuery", "SQL", "MySQL"] },
    { cat: "Tools & Platforms",      items: ["Git", "GitHub", "Linux", "LaTeX"] },
  ],

  /* ════════════════════════════════════════════════════════════════
     TEACHING  ── courses taught
  ════════════════════════════════════════════════════════════════ */
  teaching: [
    { course: "Data Structures & Algorithms",       inst: "Premier University",   period: "2017–2025", note: "Theory + Lab · multiple offerings" },
    { course: "Object-Oriented Programming (Java)", inst: "Premier Univ. / CBIU", period: "2017–2025", note: "Theory + Lab" },
    { course: "Database Management Systems",        inst: "Premier University",   period: "2019–2025", note: "SQL, ER Models, Normalization" },
    { course: "Algorithm Design & Analysis",        inst: "Premier University",   period: "2021–2025", note: "Theory + Lab" },
    { course: "Software Development Project",       inst: "Premier University",   period: "2020–2024", note: "Laravel full-stack projects" },
    { course: "Structured Programming (C)",         inst: "Premier University",   period: "2020–2022", note: "First-year introductory programming" },
  ],

  /* ════════════════════════════════════════════════════════════════
     SERVICE
  ════════════════════════════════════════════════════════════════ */
  service: {
    reviewing: [
      "Multimedia Tools and Applications, Springer (2025)",
      "2nd Int. Conf. on Electrical and Computer Engineering Researches (ICECER 2025)",
      "Int. Conf. on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA 2025)",
      "Int. Conf. on Innovations in Science, Engineering and Technology (ICISET 2024)",
    ],
    talks: [
      { title: '"Transforming Ideas into Publications" Workshop', venue: "IEEE Student Branch, Premier University (2024)" },
      { title: "Research Methodology Seminar",                    venue: "Premier University, Dept. of CSE (2024)" },
    ],
  },

  /* ════════════════════════════════════════════════════════════════
     PROJECTS
     tag:    "PhD Research" | "Research" | "Supervised" | "Personal"
     status: "In Progress" | "Published" | "Completed"
  ════════════════════════════════════════════════════════════════ */
  projects: [
    {
      tag: "PhD Research",
      title: "Grass Flowering Event Detection for Pollen Forecasting",
      desc: "End-to-end CV pipeline for real-time detection and monitoring of grass flowering in subtropical and temperate Australia.",
      tech: ["PyTorch", "OpenCV"],
      status: "In Progress",
    },
    {
      tag: "Research",
      title: "Wrong-Way Vehicle Detection System",
      desc: "Real-time traffic safety system combining Hough Transform and YOLOv5 for dense urban environments. IET Image Processing, Wiley (2026).",
      tech: ["YOLOv5", "OpenCV", "Python"],
      status: "Published",
    },
    {
      tag: "Research",
      title: "Pneumonia Detection from Chest X-rays",
      desc: "Enhanced deep learning pipeline improving clinical pneumonia diagnosis. SN Computer Science, Springer (2025).",
      tech: ["DenseNet", "ResNet", "PyTorch"],
      status: "Published",
    },
    {
      tag: "Research",
      title: "Outdoor Trash Detection — YOLOv5",
      desc: "mAP 45.4%, single-class mAP 84.4%, F1 78.2%. IEEE Access (2023).",
      tech: ["YOLOv5", "DenseNet169", "Python"],
      status: "Published",
    },
    {
      tag: "Research",
      title: "Bengali Hate Speech Detection",
      desc: "BERT-based classifier for toxic Bengali content. BIM 2023, Springer LNNS.",
      tech: ["BERT", "HuggingFace", "NLP"],
      status: "Published",
    },
    {
      tag: "Research",
      title: "Bangla Sign Language Recognition",
      desc: "Deep CNN for real-time Bangla alphabet sign language. STI 2022, IEEE.",
      tech: ["CNN", "PyTorch", "OpenCV"],
      status: "Published",
    },
    {
      tag: "Supervised",
      title: "Telecare — Remote Health Consultation App",
      desc: "Audio consultation + prescription management built during COVID-19.",
      tech: ["Android", "Laravel", "MySQL"],
      status: "Completed",
    },
    {
      tag: "Personal",
      title: "War71 — Real-time Multiplayer Quiz Game",
      desc: "Android real-time multiplayer quiz using Google Play Games API. Final-year B.Sc. project (2018).",
      tech: ["Android", "Java", "Google Play API"],
      status: "Completed",
    },
  ],

}; // ← END — do not remove this line
