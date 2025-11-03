---
title: Scan Providers
description: Configure and use scan providers in Casibase
keywords: [Casibase, Scan Provider, Nmap, OS Patch, Network Scan, Security]
authors: [casibase]
---

Scan Providers enable automated network discovery, security auditing, and system assessment in Casibase. These providers integrate specialized scanning tools to analyze infrastructure assets and identify security issues.

## Provider Types

### Nmap Scan Provider

Nmap (Network Mapper) is a powerful network scanning tool integrated into Casibase for discovering hosts, services, and potential vulnerabilities.

#### Configuration

When creating an Nmap Scan Provider:

1. Navigate to Providers → Add Provider
2. Set Category to "Scan"
3. Set Type to "Nmap"
4. Configure display name and owner

The Nmap provider requires no additional credentials or API keys since it operates locally within the Casibase environment.

#### Scanning Capabilities

The Nmap provider performs comprehensive network analysis:

- **Port Discovery**: Identifies open, closed, and filtered ports
- **Service Detection**: Determines running services and their versions
- **OS Fingerprinting**: Detects operating system and version information
- **Host Discovery**: Maps network topology and live hosts

#### Using the Provider

**From Scan Page:**

Create a new scan and select the Nmap provider from the dropdown. Choose your target using either:

- Asset selection for managed infrastructure
- Manual IP address input for ad-hoc scanning

**From Provider Page:**

Use the integrated test widget to verify provider functionality. Enter a target and click "Test" to execute a sample scan and view results.

#### Result Format

Nmap scan results are returned as structured JSON containing:

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

The web interface renders this data in organized tables showing port status, services, and versions for quick analysis.

### OS Patch Provider

The OS Patch Provider assesses system security by checking for missing patches and available updates.

#### Configuration

Setup steps for OS Patch Provider:

1. Navigate to Providers → Add Provider
2. Set Category to "Scan"
3. Set Type to "OS Patch"
4. Configure display name and owner

#### Scanning Capabilities

The provider evaluates:

- **Patch Status**: Current patch level and missing updates
- **Security Updates**: Critical security patches requiring installation
- **Package Versions**: Installed software version comparison
- **Update Recommendations**: Prioritized list of recommended patches

#### Using the Provider

Execute OS Patch scans against Linux-based virtual machines and servers. The provider connects to the target system and queries the package manager for update information.

Target systems should be accessible and have package management tools configured. The scan analyzes available updates without making system changes.

#### Result Format

Results include patch assessment data formatted for easy review:

- Available security updates
- Package version discrepancies
- Update priority recommendations
- Installation impact analysis

## Provider Testing

Both scan providers support direct testing from the provider edit page:

1. Open the provider configuration
2. Locate the "Test Provider" section
3. Select target mode (Asset or Manual)
4. Enter target information
5. Click "Test" to execute scan
6. Review results in the output panel

Test results are displayed but not saved to the database, making this feature useful for verifying provider configuration and troubleshooting connectivity issues.

## Integration with Scans

Scan providers integrate with the Scan object to enable:

- **Automated Execution**: Trigger scans programmatically via API
- **Result Storage**: Persist scan results in both raw and structured formats
- **Historical Analysis**: Track scan history and changes over time
- **Asset Targeting**: Automatically resolve target addresses from asset inventory

## Best Practices

**Network Access**

Ensure Casibase has network connectivity to target systems. Firewalls should permit scanning traffic from the Casibase server.

**Scan Timing**

Schedule scans during maintenance windows to minimize impact on production systems. Network scanning can trigger intrusion detection systems, so coordinate with security teams.

**Result Analysis**

Review structured results for quick insights, but examine raw output for complete details. Compare scan results over time to track changes in network exposure.

**Provider Selection**

Choose the appropriate provider for your needs:

- Use Nmap for network reconnaissance and port analysis
- Use OS Patch for security update assessment on managed systems
