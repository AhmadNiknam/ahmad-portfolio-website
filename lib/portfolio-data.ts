export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/ahmad-niknam/",
  github: "https://github.com/ahmad-niknam",
  email: "mailto:ahmad.niknam@email.example?subject=Portfolio%20Opportunity%20for%20Ahmad%20Niknam",
  emailLabel: "ahmad.niknam@email.example"
};

export const skillGroups = [
  {
    title: "Windows Server",
    icon: "SRV",
    summary: "Server administration, maintenance readiness, core services, and operational checks.",
    skills: ["Server support", "Patch readiness", "Service health"]
  },
  {
    title: "Active Directory",
    icon: "AD",
    summary: "User, group, access, and directory support for Microsoft environments.",
    skills: ["Users and groups", "Access support", "Directory operations"]
  },
  {
    title: "Networking",
    icon: "NET",
    summary: "Practical network support across DNS, DHCP, connectivity, and site issues.",
    skills: ["DNS / DHCP", "Connectivity", "Network triage"]
  },
  {
    title: "Azure",
    icon: "AZ",
    summary: "Azure administration fundamentals with a focus on reliable, cost-aware operations.",
    skills: ["VM administration", "Resource review", "Cost awareness"]
  },
  {
    title: "Microsoft 365",
    icon: "M365",
    summary: "User-focused support for Microsoft cloud productivity and collaboration services.",
    skills: ["Account support", "Service support", "Tenant operations"]
  },
  {
    title: "Intune",
    icon: "INT",
    summary: "Endpoint management awareness for device support and modern workplace operations.",
    skills: ["Device support", "Policy awareness", "Endpoint operations"]
  },
  {
    title: "PowerShell",
    icon: "PS",
    summary: "Automation and reporting scripts that make infrastructure work more repeatable.",
    skills: ["Health checks", "Reporting", "Support automation"]
  },
  {
    title: "Troubleshooting",
    icon: "FIX",
    summary: "Structured diagnosis for user, endpoint, server, cloud, and network issues.",
    skills: ["Root cause analysis", "Incident triage", "Escalation clarity"]
  },
  {
    title: "Documentation",
    icon: "DOC",
    summary: "Clear notes, runbooks, and operational records that improve handoffs.",
    skills: ["Runbooks", "Support notes", "Process clarity"]
  },
  {
    title: "Hybrid Infrastructure",
    icon: "HYB",
    summary: "Support mindset across on-premises systems, Microsoft cloud services, and users.",
    skills: ["On-prem and cloud", "Operations support", "Reliability focus"]
  }
];

export const projects = [
  {
    title: "Hybrid Network Correlator",
    description:
      "A portfolio project for connecting troubleshooting signals across network devices, servers, and support notes so recurring connectivity issues become easier to investigate.",
    impact: "Turns scattered network observations into clearer support evidence.",
    tags: ["Networking", "Hybrid Infrastructure", "Troubleshooting"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Server Health Sentinel",
    description:
      "A Windows Server health reporting project focused on uptime indicators, disk capacity, service status, and early warning checks for support teams.",
    impact: "Helps identify capacity and service issues before they become escalations.",
    tags: ["Windows Server", "PowerShell", "Operations"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Windows Server Patch Readiness Checker",
    description:
      "An operations-focused workflow for validating reboot status, available disk space, critical services, and maintenance notes before scheduled Windows Server patching.",
    impact: "Reduces maintenance risk with repeatable pre-patch checks.",
    tags: ["Patching", "Operations", "Documentation"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Azure VM Cost and Idle Resource Reporter",
    description:
      "An Azure administration project designed to identify idle virtual machines, summarize utilization signals, and support more responsible cloud cost decisions.",
    impact: "Connects Azure administration with practical cost awareness.",
    tags: ["Azure", "Cost Awareness", "Automation"],
    githubUrl: "https://github.com/ahmad-niknam"
  }
];

export const experienceItems = [
  {
    role: "IT Infrastructure & Systems Support Experience",
    company: "Hands-on systems support, infrastructure operations, and technical troubleshooting",
    location: "Regina, Saskatchewan, Canada",
    period: "Professional profile",
    summary:
      "Supports reliable IT environments across Windows Server, Active Directory, networking, endpoints, Microsoft 365, Azure, and day-to-day infrastructure troubleshooting.",
    highlights: [
      "Maintains a reliability-first approach to server, endpoint, and user support work.",
      "Uses clear documentation and repeatable checks to reduce operational uncertainty."
    ]
  },
  {
    role: "Multi-site Technical Support",
    company: "User support, endpoint assistance, access issues, and site connectivity triage",
    location: "On-site, hybrid, and remote support contexts",
    period: "Support operations",
    summary:
      "Provides calm, structured support for users and technical environments where issues may involve endpoints, accounts, network access, Microsoft services, or escalation paths.",
    highlights: [
      "Communicates clearly with users while working through practical troubleshooting steps.",
      "Documents incidents, fixes, and recurring patterns so future support is faster."
    ]
  },
  {
    role: "Server and Network Operations",
    company: "Windows Server, Active Directory, DNS, DHCP, network fundamentals, and monitoring",
    location: "Infrastructure support environments",
    period: "Operations focus",
    summary:
      "Works across server and network operations with attention to service availability, maintenance readiness, access reliability, and infrastructure visibility.",
    highlights: [
      "Supports Windows Server health, patch readiness, and service status review.",
      "Investigates connectivity, DNS, DHCP, and access-related issues with disciplined notes."
    ]
  },
  {
    role: "User Support and Troubleshooting",
    company: "Practical support for Microsoft 365, endpoints, accounts, and daily IT issues",
    location: "Business support environments",
    period: "User support",
    summary:
      "Combines technical diagnosis with service-minded communication to resolve user issues and keep teams productive.",
    highlights: [
      "Handles support requests with clear prioritization, follow-up, and escalation judgment.",
      "Connects symptoms to likely causes across devices, accounts, network paths, and services."
    ]
  },
  {
    role: "Documentation and Operational Reliability",
    company: "Runbooks, support notes, readiness checks, and infrastructure reporting",
    location: "Hybrid infrastructure environments",
    period: "Reliability practice",
    summary:
      "Builds documentation and lightweight automation that make support work easier to repeat, audit, and hand off.",
    highlights: [
      "Creates practical PowerShell checks and reports for infrastructure visibility.",
      "Treats documentation as part of the fix, not an afterthought."
    ]
  }
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    detail: "AZ-104",
    issuer: "Microsoft",
    badge: "AZ"
  },
  {
    name: "Google IT Support Professional Certificate",
    detail: "Technical support foundations",
    issuer: "Google",
    badge: "IT"
  },
  {
    name: "WHMIS",
    detail: "Canadian workplace safety awareness",
    issuer: "Workplace Safety",
    badge: "CA"
  }
];
