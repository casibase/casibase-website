---
title: Scan Providers
keywords: [Casibase, Scan Provider, Security Scanning, Network Scanning]
---

## Introduction

Scan Providers in Casibase enable security and network scanning capabilities for your infrastructure assets. They integrate with scanning tools like Nmap to perform vulnerability assessments and network discovery on virtual machines and other assets.

## What is a Scan Provider?

A Scan Provider is a service integration that allows Casibase to perform automated scans on your assets. Currently, Casibase supports scanning of Virtual Machine assets using industry-standard tools. The scan results can be displayed directly in the admin interface with structured JSON output for easy analysis.

## Supported Scan Providers

Casibase currently supports the following scan providers:

- **Nmap**: Network exploration tool and security scanner

## Adding a Scan Provider

To add a scan provider to Casibase:

1. Navigate to the Providers page from the admin interface
2. Click the `Add` button
3. Select `Scan` as the provider category
4. Choose your scan provider type (e.g., Nmap)
5. Configure the provider settings:
   - **Name**: A unique identifier for this provider
   - **Display Name**: A user-friendly name
   - **Type**: The scan tool type (e.g., Nmap)
   - **Client ID**: Configuration details specific to your scan tool

6. Click `Save & Exit` to complete the setup

## Creating and Running Scans

Once you have configured a scan provider, you can create scans for your assets:

### Create a Scan

1. Navigate to the Scans page
2. Click `Add` to create a new scan
3. Configure the scan:
   - **Asset**: Select a Virtual Machine asset to scan
   - **Provider**: Choose the scan provider to use
   - **Command**: Optional command parameters (use `%s` as placeholder for the target)
   - **Display Name**: A descriptive name for this scan

### Execute a Scan

After creating a scan, click the `Scan` button to start the scanning process. The scan will:

1. Retrieve the asset's public IP address
2. Execute the scan using the configured provider
3. Display results in the admin interface

Scan states include:
- **Pending**: Scan is ready to run
- **Running**: Scan is currently executing
- **Completed**: Scan finished successfully
- **Failed**: Scan encountered an error

## API Endpoints

Casibase provides REST APIs for scan management:

- `GET /api/get-scans` - List all scans
- `GET /api/get-scan` - Get a specific scan
- `POST /api/add-scan` - Create a new scan
- `POST /api/update-scan` - Update scan configuration
- `POST /api/delete-scan` - Delete a scan
- `POST /api/start-scan` - Execute a scan

For detailed API documentation, refer to the [Swagger documentation](/docs/developer-guide/swagger).

## Best Practices

When working with scan providers:

- Use specific scan commands to focus on relevant information and reduce scan time
- Review scan results regularly to identify security issues
- Store scan configurations for repeated use on similar assets
- Ensure your scan provider has necessary network access to target assets
