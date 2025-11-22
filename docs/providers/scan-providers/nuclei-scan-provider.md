---
title: Nuclei Scan Provider
description: Vulnerability scanning with Nuclei
keywords: [Casibase, Nuclei, Vulnerability Scan, Security Testing]
authors: [casibase]
---

The Nuclei Scan Provider integrates the Nuclei vulnerability scanner into Casibase for automated security testing. Nuclei uses template-based scanning to detect vulnerabilities, misconfigurations, and exposed services across web applications and infrastructure.

## Configuration

Create a Nuclei Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "Nuclei". The provider operates locally and requires the Nuclei binary to be installed on the Casibase server.

## Vulnerability Scanning

Nuclei executes template-based vulnerability checks against target systems. Templates define specific vulnerability signatures, allowing for accurate detection of security issues ranging from common misconfigurations to critical CVEs. The scanner can test web applications, APIs, and network services using its extensive template library.

## Using the Provider

From the Scans page, create a new scan and select the Nuclei provider. Enter your target URL or IP address for scanning.

### Command Templates

The provider includes command templates for common scanning scenarios:

- **Quick Scan**: Fast scan with high-severity templates only
- **CVE Scan**: Focus on known CVE vulnerabilities
- **Web Scan**: Target web applications with HTTP templates
- **All Templates**: Comprehensive scan using all available templates

### Custom Commands

Customize the Nuclei command to match your requirements. The command field supports the `%s` placeholder for the target. For example, `-u %s -severity critical,high` scans only for critical and high-severity issues. Input validation prevents command injection by blocking dangerous characters.

Use the test widget to verify scanning before running production scans. Enter a target, adjust the command if needed, and review the results.

## Scan Results

Nuclei returns structured JSON output containing vulnerability findings. Each result includes:

```json
{
  "template-id": "cve-2021-12345",
  "info": {
    "name": "Vulnerability Name",
    "severity": "high",
    "description": "Detailed description"
  },
  "matched-at": "https://target.com/path",
  "type": "http"
}
```

The web interface displays findings in organized tables showing template IDs, severity levels, matched locations, and vulnerability details. Color coding by severity helps prioritize remediation efforts.

## Security Considerations

Run Nuclei scans only against systems you have authorization to test. Vulnerability scanning can trigger security alerts and may impact system performance. Coordinate with your security team before scanning production systems.

Keep Nuclei templates updated regularly to detect the latest vulnerabilities. The scanner's effectiveness depends on having current vulnerability signatures in its template database.
