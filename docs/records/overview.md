---
title: Records
description: Data records and aggregation
keywords: [records, count field, data aggregation, logging]
authors: [Copilot]
---

Records in Casibase support efficient data logging and analytics through a built-in aggregation mechanism. Instead of storing thousands of individual entries, you can create consolidated records that represent multiple data points.

## Count Field

Records include a `Count` field that defaults to `1` for all new records. This field indicates how many actual data points the record represents.

When uploading consolidated data, set the count to match the number of underlying records. For example, if you have 100 similar log entries, create one record with `count: 100` rather than inserting 100 separate records. This approach significantly reduces storage requirements while maintaining accurate statistics.

## API Behavior

The count field works consistently across all record operations:

- **Default value**: `1` for all new records created via API or UI
- **Backward compatibility**: Zero values display as `1` in the frontend
- **Type**: Integer field supporting positive values

When using the `add-record` or `add-records` API endpoints, include the count value to specify how many data points the record aggregates.

## Use Cases

Records with aggregation are particularly useful for:

- **Log consolidation**: Summarize multiple similar log entries into a single record
- **Analytics**: Maintain accurate counts for reporting without storing raw data
- **System monitoring**: Track event frequencies without detailed individual records
- **Data archival**: Compress historical data while preserving statistical accuracy

The count field enables efficient data management by separating the logical representation (one record) from the actual count (potentially many occurrences).
