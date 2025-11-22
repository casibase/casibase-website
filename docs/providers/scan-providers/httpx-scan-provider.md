---
title: httpx Scan Provider
description: HTTP service probing with httpx
keywords: [Casibase, httpx, HTTP Probe, Web Service Discovery]
authors: [casibase]
---

The httpx Scan Provider integrates HTTP service probing capabilities into Casibase through the httpx tool. httpx efficiently probes HTTP and HTTPS services to gather detailed information about web servers, technologies, and configurations.

## Configuration

Create an httpx Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "httpx". The provider operates locally and requires the httpx binary on the Casibase server.

## HTTP Service Probing

httpx probes HTTP and HTTPS services to extract detailed service information. The tool detects web servers, identifies technologies through fingerprinting, extracts titles and response headers, and determines TLS certificate details. It efficiently handles large-scale probing while respecting rate limits and connection constraints.

## Using the Provider

From the Scans page, create a new scan and select the httpx provider. Enter target URLs or hosts for HTTP probing.

### Command Templates

The provider includes templates for common probing scenarios:

- **Basic Probe**: Standard HTTP/HTTPS detection
- **Full Scan**: Comprehensive information gathering
- **Technology Detection**: Identify web technologies
- **Title Extraction**: Extract page titles
- **Status Only**: Quick service availability check

### Custom Commands

Customize httpx commands for specific requirements. The command field supports the `%s` placeholder for targets. For example, `-u %s -tech-detect -json` enables technology detection with JSON output. Input validation prevents command injection attacks.

Use the test widget to verify probing before running production scans. Enter target URLs or hosts, adjust the command if needed, and review service information.

## Scan Results

httpx returns structured JSON output containing service details:

```json
{
  "url": "https://example.com",
  "status-code": 200,
  "content-length": 1234,
  "title": "Example Domain",
  "webserver": "nginx/1.18.0",
  "tech": ["Nginx", "Ubuntu"]
}
```

The web interface displays results in organized tables showing URLs, status codes, response sizes, page titles, web servers, and detected technologies. Response time metrics help identify performance characteristics. TLS information displays certificate details for HTTPS services.

## Network Considerations

Ensure Casibase has network connectivity to target services. Firewalls may need configuration to permit HTTP/HTTPS probing from the Casibase server. Rate limiting prevents overwhelming target services, but scanning can still generate significant traffic depending on scope.

HTTP probing is generally non-intrusive but may trigger monitoring alerts. Coordinate with service owners before scanning production infrastructure. Schedule scans appropriately to minimize any impact on service performance.
