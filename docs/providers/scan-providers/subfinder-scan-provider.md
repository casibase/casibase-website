---
title: Subfinder Scan Provider
description: Subdomain discovery with Subfinder
keywords: [Casibase, Subfinder, Subdomain Discovery, Reconnaissance]
authors: [casibase]
---

The Subfinder Scan Provider integrates subdomain discovery capabilities into Casibase through the Subfinder tool. Subfinder passively discovers subdomains using certificate transparency logs, search engines, and other public sources to map an organization's attack surface.

## Configuration

Create a Subfinder Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "Subfinder". The provider operates locally and requires the Subfinder binary on the Casibase server.

## Subdomain Discovery

Subfinder performs passive subdomain enumeration by querying various data sources without directly probing target infrastructure. This approach discovers subdomains quietly through certificate transparency logs, DNS databases, and search engine results. The tool aggregates results from multiple sources to provide comprehensive subdomain mapping.

## Using the Provider

From the Scans page, create a new scan and select the Subfinder provider. Enter the target domain name for subdomain discovery.

### Command Templates

The provider includes templates for different discovery modes:

- **Basic Scan**: Standard subdomain discovery
- **Silent Mode**: Minimal output for scripting
- **Recursive Scan**: Discover subdomains of found subdomains
- **All Sources**: Query all available data sources
- **Passive Only**: Strictly passive discovery

### Custom Commands

Customize Subfinder commands for specific requirements. The command field supports the `%s` placeholder for the domain. For example, `-d %s -all -json` queries all sources with JSON output. Input validation prevents command injection by blocking shell metacharacters.

Use the test widget to verify discovery before running production scans. Enter a domain name, adjust the command if needed, and review discovered subdomains.

## Scan Results

Subfinder returns JSON output containing discovered subdomains:

```json
{
  "host": "mail.example.com",
  "source": "crtsh"
}
```

The web interface displays results in sortable tables showing each discovered subdomain and its data source. Color-coded source tags help identify which services provided each finding. Summary statistics show total subdomains discovered and source breakdown.

## Reconnaissance Considerations

Subdomain discovery is typically legal since it uses only publicly available information. However, check local regulations and organizational policies before conducting reconnaissance. Discovered subdomains may reveal infrastructure details useful for security assessments or unauthorized access attempts.

Use discovery results responsibly. Subdomain mapping helps organizations understand their external attack surface, but the same information could assist malicious actors. Protect subdomain lists appropriately and use findings to improve security posture.
