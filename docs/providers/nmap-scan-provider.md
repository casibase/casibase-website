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

The provider edit page includes a test widget for verifying functionality. Enter a target, click "Test", and view the scan results immediately. This helps confirm the provider is working correctly before running production scans.

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
