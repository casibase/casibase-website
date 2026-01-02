---
title: Transactions
description: Transaction tracking and billing integration
keywords: [transactions, Casdoor, billing, token costs]
authors: [hsluoyz]
---

Transactions connect Casibase usage to Casdoor's billing system. Each AI-generated message automatically creates a transaction record that captures the associated costs and metadata.

## Transaction Structure

Transactions use a structured format to track chat interactions:

- **Type**: Chat identifier - links the transaction to a specific conversation
- **Subtype**: Message identifier - tracks which message generated the cost
- **Provider**: Model provider name (e.g., "OpenAI", "Claude")
- **Amount**: Token cost calculated for the message

This structure provides complete traceability from billing records back to the original conversations and messages. Organizations can use this data for cost analysis, usage reporting, and budget tracking across teams.

## Balance Validation

Before any AI processing begins, Casibase validates that you have sufficient balance to cover the estimated cost. The system asks the model provider to calculate how many tokens your question will likely consume, then checks this amount against your balance using a dry run transaction—a temporary validation that doesn't actually deduct funds.

If the validation fails, you'll receive an error message right away and the AI won't process your request. This saves you from waiting for an AI response only to discover you can't afford it. Once validation succeeds, the AI generates your answer and a real transaction records the actual cost, which may differ slightly from the estimate based on the final response length.

## Automatic Creation

Transactions are created after the AI completes your answer, ensuring that billing records stay synchronized with actual usage. You don't need to manually track or create transaction records - the system handles this automatically for every AI interaction.

## Integration with Casdoor

Transaction records are stored in Casdoor, enabling centralized billing management across all your applications. This integration allows organizations to:

- Track AI usage costs alongside other application expenses
- Generate unified billing reports
- Set up usage alerts and budgets
- Analyze spending patterns across different AI providers

The transaction data flows seamlessly from Casibase to Casdoor, providing real-time visibility into AI usage costs without requiring manual data entry or reconciliation.
