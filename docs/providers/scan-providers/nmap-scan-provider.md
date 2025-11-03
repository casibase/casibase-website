---
title: Nmap Scan Provider
description: Network discovery and security auditing with Nmap
keywords: [Casibase, Nmap, Network Scan, Port Scan, Security Audit]
authors: [casibase]
---

The Nmap Scan Provider integrates Network Mapper into Casibase for network discovery and security auditing. It scans target systems to identify open ports, running services, and operating system details.

## Configuration

Create an Nmap Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "Nmap". Configure the display name and owner as needed. The provider operates locally within Casibase and requires no external credentials or API keys.

## Network Scanning

Nmap performs comprehensive network analysis by probing target systems. Port discovery identifies which ports are open, closed, or filtered. Service detection determines what software is running on each port and attempts to identify version numbers. OS fingerprinting analyzes network responses to determine the target's operating system and version.

## Using the Provider

From the Scans page, create a new scan and select the Nmap provider. Choose your target by selecting an asset from your inventory or entering an IP address manually for ad-hoc scanning.

### Command Templates

The provider edit page includes command templates for common scan types. Select a template from the dropdown to quickly configure your scan:

- **Ping Scan**: Quick host discovery without port scanning
- **Quick Scan**: Fast scan of common ports with service detection
- **Intense Scan**: Comprehensive scan with OS detection and script scanning
- **Port Scan**: Scan specific port ranges
- **OS Detection**: Identify target operating system
- **Version Detection**: Detect service versions on open ports
- **Stealth Scan**: Lower visibility SYN scan
- **UDP Scan**: Scan UDP ports instead of TCP

### Custom Commands

You can customize the Nmap command to meet specific requirements. The command field supports the `%s` placeholder for the target IP address. For example, `-sV -p 1-1000 %s` scans ports 1-1000 with version detection. The command input validates against dangerous characters to prevent command injection.

The test widget allows you to verify functionality before running scans. Enter a target, optionally modify the command, click "Scan", and view results immediately.

## Scan Results

Nmap returns results as structured JSON containing host information and discovered services. A typical response includes the target IP, host state, and an array of port details:

```json
{
  "hosts": [
    {
      "ip": "192.168.1.1",
      "state": "up",
      "ports": [
        {
          "port": 22,
          "state": "open",
          "service": "ssh",
          "version": "OpenSSH 8.2"
        }
      ]
    }
  ]
}
```

The web interface renders this data in organized tables showing port numbers, states, service names, and detected versions. This structured presentation makes it easy to quickly assess what services are exposed on your network.

## Network Considerations

Ensure Casibase has network connectivity to your target systems. Firewalls may need configuration to permit scanning traffic from the Casibase server. Network scanning can trigger intrusion detection systems, so coordinate with your security team before running scans against production infrastructure.

Schedule scans during maintenance windows when possible to minimize any impact on running systems. While Nmap is designed to be non-intrusive, scanning can still generate significant network traffic depending on the scope and scan type configured.
