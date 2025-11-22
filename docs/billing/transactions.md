---
title: Transactions
description: Transaction tracking and billing integration
keywords: [transactions, Casdoor, billing, token costs]
authors: [Copilot]
---

Transactions connect Casibase usage to Casdoor's billing system. Each AI-generated message automatically creates a transaction record that captures the associated costs and metadata.

## Transaction Structure

Transactions use a structured format to track chat interactions:

- **Type**: Chat identifier - links the transaction to a specific conversation
- **Subtype**: Message identifier - tracks which message generated the cost
- **Provider**: Model provider name (e.g., "OpenAI", "Claude")
- **Amount**: Token cost calculated for the message

This structure provides complete traceability from billing records back to the original conversations and messages. Organizations can use this data for cost analysis, usage reporting, and budget tracking across teams.

## Automatic Creation

Transactions are created immediately after token costs are calculated, ensuring that billing records stay synchronized with actual usage. You don't need to manually track or create transaction records - the system handles this automatically for every AI interaction.

## Integration with Casdoor

Transaction records are stored in Casdoor, enabling centralized billing management across all your applications. This integration allows organizations to:

- Track AI usage costs alongside other application expenses
- Generate unified billing reports
- Set up usage alerts and budgets
- Analyze spending patterns across different AI providers

The transaction data flows seamlessly from Casibase to Casdoor, providing real-time visibility into AI usage costs without requiring manual data entry or reconciliation.
