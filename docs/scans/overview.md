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

Start by navigating to the Scans page and creating a new scan instance. You'll need to configure the target selection, choose a scan provider like Nmap or OS Patch, and set any necessary scan parameters.

When selecting your target, you can use **Asset Mode** to pick an existing asset from your inventory, or **Manual Mode** to enter an IP address or hostname directly. For Virtual Machine assets, the system automatically uses the public IP address from the asset properties.

Click the "Start" button to initiate the scan. The scan executes asynchronously, transitioning through states from **Pending** to **Running** to **Completed**. The **Runner** field tracks which system instance is actively executing the scan, useful in distributed deployments. If errors occur, the **ErrorText** field captures diagnostic information to help troubleshoot issues.

The scan provider performs the configured operation against your target and returns results. These results appear in three formats: a **Structured View** with organized tables and formatted data, the **Raw JSON** showing parsed data structures, and the **Raw Text** showing the complete unprocessed output from the scan tool. All formats are stored in the database for historical reference, allowing you to review previous scans and track changes over time.

To reset a scan and clear its results, use the **Clear** button available on scan pages. This removes the scan state and results while preserving the scan configuration, letting you run a fresh scan with the same settings.

From the Scans list page, you can quickly review scan results without opening the full editor. The Result column provides a popup view displaying the same structured, JSON, and raw text formats available in the scan detail page.

## Scan Providers

Casibase supports multiple scan provider types, each optimized for specific scanning tasks.

The **Nmap Scan Provider** performs network discovery and security auditing by scanning ports, detecting services, and identifying system information. It handles port scanning with customizable ranges, service version detection, operating system fingerprinting, and network topology mapping. Results come back as structured JSON containing host information, open ports, detected services, and system details, which the web interface renders in organized tables.

The **OS Patch Provider** checks system patch status and identifies missing security updates. The provider uses efficient local cache queries to list installed patches, ensuring fast scan performance without querying online update services. When listing available patches for installation, the system does query Windows Update online to identify new updates.

This hybrid approach balances speed and accuracy, providing quick status checks while enabling comprehensive update discovery when needed. Results include patch status information, available updates, and security recommendations in a structured format for quick review.

## Scan Configuration

When configuring a scan in the provider edit page, you can test the provider functionality directly. The scan configuration widget automatically selects the first available provider to streamline setup, and lets you switch between Asset and Manual Input modes for target selection, execute test scans to verify provider configuration, and view scan output before saving configurations. The system saves both the scan configuration and provider settings to the database before initiating scan execution, ensuring all settings are persisted.

For Manual Input mode, the target matching logic intelligently routes scans to the appropriate runner instance. When you specify a hostname as the target, the system matches it against each runner instance's hostname to ensure the scan executes on the correct machine. For IP address targets (excluding localhost), the scan routes to the instance whose network interfaces include that IP address, checking both private and public IPs.

Localhost and loopback addresses like 127.0.0.1 can be claimed by any instance, allowing flexible local scanning. This ensures distributed scan deployments work correctly, with each instance claiming scans intended for its specific machine.

## API Integration

Scans support programmatic access through REST APIs. Use `GET /get-scans` to retrieve all scans with pagination, or `GET /get-scan` to fetch a specific scan by ID. The `POST /add-scan` endpoint creates a new scan, while `POST /update-scan` modifies scan configuration and `POST /delete-scan` removes a scan.

The `POST /scan-asset` API performs on-demand scanning and returns results without creating a persistent scan record, making it useful for quick assessments.

## Working with Scans

For cloud-based virtual machines, Asset Mode automatically resolves the correct public IP address, ensuring scans reach the intended target even as infrastructure changes. Schedule regular scans to maintain visibility into your security posture, but consider the impact on target systems when determining frequency.

When analyzing results, review both the structured and raw formats. The structured view provides quick insights, while raw output offers complete details for in-depth analysis. Choose Nmap for network discovery and port scanning, or OS Patch for security update assessment depending on what you need to learn about your systems.
