---
title: Form Configuration
description: How to configure and customize forms in Casibase
keywords: [forms, configuration, list page, customization]
authors: [hsluoyz]
---

## Accessing Forms

Forms can be accessed through the Casibase admin interface:

1. Log in to your Casibase admin dashboard
2. Navigate to the Forms section from the main menu
3. You'll see a list of existing forms organized by category and type

## Creating a New Form

### Step 1: Basic Information

To create a new form:

1. Click the **Add** button on the Forms list page
2. Fill in the basic form information:
   - **Organization**: Select the organization (typically your organization name)
   - **Name**: Enter a unique identifier for the form
   - **Display Name**: Provide a human-readable name
   - **Position**: Set the position or order (optional)

### Step 2: Select Form Category

Choose the appropriate category for your form:

- **Table**: For traditional table-based forms
- **iFrame**: For embedding external content
- **List Page**: For customizing list page columns (recommended for most use cases)

### Step 3: Configure Form Type

If you selected **List Page** as the category:

1. Choose the **Type** from the dropdown menu
   - Currently supported: **Records**
   - More types will be added in future versions

2. The form will automatically populate with default columns for the selected type

### Step 4: Customize Form Items

For each form item (column), you can configure:

#### Name

The internal identifier for the column. This corresponds to the data field being displayed.

Available columns for Records include:

- `organization`: Organization name
- `id`: Record ID
- `name`: Record name
- `clientIp`: Client IP address
- `createdTime`: Creation timestamp
- `provider`: AI provider name
- `provider2`: Secondary provider
- `user`: Associated user
- `method`: HTTP method
- `requestUri`: Request URI
- `language`: Language
- `query`: Query parameters
- `region`: Geographic region
- `city`: City
- `unit`: Unit information
- `section`: Section
- `response`: Response data
- `object`: Related object
- `errorText`: Error messages
- `isTriggered`: Trigger status
- `action`: Action column
- `block`: Block information
- `block2`: Secondary block information

#### Visible

Toggle to show or hide the column in the list page. Hidden columns are still available in the form configuration but won't appear in the UI.

#### Width

Set the column width in pixels. This helps optimize the display based on the content length and your screen size.

:::tip

- Use narrower widths (90-120px) for short fields like IDs, dates, and status indicators
- Use wider widths (200-300px) for longer text fields like names, descriptions, and URIs
- Adjust widths based on your typical content length to avoid truncation

:::

### Step 5: Reorder Columns

Arrange columns in your preferred order:

1. Use the **Up** arrow button to move a column up
2. Use the **Down** arrow button to move a column down
3. The leftmost columns will appear first in the list page

### Step 6: Add or Remove Columns

- **Add Column**: Click the **Add** button to create a new custom column
- **Remove Column**: Click the **Delete** button next to a column to remove it
- **Reset to Default**: Click **Reset to Default** to restore the original column configuration

### Step 7: Preview and Save

1. View the **Preview** section at the bottom of the form editor
2. The preview shows how your form will appear in the actual list page
3. Click on the preview to open the full list page in a new window
4. Once satisfied, click **Save & Exit** to apply your changes

## Editing Existing Forms

To modify an existing form:

1. Navigate to the Forms list page
2. Click on the form name or the edit button
3. Make your desired changes
4. Click **Save & Exit** to apply the updates

Changes take effect immediately for all users viewing the corresponding list page.

## Form Categories in Detail

### List Page Forms

List Page forms are the most commonly used type in Casibase. They allow you to:

- Customize which columns appear in list views
- Control column order and width
- Show/hide columns based on user needs
- Create optimized views for different workflows

:::caution

When configuring List Page forms:

- The **Action** column is always displayed at the end, regardless of form item configuration
- At least one column should be visible for the list page to be functional
- Column names must match the actual data fields available in the backend

:::

### Table Forms

Table forms are used for structured data display in table format. Configuration is similar to List Page forms but may have different available fields based on the data source.

### iFrame Forms

iFrame forms allow you to embed external content or applications within the Casibase interface:

1. Set the **URL** field to the external content address
2. Configure display settings as needed
3. The content will be displayed in an embedded frame
