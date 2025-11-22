---
title: API Updates
description: Recent API updates and changes
keywords: [API, updates, transactions, records]
authors: [Copilot]
---

This page documents recent API updates and changes to help developers integrate with the latest Casibase features.

## Record Management

### Record Count Field

Records now include a `Count` field to support data aggregation. This field defaults to `1` for all new records.

When creating records via the API endpoints (`add-record` or `add-records`), the count value represents how many actual data records this entry aggregates. This is useful for uploading consolidated data without creating individual records.

**Example**: Instead of inserting 100 individual log records, you can create one record with `count: 100` to maintain accurate statistics while reducing storage.

**API Behavior**:

- Default value: `1` for all new records
- Display: Zero values are shown as `1` in the frontend for backward compatibility
- Type: Integer field

## Transaction Tracking

### Automatic Transaction Creation

Casibase now automatically creates transaction records in Casdoor when AI messages are generated. This enables centralized billing and usage tracking across your organization.

**Transaction fields**:

- `Type`: Chat identifier
- `Subtype`: Message identifier  
- `Provider`: Model provider name (e.g., "OpenAI", "Claude")
- `Amount`: Token cost for the message

Transactions are created immediately after token costs are calculated, ensuring accurate usage tracking and billing.

## Chat and Message Fields

### Model Provider Field

Both Chat and Message objects now properly populate the `ModelProvider` field, which was previously empty. This field identifies the AI provider handling the conversation.

**Field population**:

- Chats: `ModelProvider` is set from the store's configured provider during chat creation
- Messages: `ModelProvider` is inherited from the parent chat or store
- Transactions: The provider field is populated from the message's model provider

This ensures complete traceability from chat sessions through individual messages to billing transactions.

### Price Precision

Price calculations now use proper decimal handling to prevent floating-point precision loss. Costs are accurately calculated and stored for all token usage.

## SDK Updates

The casdoor-go-sdk has been updated to v1.36.0 to support the new transaction structure. Applications using the SDK should upgrade to benefit from improved transaction tracking and field organization.

## Best Practices

When integrating with these APIs:

1. **Records**: Use the count field for aggregated data to optimize storage
2. **Transactions**: Monitor transaction records for usage analytics and billing
3. **Model Providers**: Check the model provider field to understand which AI service handled each conversation
4. **SDK Version**: Keep your SDK updated to access the latest features

For complete API documentation, refer to the [Swagger documentation](https://ai-admin.casibase.com/swagger/index.html).
