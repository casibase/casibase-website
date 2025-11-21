---
title: ZAP Scan Provider
description: Web application security testing with OWASP ZAP
keywords: [Casibase, ZAP, OWASP, Web Security, Security Scan]
authors: [casibase]
---

The ZAP Scan Provider integrates OWASP Zed Attack Proxy into Casibase for automated web application security testing. ZAP actively tests web applications to identify security vulnerabilities including injection flaws, broken authentication, and cross-site scripting.

## Configuration

Create a ZAP Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "ZAP". The provider requires the ZAP daemon to be installed and running on the Casibase server.

## Web Application Security Testing

ZAP performs active security testing by sending crafted requests to web applications and analyzing responses for vulnerability indicators. The scanner tests for OWASP Top 10 vulnerabilities and other common security issues. It can spider web applications to discover pages, then systematically test each endpoint for security flaws.

## Using the Provider

From the Scans page, create a new scan and select the ZAP provider. Enter the target web application URL for testing.

### Command Templates

The provider includes templates for different scanning modes:

- **Quick Scan**: Fast baseline scan with minimal configuration
- **Baseline Scan**: Standard security baseline assessment
- **Full Scan**: Comprehensive active scanning
- **AJAX Spider**: Advanced crawling for JavaScript-heavy applications

### Custom Commands

Customize ZAP commands to target specific testing scenarios. The command field accepts the `%s` placeholder for the target URL. For example, `-quickurl %s -j` runs a quick scan with JSON output. Security validation prevents command injection attacks.

Test your configuration using the test widget before running production scans. Enter a target URL, modify the command as needed, and review results immediately.

## Scan Results

ZAP returns detailed JSON output containing identified vulnerabilities:

```json
{
  "site": "https://example.com",
  "alerts": [
    {
      "pluginid": "10021",
      "alert": "X-Content-Type-Options Header Missing",
      "risk": "Low",
      "confidence": "Medium",
      "url": "https://example.com/",
      "solution": "Ensure that the application sets the X-Content-Type-Options header"
    }
  ]
}
```

The web interface organizes findings by risk level (High, Medium, Low, Informational) with color-coded indicators. Each alert includes the affected URL, vulnerability description, solution recommendations, and CWE/WASC references for further research.

## Security Considerations

Active security testing can modify application data and trigger security controls. Always obtain proper authorization before scanning web applications. Run scans against test environments when possible, and coordinate with application owners for production testing.

ZAP generates significant HTTP traffic during scans. Schedule testing during maintenance windows to avoid impacting users. Configure scan policies appropriately to balance thoroughness with testing time and resource consumption.
