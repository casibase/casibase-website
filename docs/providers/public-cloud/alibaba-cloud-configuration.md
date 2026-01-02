---
title: Alibaba Cloud Configuration
description: Configure Alibaba Cloud asset scanning
keywords: [Casibase, Alibaba Cloud, Aliyun, Asset Scanning, ECS, VPC]
authors: [hsluoyz]
---

## Overview

Alibaba Cloud integration enables comprehensive asset discovery and management for your cloud infrastructure. Casibase automatically scans resources across your Alibaba Cloud account, collecting detailed configuration information.

When using Alibaba Cloud as a model provider, the integration supports advanced features including web search capabilities during chat conversations, allowing the AI to retrieve real-time information from the internet. Alibaba Cloud provides access to various models including Qwen series and DeepSeek models (v3, v3.1, v3.2, R1) through their Model Studio platform.

## Prerequisites

Before configuring the Alibaba Cloud provider, you need:

- An Alibaba Cloud account
- Access Key ID and Access Key Secret with appropriate permissions
- Access to at least one region where resources are deployed

### Required Permissions

The Access Key should have permissions to call:

- `resourcecenter:SearchResources` - For resource discovery
- `ecs:DescribeInstances` - For ECS instance details
- `ecs:DescribeDisks` - For disk details
- `vpc:DescribeVpcs` - For VPC details

## Configuration Steps

### Create Access Key

1. Log in to Alibaba Cloud console
2. Navigate to AccessKey Management
3. Create a new Access Key pair
4. Save both the Access Key ID and Access Key Secret securely

### Add Provider in Casibase

1. Open Casibase and navigate to Providers
2. Click the `Add` button
3. Fill in the configuration:
   - **Name**: A descriptive name for this provider
   - **Type**: Select "Aliyun" (this is the internal identifier for Alibaba Cloud)
   - **Category**: Select "Public Cloud"
   - **Client ID**: Paste your Access Key ID
   - **Client Secret**: Paste your Access Key Secret
   - **Region**: Enter the target region (e.g., cn-hangzhou, cn-beijing)
4. Click `Save & Exit`

## Asset Discovery

Once configured, Casibase performs two-level asset discovery:

### Level 1: Resource Discovery

Uses the SearchResources API to scan all resource types in the specified region. This provides basic information about each resource including ID, type, region, and tags.

### Level 2: Detailed Enrichment

For specific resource types, Casibase makes additional API calls to gather comprehensive details:

**ECS Instances**

- Instance specifications (CPU cores, memory size)
- Operating system information
- Public and private IP addresses
- Billing method and instance status

**Disks**

- Disk category (cloud, cloud_efficiency, cloud_ssd)
- Size and attachment status
- Associated instance information

**VPCs**

- CIDR block configuration
- Associated VSwitches
- Routing table information

## Resource Properties

Each discovered asset includes standard fields plus resource-specific properties. The properties are stored as key-value pairs and displayed in the asset detail view.

Common properties include instance types, network configurations, storage specifications, and billing information.

## Scanning Multiple Regions

To scan resources in multiple regions, create separate providers for each region. This approach allows granular control over which regions are scanned and monitored.

## Troubleshooting

**No resources found**: Verify the Access Key has correct permissions and the specified region contains resources.

**Authentication errors**: Check that the Access Key ID and Secret are correctly entered and the key is active.

**Missing details**: Ensure the Access Key has permissions for the detailed API calls (DescribeInstances, DescribeDisks, DescribeVpcs).
