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
    title: "Operations",
    icon: "OPS",
    summary: "Service-focused habits for IT support, incidents, users, monitoring, and handoffs.",
    skills: ["IT Support", "Troubleshooting", "Documentation", "End User Support", "Secure Configuration"]
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
    title: "Secure Web Portal & Admin System",
    date: "Feb 2026 - Present",
    associatedWith: "University of Regina",
    status: "In Progress",
    description:
      "Ongoing part-time web systems project supporting a secure public website and admin review portal for a University of Regina research group.",
    impact:
      "Supports consultation requests, application workflows, private document access, admin review steps, status updates, and secure deployment practices.",
    contribution:
      "Work includes translating stakeholder requirements into structured features and workflows, supporting Supabase configuration, Row Level Security validation, private storage setup, role-based admin controls, MFA-based access, Vercel deployment, testing, and technical documentation.",
    tags: [
      "Next.js",
      "Supabase",
      "Vercel",
      "GitHub",
      "Secure Configuration",
      "Admin Workflow",
      "Documentation"
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
    role: "IT Systems & Project Coordinator",
    company: "University of Regina · Permanent Part-time",
    location: "Regina, Saskatchewan, Canada · Hybrid",
    period: "Feb 2026 – Present",
    summary:
      "Support planning, testing, and deployment of a secure web portal and related administrative systems, helping bridge technical and non-technical stakeholders throughout the project lifecycle.",
    highlights: [
      "Coordinate user access, role-based permissions, and MFA practices; validate admin workflows to ensure systems behave correctly before release.",
      "Troubleshoot configuration and deployment issues across GitHub, Vercel, and Supabase; document findings clearly so the next person can pick up where the work left off.",
      "Maintain thorough documentation, including system setup notes, testing procedures, issue logs, and support guides to keep the team aligned and reduce repeated questions.",
      "Support communication between technical and non-technical stakeholders by translating project needs into clear tasks, workflows, and follow-up actions."
    ]
  },
  {
    role: "IT Support Trainee",
    company: "Saskatchewan Polytechnic",
    location: "Regina, Saskatchewan, Canada",
    period: "2025 - 2026",
    summary:
      "Focused on Canadian workplace readiness, Microsoft 365, support operations, and communication.",
    highlights: [
      "Built local workplace familiarity for IT service, documentation, and team communication.",
      "Strengthened support practices aligned with Canadian business environments."
    ]
  },
  {
    role: "Remote IT Support Technician",
    company: "Arain Fars Company",
    location: "Remote",
    period: "2023 - 2025",
    summary:
      "Provided remote support for Windows Server environments and core infrastructure services.",
    highlights: [
      "Troubleshot server, user access, connectivity, and service availability issues remotely.",
      "Documented support activity and escalated infrastructure issues with clear context."
    ]
  },
  {
    role: "IT Support & Systems Administrator",
    company: "Iranian Blood Transfusion Organization",
    location: "Multi-branch environment",
    period: "2015 - 2022",
    summary:
      "Supported 500+ users across multiple branches. Managed Windows Server, Active Directory, VPN, DNS, DHCP, Microsoft 365, monitoring, and user support.",
    highlights: [
      "Maintained user accounts, core network services, and Windows infrastructure operations.",
      "Supported operational continuity through monitoring, troubleshooting, and documentation."
    ]
  },
  {
    role: "Earlier IT Infrastructure & Network Support Experience",
    company: "Earlier IT Roles",
    location: "Iran",
    period: "Before 2015",
    summary:
      "Built foundational hands-on experience across Windows Server environments, networking, virtualization, backup operations, user support, and multi-site infrastructure support.",
    highlights: [
      "Supported server, network, and branch infrastructure operations across multi-site environments.",
      "Worked with Windows Server, Active Directory, Cisco networking equipment, VMware, backup systems, and core infrastructure services.",
      "Developed practical troubleshooting, documentation, and operational support experience before later systems administration roles."
    ]
  }
];

