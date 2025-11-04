---
title: System Info
description: Monitor system resources and performance
keywords: [system monitoring, performance, metrics, CPU, memory, disk, network]
authors: [copilot]
---

Casibase provides real-time system monitoring to help administrators track resource usage and performance. The System Info page displays key metrics about your Casibase instance.

## Accessing System Info

Global administrators can access the system monitoring dashboard through the **SysInfo** menu item in the navigation bar. This page automatically refreshes metrics every 3 seconds.

## Available Metrics

**CPU Usage**: Displays the current CPU utilization percentage for each processor core. This helps identify if the system is experiencing high computational load.

**Memory Usage**: Shows the memory consumption of the Casibase process relative to total system memory. Monitor this to ensure sufficient memory is available for smooth operation.

**Disk Usage**: Tracks the storage space used by Casibase's data directory. This metric helps you monitor growth and plan for storage capacity.

**Network Usage**: Displays cumulative network I/O for the Casibase process, including bytes sent, received, and total throughput. This helps track data transfer patterns and identify potential network bottlenecks.

## API Performance Metrics

For deployments with Prometheus integration, the System Info page also shows:

- **API Latency**: Response time distribution across different API endpoints
- **API Throughput**: Request count per endpoint to identify high-traffic routes

These metrics help optimize performance and troubleshoot slow requests.
