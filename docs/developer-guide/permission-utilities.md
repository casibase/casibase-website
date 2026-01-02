---
title: Permission Utilities
description: Centralized permission checking utilities for maintainable access control
keywords: [permissions, admin, access control, utilities, Setting.js]
authors: [Copilot]
---

## Overview

Casibase provides centralized permission utilities in `Setting.js` to handle user access checks consistently across the application. Instead of scattering hardcoded permission strings like `"chat-admin"` or direct property checks throughout the codebase, these utilities offer a single source of truth for permission logic.

## Available Utilities

### Admin User Checks

**`isAdminUser(account)`** - Checks if a user has full administrative privileges. Use this when features should only be accessible to system administrators.

**`isChatAdminUser(account)`** - Identifies users with chat-admin privileges. These users have elevated permissions for managing AI conversations and chat-related features without full system access.

**`canViewAllUsers(account)`** - Determines whether a user can see all users in the system. This combines admin and chat-admin checks, since both roles need this visibility for their respective management tasks.

### Scoped Admin Checks

**`isLocalAdminUser(account)`** - Validates admin rights within the user's local organization context. This is crucial for multi-tenant scenarios where organizations need their own administrative capabilities.

**`isLocalAndStoreAdminUser(account)`** - Extends local admin checks to include store management permissions. Store admins can configure knowledge bases and storage settings within their organization.

## Usage in Components

Before the refactoring, permission checks looked like this scattered throughout the code:

```javascript
// Old approach - fragile and hard to maintain
if (this.props.account.name === "admin" || this.props.account.type === "chat-admin") {
  return <AdminPanel />;
}
```

The new approach centralizes the logic:

```javascript
// New approach - maintainable and consistent
if (Setting.canViewAllUsers(this.props.account)) {
  return <AdminPanel />;
}
```

This pattern appears in several key pages: `ActivityPage.js`, `UsagePage.js`, `HomePage.js`, `App.js`, `MultiPaneManager.js`, `StoreInfoTitle.js`, `FileTree.js`, and `ProviderEditPage.js`.

## Why This Matters

Permission logic changes over time. New roles emerge, access rules evolve, and business requirements shift. By isolating all permission strings and property checks in `Setting.js`, the codebase becomes easier to maintain and extend. When adding a new permission level or modifying existing access rules, you only need to update the utility functions rather than hunting through dozens of files.

The refactoring also improves code readability. A function name like `canViewAllUsers()` clearly communicates intent, while inline conditions obscure the business logic behind syntax.
