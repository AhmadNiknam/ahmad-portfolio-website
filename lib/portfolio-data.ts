export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Web Services", href: "#web-services" },
  { label: "Contact", href: "#contact" }
];

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/ahmad-niknam/",
  github: "https://github.com/AhmadNiknam",
  email: "mailto:contact@ahmadniknam.com",
  resumeRequest: "mailto:contact@ahmadniknam.com?subject=Resume%20Request%20-%20Ahmad%20Niknam",
  emailLabel: "contact@ahmadniknam.com"
};

export const heroEyebrow = "PERSONAL IT PORTFOLIO & WEB SERVICES";

/** Line breaks tuned for the Hero headline layout */
export const heroHeadlineLines = [
  "IT Support, Systems Support,",
  "and Technical Projects"
] as const;

export const heroBadges = [
  "AZ-104 Certified",
  "Microsoft 365",
  "Network & Systems Support"
];

export const heroProfileImageSrc = "/profile-ahmad-2026-v2.jpg";

export const heroCard = {
  name: "Ahmad Niknam",
  role: "IT Support | Systems Support",
  location: "Regina, SK",
  availability: "Available for opportunities"
} as const;

export const supportingCredentials = [
  {
    title: "WES-Verified Academic Credentials",
    issuer: "World Education Services (WES)",
    issued: "May 2026",
    label: "Verified International Academic Qualifications",
    description:
      "Bachelor’s and Master’s academic credentials completed internationally and verified by World Education Services for Canadian credential recognition."
  }
] as const;

export const skillGroups = [
  {
    title: "Cloud / Azure",
    icon: "AZ",
    summary: "Microsoft cloud administration and support across Azure, Microsoft 365, and endpoint services.",
    skills: [
      "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      "Microsoft Azure",
      "Microsoft 365",
      "Intune",
      "Identity"
    ]
  },
  {
    title: "Infrastructure",
    icon: "INF",
    summary: "Core server and directory services that keep business systems available.",
    skills: ["Windows Server", "Active Directory", "DNS / DHCP", "Virtualization", "Backup"]
  },
  {
    title: "Networking",
    icon: "NET",
    summary: "Structured troubleshooting across connectivity, segmentation, and access paths.",
    skills: ["Network & Systems Support", "VPN", "Routing", "Switching", "Connectivity"]
  },
  {
    title: "Operations & ITSM Tools",
    icon: "OPS",
    summary: "Service-focused habits for IT support, incidents, users, monitoring, and handoffs.",
    skills: [
      "IT Support",
      "Troubleshooting",
      "Documentation",
      "Freshservice",
      "Jira",
      "PRTG",
      "ServiceNow familiarity"
    ]
  },
  {
    title: "Automation",
    icon: "PS",
    summary: "Lightweight automation and reporting for repeatable support workflows.",
    skills: ["PowerShell Automation", "Microsoft Graph", "GitHub Actions", "Reporting"]
  },
  {
    title: "Web Systems Projects",
    icon: "WEB",
    summary: "Practical portal and deployment support where IT operations, documentation, and secure workflows matter.",
    skills: ["Next.js", "Supabase", "Vercel", "GitHub", "Admin Workflow"]
  }
];

export const projects = [
  {
    title: "Research Group Web Systems Support",
    date: "Feb 2026 - Present",
    associatedWith: "University of Regina",
    status: "In Progress",
    description:
      "Ongoing web systems support for University of Regina research group websites, forms, and deployment workflows.",
    impact:
      "Strengthens online presence, improves form-based submissions and administrative workflows, and supports reliable deployment and troubleshooting.",
    contribution:
      "Work includes website maintenance, web form development, GitHub and Vercel configuration, deployment support, and technical documentation.",
    tags: [
      "Next.js",
      "React",
      "GitHub",
      "Vercel",
      "Web Forms",
      "Documentation",
      "Technical Coordination"
    ]
  },
  {
    title: "Server Health Sentinel",
    description:
      "Hybrid server health check automation for on-prem and Azure environments using PowerShell. Provides readiness scoring, risk indicators, and HTML/CSV reporting.",
    impact: "Improves visibility into server readiness, service risk, and maintenance priorities.",
    tags: ["PowerShell", "Azure VM", "Windows Server"],
    githubUrl: "https://github.com/AhmadNiknam"
  },
  {
    title: "Hybrid Network Correlator",
    description:
      "Network incident correlation tool for Azure and on-prem systems with evidence-based ranking and alert workflows.",
    impact: "Connects scattered troubleshooting signals into clearer incident evidence.",
    tags: ["Azure Monitor", "PowerShell", "JSON"],
    githubUrl: "https://github.com/AhmadNiknam"
  },
  {
    title: "M365 Read-Only Audit Toolkit",
    description:
      "Microsoft 365 reporting toolkit using Microsoft Graph for user inventory, sign-in methods, licenses, and directory roles.",
    impact: "Helps administrators review tenant posture with read-only reporting and clear exports.",
    tags: ["PowerShell", "Microsoft Graph"],
    githubUrl: "https://github.com/AhmadNiknam"
  }
];

