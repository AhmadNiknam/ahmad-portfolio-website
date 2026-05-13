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
  "Cloud Operations, IT Support,",
  "and Modern Portfolio Websites"
] as const;

export const heroBadges = [
  "AZ-104 Certified",
  "Microsoft 365",
  "Network & Systems Support"
];

export const heroProfileImageSrc = "/profile-ahmad-2026-v2.jpg";

export const heroCard = {
  name: "Ahmad Niknam",
  role: "IT Support | Network & Systems Support",
  location: "Regina, SK",
  availability: "Available for opportunities"
} as const;

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
    title: "Web Portal and Admin System - University of Regina",
    date: "Feb 2026 - Present",
    associatedWith: "University of Regina",
    status: "In progress",
    description:
      "Ongoing part-time web systems project for a University of Regina research group, repositioned as an industry-focused consulting and R&D platform with a supporting academic pathway.",
    impact:
      "Supports planning, design, development, testing, deployment, and documentation for a secure public website and admin portal covering consultation requests, collaboration inquiries, application workflows, private document access, and administrative review.",
    contribution:
      "Work includes translating stakeholder requirements into website features, user workflows, admin dashboard functions, and implementation tasks, plus Supabase configuration, Row Level Security validation, private storage, signed document access, role-based admin controls, MFA-based admin access, and Vercel deployment support.",
    tags: [
      "Next.js",
      "React",
      "Supabase",
      "Vercel",
      "GitHub",
      "Resend",
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
    role: "IT Project & Web Systems Coordinator - Secure Portal & Admin Systems",
    company: "University of Regina",
    location: "Regina, Saskatchewan, Canada - Hybrid",
    period: "Feb 2026 - Present",
    summary:
      "Permanent part-time role coordinating and supporting the planning, development, testing, deployment, and documentation of a secure web portal and admin review system for a University of Regina research group.",
    highlights: [
      "Translate stakeholder requirements into website features, user workflows, admin dashboard functions, and implementation tasks.",
      "Support consultation requests, application workflows, document submission, admin review activities, and email notifications.",
      "Configure and validate Supabase tables, Row Level Security policies, private storage, signed document access, and role-based admin controls.",
      "Support secure deployment with Next.js, Supabase, Vercel, GitHub, protected routes, environment-based configuration, and MFA-based admin access.",
      "Test local and production releases, troubleshoot deployment issues, validate Vercel updates, and maintain GitHub documentation and technical records."
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

