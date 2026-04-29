export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Infrastructure",
    skills: ["Windows Server", "Active Directory", "Hybrid Infrastructure", "Technical Documentation"]
  },
  {
    title: "Cloud & Microsoft",
    skills: ["Microsoft Azure", "Microsoft 365", "Intune", "Azure Administration"]
  },
  {
    title: "Support Operations",
    skills: ["IT Troubleshooting", "Systems Support", "Patch Readiness", "Service Reliability"]
  },
  {
    title: "Automation",
    skills: ["PowerShell", "Infrastructure Reporting", "Health Checks", "Operational Runbooks"]
  }
];

export const projects = [
  {
    title: "Hybrid Network Correlator",
    description:
      "A practical visibility tool for connecting signals across network devices, servers, and support notes so infrastructure teams can diagnose recurring connectivity issues faster.",
    tags: ["Networking", "Hybrid IT", "Troubleshooting"]
  },
  {
    title: "Server Health Sentinel",
    description:
      "A server monitoring and reporting concept focused on uptime indicators, disk capacity, service status, and early warnings for Windows Server environments.",
    tags: ["Windows Server", "Monitoring", "PowerShell"]
  },
  {
    title: "Windows Server Patch Readiness Checker",
    description:
      "An operations-focused readiness workflow for validating reboot status, available disk space, critical services, and documentation before scheduled maintenance windows.",
    tags: ["Patching", "Operations", "Documentation"]
  },
  {
    title: "Azure VM Cost and Idle Resource Reporter",
    description:
      "A cloud administration project designed to identify idle virtual machines, summarize utilization signals, and support more responsible Azure cost management decisions.",
    tags: ["Azure", "Cost Awareness", "Automation"]
  }
];

export const experienceItems = [
  {
    role: "IT Infrastructure Professional",
    company: "Systems, servers, networking, and support operations",
    location: "Regina, Saskatchewan, Canada",
    period: "10+ years",
    summary:
      "Hands-on background supporting reliable IT environments across Windows Server, Active Directory, networking, endpoint administration, documentation, and daily infrastructure troubleshooting."
  },
  {
    role: "Azure Administrator & Automation Builder",
    company: "Modern cloud and hybrid infrastructure focus",
    location: "Microsoft Azure and Microsoft 365 environments",
    period: "Current focus",
    summary:
      "Applies Azure administration, Microsoft 365, Intune, and PowerShell automation to make infrastructure work clearer, more measurable, and easier to support."
  }
];

export const certifications = [
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Project Management Professional (PMP)",
  "Professional Scrum Master I (PSM I)",
  "WHMIS"
];
