const resumeLines = [
  { text: "Ahmad Niknam", x: 72, y: 735, size: 24, bold: true },
  { text: "IT Support & Infrastructure Professional", x: 72, y: 708, size: 13, bold: true },
  { text: "Regina, Saskatchewan, Canada | LinkedIn: linkedin.com/in/ahmad-niknam | GitHub: github.com/ahmad-niknam", x: 72, y: 688, size: 9 },
  { text: "Email placeholder ready to update: ahmad.niknam@email.example", x: 72, y: 674, size: 9 },
  { text: "Professional Summary", x: 72, y: 642, size: 13, bold: true },
  { text: "IT support and infrastructure professional with hands-on experience in systems support, Windows Server,", x: 72, y: 622, size: 10 },
  { text: "networking, Microsoft 365, Azure, Intune, PowerShell, troubleshooting, documentation, and hybrid", x: 72, y: 608, size: 10 },
  { text: "infrastructure operations. Based in Regina and focused on reliable systems, clear support, and practical", x: 72, y: 594, size: 10 },
  { text: "operational improvement.", x: 72, y: 580, size: 10 },
  { text: "Core Skills", x: 72, y: 548, size: 13, bold: true },
  { text: "Windows Server | Active Directory | Networking | Azure | Microsoft 365 | Intune | PowerShell", x: 72, y: 528, size: 10 },
  { text: "Troubleshooting | Documentation | Hybrid Infrastructure", x: 72, y: 514, size: 10 },
  { text: "Experience Focus", x: 72, y: 482, size: 13, bold: true },
  { text: "IT Infrastructure & Systems Support Experience", x: 72, y: 462, size: 10, bold: true },
  { text: "Hands-on support across servers, endpoints, users, Microsoft services, and infrastructure troubleshooting.", x: 90, y: 448, size: 10 },
  { text: "Multi-site Technical Support", x: 72, y: 426, size: 10, bold: true },
  { text: "Structured support for users, connectivity, accounts, endpoints, documentation, and escalation paths.", x: 90, y: 412, size: 10 },
  { text: "Server and Network Operations", x: 72, y: 390, size: 10, bold: true },
  { text: "Windows Server health, patch readiness, service status review, DNS, DHCP, and connectivity triage.", x: 90, y: 376, size: 10 },
  { text: "Documentation and Operational Reliability", x: 72, y: 354, size: 10, bold: true },
  { text: "Runbooks, support notes, readiness checks, and lightweight PowerShell reporting for clearer operations.", x: 90, y: 340, size: 10 },
  { text: "Portfolio Projects", x: 72, y: 308, size: 13, bold: true },
  { text: "Hybrid Network Correlator | Server Health Sentinel | Windows Server Patch Readiness Checker", x: 72, y: 288, size: 10 },
  { text: "Azure VM Cost and Idle Resource Reporter", x: 72, y: 274, size: 10 },
  { text: "Certifications", x: 72, y: 242, size: 13, bold: true },
  { text: "Microsoft Certified: Azure Administrator Associate (AZ-104)", x: 72, y: 222, size: 10 },
  { text: "Google IT Support Professional Certificate", x: 72, y: 208, size: 10 },
  { text: "WHMIS", x: 72, y: 194, size: 10 }
];

function escapePdfText(text: string) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function generateResumePdf() {
  const textStream = [
    "BT",
    ...resumeLines.map((line) => {
      const font = line.bold ? "F2" : "F1";
      return `/${font} ${line.size} Tf 1 0 0 1 ${line.x} ${line.y} Tm (${escapePdfText(line.text)}) Tj`;
    }),
    "ET"
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${textStream.length} >>\nstream\n${textStream}\nendstream`
  ];

  let body = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(body.length);
    body += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = body.length;
  body += `xref\n0 ${objects.length + 1}\n`;
  body += "0000000000 65535 f \n";
  body += offsets.slice(1).map((offset) => `${offset.toString().padStart(10, "0")} 00000 n \n`).join("");
  body += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return body;
}

export function GET() {
  return new Response(generateResumePdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ahmad-Niknam-Resume.pdf"'
    }
  });
}
