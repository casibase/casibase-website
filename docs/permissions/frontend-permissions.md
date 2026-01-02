---
title: Frontend Permissions
description: Frontend permission utilities in Casibase
keywords: [frontend, permissions, Setting.js, React, access control]
---

Casibase's React frontend uses centralized utility functions to check user permissions. These functions are defined in `web/src/Setting.js` and ensure consistent permission checking across all components.

## Permission Utility Functions

### `isAdminUser(account)`

Checks if a user is a system administrator.

```javascript
if (Setting.isAdminUser(account)) {
  // Show admin-only features
}
```

Returns `true` for:

- Built-in admin account (`owner === "built-in"`)
- Users with the `isAdmin` flag set to true

### `isChatAdminUser(account)`

Checks if a user has chat-admin privileges.

```javascript
if (Setting.isChatAdminUser(account)) {
  // Show chat admin features
}
```

Returns `true` for users with `type === "chat-admin"`.

### `canViewAllUsers(account)`

Checks if a user can view data for all users (not just their own).

```javascript
if (Setting.canViewAllUsers(account)) {
  // Enable "All users" option in dropdown
}
```

Returns `true` for:

- The admin account (name === "admin")
- Chat admin users

This function is commonly used in usage pages and activity logs where admins need to see organization-wide data.

### `isLocalAdminUser(account)`

Checks if a user has local admin privileges, which includes both system admins and chat admins.

```javascript
const canManagePanes = Setting.isLocalAdminUser(account);
```

Returns `true` for:

- System admins
- Chat admin users

### `isLocalAndStoreAdminUser(account)`

Similar to `isLocalAdminUser()` but also ensures the user can manage store content (not restricted to "non-store-admin" homepage).

```javascript
if (Setting.isLocalAndStoreAdminUser(account)) {
  // Allow file operations
}
```

## Practical Examples

### Restricting Menu Items

```javascript
// App.js - Building navigation menu
if (!Setting.isAdminUser(this.state.account)) {
  if (!Setting.isChatAdminUser(this.state.account)) {
    return res; // Return limited menu for regular users
  }
}
```

### Conditional UI Elements

```javascript
// UsagePage.js - User selection dropdown
<option key="all" value="All" 
  disabled={!Setting.canViewAllUsers(this.props.account)}>
  All
</option>
```

### Permission-Based Features

```javascript
// ProviderEditPage.js - Sensitive field access
<Input.Password
  value={this.state.provider.providerKey}
  disabled={!Setting.isAdminUser(this.props.account)}
  onChange={e => this.updateProviderField("providerKey", e.target.value)}
/>
```

## Benefits of Centralized Functions

Before these utilities existed, permission checks were scattered across components using inline conditions like `account.name === "admin" || account.type === "chat-admin"`. This made the code:

- **Fragile**: Changing role logic required updating multiple files
- **Inconsistent**: Different components might check permissions differently
- **Error-prone**: Easy to miss edge cases or make typos

Centralized utilities solve these issues by providing a single source of truth. Updates to permission logic happen in one place and automatically apply throughout the application.

## Implementation Notes

All utility functions perform null/undefined checks on the account parameter, making them safe to call without prior validation. They return `false` for invalid or missing accounts, following a secure-by-default approach.
