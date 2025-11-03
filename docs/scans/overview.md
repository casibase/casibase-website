---
title: Scans
description: Network and security scanning in Casibase
keywords: [Casibase, Scan, Network Scan, Security Audit, Nmap, OS Patch]
authors: [casibase]
---

Scans in Casibase enable network discovery, security auditing, and system assessment across your infrastructure. The scan feature provides automated scanning capabilities for assets like virtual machines and network hosts, delivering structured results for analysis.

## What is a Scan?

A Scan represents a scanning operation executed against a target asset. Each scan instance records the target, provider used, execution time, and results. Scans can be triggered manually or configured to run on demand against assets in your infrastructure.

## Scan Workflow

The scanning process follows these steps:

**1. Create a Scan**

Navigate to the Scans page and create a new scan instance by configuring:

- Target selection (asset or manual IP input)
- Scan provider (e.g., Nmap, OS Patch)
- Scan parameters

**2. Select Target**

Choose your scan target using one of two modes:

- **Asset Mode**: Select an existing asset from your asset inventory
- **Manual Mode**: Enter a target IP address or hostname directly

For Virtual Machine assets, the scan automatically uses the public IP address from the asset properties.

**3. Execute Scan**

Click the "Start" button to initiate the scan. The scan provider performs the configured scanning operation against the target and returns results.

**4. View Results**

Scan results are displayed in two formats:

- **Structured View**: Provider-specific rendering with organized tables and formatted data
- **Raw Output**: Complete text output from the scan tool

Results are stored in the database for historical reference and analysis.

## Scan Providers

Casibase supports multiple scan provider types, each optimized for specific scanning tasks.

### Nmap Scan Provider

The Nmap provider performs network discovery and security auditing by scanning ports, detecting services, and identifying system information.

**Capabilities:**

- Port scanning with customizable ranges
- Service version detection
- Operating system fingerprinting
- Network topology mapping

**Result Format:**
The Nmap provider returns structured JSON containing host information, open ports, detected services, and system details. The web interface renders this data in organized tables showing ports, states, services, and versions.

### OS Patch Provider

The OS Patch provider checks system patch status and identifies missing security updates.

**Capabilities:**

- System update assessment
- Security patch detection
- Package version checking
- Update recommendations

**Result Format:**
Results include patch status information, available updates, and security recommendations, displayed in a structured format for quick review.

## Scan Configuration

When configuring a scan in the provider edit page, you can test the provider functionality directly. The scan configuration widget supports:

- **Target Mode Selection**: Switch between Asset and Manual Input modes
- **Provider Testing**: Execute test scans to verify provider configuration
- **Result Preview**: View scan output before saving configurations

## API Integration

Scans support programmatic access through REST APIs:

- `GET /get-scans`: Retrieve all scans with pagination
- `GET /get-scan`: Get a specific scan by ID
- `POST /add-scan`: Create a new scan
- `POST /update-scan`: Update scan configuration
- `POST /delete-scan`: Remove a scan
- `POST /scan-asset`: Execute a scan against an asset

The `/scan-asset` API performs on-demand scanning and returns results without creating a persistent scan record, useful for quick assessments.

## Best Practices

**Target Selection**

For cloud-based virtual machines, use Asset Mode to automatically resolve the correct public IP address. This ensures scans reach the intended target even as infrastructure changes.

**Scan Frequency**

Schedule regular scans to maintain current security posture visibility. Consider scan impact on target systems when determining frequency.

**Result Analysis**

Review both structured and raw results. The structured view provides quick insights, while raw output offers complete details for in-depth analysis.

**Provider Choice**

Select the appropriate provider for your scanning needs:

- Use Nmap for network discovery and port scanning
- Use OS Patch for security update assessment
