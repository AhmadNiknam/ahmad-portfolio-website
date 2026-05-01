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

export const heroBadges = [
  "AZ-104 Certified",
  "Regina, SK",
  "Portfolio Website Services"
];

export const skillGroups = [
  {
    title: "Cloud",
    icon: "AZ",
    summary: "Microsoft cloud administration with a practical hybrid support mindset.",
    skills: ["Microsoft Azure", "Hybrid Cloud", "Azure VM", "Identity"]
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
    skills: ["VLAN", "VPN", "Routing", "Switching", "Troubleshooting"]
  },
  {
    title: "Operations",
    icon: "OPS",
    summary: "Service-focused habits for incidents, users, monitoring, and handoffs.",
    skills: ["Incident Response", "Monitoring", "Documentation", "End User Support", "Service Desk"]
  },
  {
    title: "Automation",
    icon: "PS",
    summary: "Lightweight automation and reporting for repeatable support workflows.",
    skills: ["PowerShell", "Microsoft Graph", "GitHub Actions", "Reporting"]
  }
];

export const projects = [
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
  }
];

