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
  email: "mailto:?subject=Portfolio%20Opportunity%20for%20Ahmad%20Niknam"
};

export const skillGroups = [
  {
    title: "Infrastructure",
    icon: "SRV",
    summary: "Reliable foundations for business-critical support environments.",
    skills: ["Windows Server", "Active Directory", "DNS / DHCP", "Technical Documentation"]
  },
  {
    title: "Cloud & Microsoft",
    icon: "AZ",
    summary: "Practical Microsoft cloud administration with support-first judgment.",
    skills: ["Microsoft Azure", "Microsoft 365", "Intune", "Azure Administration"]
  },
  {
    title: "Support Operations",
    icon: "OPS",
    summary: "Calm troubleshooting, user support, and clear operational handoffs.",
    skills: ["IT Support", "Systems Administration", "Networking Fundamentals", "Troubleshooting"]
  },
  {
    title: "Automation",
    icon: "PS",
    summary: "Useful automation that reduces repetition and improves visibility.",
    skills: ["PowerShell", "IT Automation", "Infrastructure Reporting", "Operational Runbooks"]
  }
];

export const projects = [
  {
    title: "Hybrid Network Correlator",
    description:
      "A practical visibility tool for connecting signals across network devices, servers, and support notes so infrastructure teams can diagnose recurring connectivity issues faster.",
    impact: "Turns scattered troubleshooting notes into clearer infrastructure signals.",
    tags: ["Networking", "Hybrid IT", "Troubleshooting"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Server Health Sentinel",
    description:
      "A server monitoring and reporting concept focused on uptime indicators, disk capacity, service status, and early warnings for Windows Server environments.",
    impact: "Helps support teams spot capacity and service issues before escalation.",
    tags: ["Windows Server", "Monitoring", "PowerShell"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Windows Server Patch Readiness Checker",
    description:
      "An operations-focused readiness workflow for validating reboot status, available disk space, critical services, and documentation before scheduled maintenance windows.",
    impact: "Reduces maintenance risk with repeatable pre-patch checks.",
    tags: ["Patching", "Operations", "Documentation"],
    githubUrl: "https://github.com/ahmad-niknam"
  },
  {
    title: "Azure VM Cost and Idle Resource Reporter",
    description:
      "A cloud administration project designed to identify idle virtual machines, summarize utilization signals, and support more responsible Azure cost management decisions.",
    impact: "Connects Azure administration with practical cost awareness.",
    tags: ["Azure", "Cost Awareness", "Automation"],
    githubUrl: "https://github.com/ahmad-niknam"
  }
];

export const experienceItems = [
  {
    role: "IT Support & Infrastructure Professional",
    company: "Systems administration, support operations, and infrastructure",
    location: "Regina, Saskatchewan, Canada",
    period: "Professional focus",
    summary:
      "Hands-on background supporting reliable IT environments across Windows Server, Active Directory, DNS, DHCP, networking fundamentals, endpoint administration, documentation, and daily infrastructure troubleshooting."
  },
  {
    role: "Azure Administrator Associate & Automation Builder",
    company: "Modern cloud and hybrid infrastructure focus",
    location: "Microsoft Azure and Microsoft 365 environments",
    period: "Current focus",
    summary:
      "Applies Azure administration, Microsoft 365, Intune, and PowerShell-based automation to make infrastructure work clearer, more measurable, and easier to support."
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