export const experienceItems = [
  {
    role: "IT Systems Support Specialist",
    company: "University of Regina · Permanent Part-time",
    location: "Regina, Saskatchewan, Canada · Hybrid",
    period: "Feb 2026 – Present",
    summary:
      "Support web systems, forms, deployment workflows, and technical coordination for University of Regina research group websites and related administrative processes.",
    highlights: [
      "Designed and maintained websites for three University of Regina research groups.",
      "Developed web forms for user submissions and administrative workflows.",
      "Configured and maintained web system components using GitHub and Vercel.",
      "Documented technical steps, updates, and workflow notes for continuity."
    ]
  },
  {
    role: "IT Support Trainee – Career Enhancement Program",
    company: "Saskatchewan Polytechnic · Contract Full-time",
    location: "Regina, Saskatchewan, Canada · On-site",
    period: "Sep 2025 – Feb 2026",
    summary:
      "Full-time professional training program focused on job-ready IT support skills, workplace communication, Microsoft 365, and support operations in Canada.",
    highlights: [
      "Practiced IT support fundamentals including troubleshooting, ticket handling, and end-user support.",
      "Worked with Microsoft 365 applications such as Outlook, Teams, and OneDrive in workplace contexts.",
      "Strengthened customer service, communication, and handling of end-user requests.",
      "Developed documentation, reporting, job search, and interview preparation skills for IT roles."
    ]
  },
  {
    role: "Remote IT Support Technician",
    company: "Arain Fars Company · On-Call",
    location: "Iran · Remote",
    period: "Jan 2023 – Nov 2025",
    summary:
      "Provided remote IT support for Windows Server environments, user access, connectivity, printers, workstations, and core infrastructure services.",
    highlights: [
      "Supported Windows Server environments, user account management, and connectivity remotely.",
      "Troubleshot workstation, printer, and network issues using remote tools and phone support.",
      "Monitored system health with PRTG, addressed alerts, and supported service availability.",
      "Documented support activity and escalated infrastructure issues with clear context."
    ]
  },
  {
    role: "IT Support Specialist – Systems & Network Support",
    company: "Iranian Blood Transfusion Organization · Permanent Full-time",
    location: "Shiraz, Fars Province, Iran",
    period: "Nov 2015 – Dec 2022",
    summary:
      "Delivered comprehensive technical support for users, branches, Windows infrastructure, network connectivity, and operational IT services.",
    highlights: [
      "Delivered technical support for 500+ users across multiple locations.",
      "Troubleshot LAN, Wi-Fi, VPN, DNS, and DHCP issues; conducted field network tasks.",
      "Supported Windows Server tasks, user access, file services, monitoring, and operational continuity."
    ]
  },
  {
    role: "Information Technology Support Specialist",
    company: "Iranian Blood Transfusion Organization · Contract Full-time",
    location: "Shiraz County, Fars Province, Iran",
    period: "Jan 2013 – Nov 2015",
    summary:
      "Provided front-line IT support for Windows systems, printers, software applications, and user access requests.",
    highlights: [
      "Delivered front-line IT support for Windows systems, printers, and software applications.",
      "Assisted users through in-person, phone, and remote support to reduce downtime.",
      "Managed basic Active Directory tasks and documented recurring support steps."
    ]
  },
  {
    role: "Junior IT Support Assistant",
    company: "Iranian Blood Transfusion Organization · Contract Full-time",
    location: "Iran",
    period: "Jan 2012 – Jan 2013",
    summary:
      "Supported senior IT staff with basic desktop support, equipment checks, documentation, and routine troubleshooting.",
    highlights: [
      "Assisted senior IT staff with desktop setups and basic hardware troubleshooting.",
      "Conducted equipment checks, workstation preparation, and cabling documentation.",
      "Provided routine support for computer, printer, and software issues."
    ]
  }
];

