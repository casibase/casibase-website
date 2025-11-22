---
title: Graphs
description: Graph Visualization in Casibase
keywords: [Casibase, Graphs, Visualization, Network Graph]
authors: [hsluoyz]
---

## Overview

Graphs in Casibase provide visual representation of relationships and connections between entities. The interactive graph interface allows you to explore complex data structures through an intuitive node-and-link visualization.

## Asset Graph Transformation

Casibase can automatically generate graphs from cloud infrastructure assets. When you have assets defined (such as virtual machines, containers, or network resources), use the asset-to-graph transformation feature to visualize their relationships. The system analyzes asset properties to create nodes and establishes links based on resource dependencies and connections. This provides instant visibility into your infrastructure topology without manual graph definition.

## Creating a Graph

Navigate to the Graphs section and click `Add` to create a new graph. Configure the graph with:

- **Name**: Unique identifier for the graph
- **Display Name**: Human-readable name shown in the UI
- **Category**: Select the graph category (Assets, Chats, etc.)
- **Data**: JSON structure defining nodes and links

### Graph Categories

Casibase supports different graph categories for various data types:

**Assets**: Visualize cloud infrastructure and network topology. Define nodes and links manually or generate them automatically from asset data.

**Chats**: Analyze chat conversations with word cloud visualization. Select a store and time range to filter conversations, then generate word clouds from message content. The system automatically processes chat messages, removes stop words, and creates visualizations showing frequently used terms.

### Graph Data Structure

Graphs use a JSON format with two main components:

**Nodes**: Individual entities in the graph

```json
{
  "id": "node1",
  "name": "Node Name",
  "label": "Display Label",
  "icon": "icon-url"
}
```

**Links**: Connections between nodes

```json
{
  "source": "node1",
  "target": "node2",
  "label": "Connection Type"
}
```

## Interactive Features

The graph visualization provides several interactive capabilities:

**Node Selection**: Click any node to view its details in a floating panel. Selected nodes are highlighted with a distinct visual style. The detail panel displays node metadata including all custom properties defined in the asset or node configuration, and shows related scan results when available. For assets with associated scans, you can review the scan history and results directly from the node detail view.

**Canvas Navigation**: Drag anywhere on the canvas to pan the view. The graph supports full directional movement for exploring large networks.

**Visual Feedback**: Nodes display custom icons and labels. Links connect at node edges rather than centers for cleaner visualization. When assets have associated scan results, the node displays a notification badge showing the scan count. The badge appears as a red pill-shaped indicator with white text, similar to iOS app notifications, making it immediately obvious which nodes have scan data available without needing to click through each one.

### Layout Controls

Graphs support multiple layout algorithms to organize nodes:

- **Force-directed layout**: Nodes automatically arrange based on their connections, creating organic-looking graphs where connected nodes pull together while maintaining spacing.
- **Word Cloud layout**: Available for Chats category graphs, displays words sized by frequency for visual analysis of conversation topics.
- **None layout**: Positions nodes based on provided coordinates, useful when you want manual control over the exact placement.

### Chat Analysis with Word Clouds

For Chats category graphs, Casibase provides specialized visualization through word clouds. Configure these graphs by:

1. **Selecting a Store**: Choose which chat store to analyze
2. **Setting Time Range**: Define start and end times to focus on specific periods
3. **Viewing Chat Data**: Review the filtered chats and messages in table format
4. **Generating Visualizations**: The system automatically creates word clouds from message content

The word cloud generation process extracts text from all messages in the selected time range, removes common stop words (in English and Chinese), and calculates word frequencies. Words appear larger based on how often they occur in the conversations, making it easy to identify key topics and themes.

### Density Control

For graphs with many nodes, use the density slider to adjust node spacing. Higher density brings nodes closer together for a compact view, while lower density spreads them out for better readability. This is particularly useful when working with auto-generated graphs from cloud infrastructure.

## Graph Editing

In edit mode, you can modify the graph structure and preview changes:

- Edit the JSON data to add, remove, or modify nodes and links
- Preview shows real-time visualization with a bordered canvas
- Changes are saved when you click `Save & Exit`

## Node Properties

Each node can have custom properties:

- **Icon**: URL to an icon image displayed on the node
- **Label**: Text displayed below the node
- **Properties**: Additional metadata shown in the detail panel

When viewing node details, the panel shows comprehensive information about the selected node. For asset-derived graphs, this includes all metadata from the original asset such as IP addresses, resource IDs, locations, and other cloud-specific properties. Property values are displayed in an organized format with proper label formatting. Long text values are automatically truncated with ellipsis for readability.

For assets with scan results, the detail panel includes a dedicated section showing related scans. You can view scan execution history, status information, and access the full scan results without leaving the graph view. This integration provides immediate visibility into the security and operational status of your infrastructure assets as you explore the topology.

## Error Handling

Graphs include built-in error handling. If data cannot be loaded or visualization fails, an error message displays in place of the graph, allowing you to identify and fix configuration issues.

## Customization

The graph visualization adapts to the Casibase theme, using consistent colors and styling throughout the interface. Selected nodes use theme colors for visual emphasis while maintaining clarity.

## Best Practices

Keep graph structures focused and organized. For complex networks, consider creating multiple smaller graphs rather than one large visualization. This improves performance and makes relationships easier to understand.

Use descriptive node labels and meaningful link labels to make the graph self-explanatory. Clear naming helps users quickly grasp the relationships without additional documentation.
