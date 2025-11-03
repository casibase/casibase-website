---
title: OS Patch Scan Provider
description: System patch assessment and security update detection
keywords: [Casibase, OS Patch, Security Updates, Patch Management, System Updates]
authors: [casibase]
---

The OS Patch Scan Provider assesses system security by checking for missing patches and available updates. It analyzes installed software versions and compares them against known security vulnerabilities to identify systems requiring updates.

## Configuration

Create an OS Patch Scan Provider by navigating to Providers and adding a new provider with Category set to "Scan" and Type set to "OS Patch". Configure the display name and owner. Like other scan providers, it requires no external credentials or API keys.

## Patch Assessment

The provider evaluates system patch status by connecting to target systems and querying package managers for update information. It identifies the current patch level, finds missing security updates, and compares installed software versions against available updates. The assessment generates prioritized recommendations for patches that should be installed.

## Running Scans

Execute OS Patch scans against Linux-based virtual machines and servers. Target systems must be accessible from Casibase and have package management tools properly configured. The scan analyzes available updates but makes no changes to the target system.

From the Scans page, create a new scan and select the OS Patch provider. Choose your target asset from the inventory or enter system details manually. The provider edit page also includes a test widget for verifying connectivity and functionality before running production scans.

## Scan Results

Results provide patch assessment data formatted for review. The structured output includes available security updates, identifies package version discrepancies, and provides update priority recommendations. Installation impact analysis helps you understand what changes each update will make to the system.

This information appears in both structured format for quick scanning and raw output for detailed analysis. The web interface organizes the data to highlight critical security patches that require immediate attention versus routine updates.

## System Requirements

Target systems should have network connectivity allowing Casibase to reach them. Package manager tools must be installed and functional on the target. The scan queries the package database to retrieve information about installed software and available updates.

Regular scanning helps maintain visibility into your security posture across infrastructure. Compare results over time to track how patch levels change and ensure critical updates are applied promptly. The historical record preserved in Casibase makes it easy to demonstrate compliance with patch management policies.
