---
title: Forms Overview
description: Introduction to Forms in Casibase
keywords: [forms, customization, list page, columns]
authors: [Attack825]
---

## Introduction

Forms in Casibase provide a powerful way to customize the display of list pages throughout the application. By configuring forms, you can control which columns are visible, their order, and their width in various list views such as Records, Providers, Stores, and more.

The Forms feature was ported from Casdoor and allows administrators to tailor the user interface to their specific needs, improving usability and focusing on the most relevant information.

## Key Features

### Customizable Column Visibility

Control which columns appear in list pages by toggling the visibility setting for each form item. This helps reduce clutter and focus on the most important data.

### Adjustable Column Width

Set custom widths for each column to optimize the display based on the content type and your screen size preferences.

### Column Ordering

Arrange columns in the order that makes the most sense for your workflow by reordering form items.

### Multiple Form Categories

Forms support different categories to serve various purposes:

- **Table**: Traditional table-based forms for displaying structured data
- **iFrame**: Forms that can embed external content
- **List Page**: Forms specifically designed to customize list page columns

## Form Structure

Each form in Casibase consists of:

- **Organization**: The organization that owns the form
- **Name**: Unique identifier for the form
- **Display Name**: Human-readable name shown in the interface
- **Position**: Placement or order of the form
- **Category**: Type of form (Table, iFrame, or List Page)
- **Type**: Specific form type (e.g., "records" for the Records list page)
- **URL**: Associated URL or endpoint (for Table and iFrame categories)
- **Form Items**: Collection of columns or fields to display

## Form Items

Form items define the individual columns in a list page. Each form item includes:

- **Name**: Internal column identifier (e.g., "organization", "name", "createdTime")
- **Label**: Display label shown in the column header
- **Type**: Data type (currently "Text" for list pages)
- **Visible**: Whether the column is displayed
- **Width**: Column width in pixels

## Use Cases

Forms are particularly useful for:

1. **Customizing Record Views**: Tailor the Records list page to show only relevant columns for your use case
2. **Simplifying Complex Tables**: Hide technical columns that aren't needed by all users
3. **Optimizing Screen Space**: Adjust column widths to fit more information on screen
4. **Role-Based Views**: Create different forms for different user roles or workflows

## Getting Started

To start using Forms in Casibase:

1. Navigate to the Forms section in the Casibase admin interface
2. Create a new form or edit an existing one
3. Configure the form category, type, and items
4. Preview your changes in real-time
5. Save and apply the form to the corresponding list page

For detailed instructions on configuring forms, see the [Form Configuration](form-configuration.md) guide.
