---
title: Backend Permissions
description: Backend permission utilities in Casibase
keywords: [backend, permissions, Go, access control, authorization]
---

Casibase's Go backend centralizes permission checking through utility functions in `util/permission.go`. These functions provide consistent role validation across controllers, routers, and service layers.

## Permission Functions

### `IsAdminOrChatAdmin(user)`

Checks if a user is either a system admin or a chat admin.

```go
if !util.IsAdminOrChatAdmin(user) {
    c.ResponseError("this operation requires admin privilege")
    return
}
```

Returns `true` for:

- Users with `IsAdmin` flag set
- Users with `Type == "chat-admin"`

This is the most commonly used permission check for operations that require elevated privileges.

### `IsChatAdmin(user)`

Checks specifically for chat admin role.

```go
if util.IsChatAdmin(user) {
    // Grant chat-admin specific permissions
}
```

Returns `true` only for users with `Type == "chat-admin"`.

### `IsVideoNormalUser(user)`

Checks if a user has the video-normal-user role, which has restricted video editing permissions.

```go
if util.IsVideoNormalUser(user) {
    if len(video.Remarks) > 0 || video.State != "Draft" {
        c.ResponseError("video can only be updated in Draft state")
        return
    }
}
```

Returns `true` for users with `Type == "video-normal-user"`.

## Role Type Constants

The package defines constants for role types to eliminate hardcoded strings:

```go
const (
    UserTypeChatAdmin       = "chat-admin"
    UserTypeVideoNormalUser = "video-normal-user"
)
```

These constants ensure type safety and prevent typos when checking user roles.

## Usage in Controllers

### Authorization Filter

The router middleware uses permission checks to protect admin endpoints:

```go
// routers/authz_filter.go
func permissionFilter(ctx *context.Context) {
    user := GetSessionUser(ctx)
    
    if !util.IsAdminOrChatAdmin(user) {
        responseError(ctx, "this operation requires admin privilege")
        return
    }
}
```

### API Controllers

Controllers use these functions to enforce business logic permissions:

```go
// controllers/account.go - User type assignment
if strings.Count(claims.Type, "-") <= 1 {
    if !util.IsAdminOrChatAdmin(&claims.User) {
        claims.Type = "chat-user"
    }
}

// controllers/video.go - Video update restrictions
if util.IsVideoNormalUser(user) {
    if len(video.Remarks) > 0 || video.State != "Draft" {
        c.ResponseError("video can only be updated when state is Draft")
        return
    }
}
```

### Service Layer

Object and service layers also benefit from centralized checks:

```go
// object/util.go
func isAdmin(user *casdoorsdk.User) bool {
    return util.IsAdminOrChatAdmin(user)
}
```

## Migration Impact

Before centralization, permission checks were duplicated across the codebase:

```go
// Before: inline, repeated logic
isAdmin := user != nil && (user.IsAdmin || user.Type == "chat-admin")
if !isAdmin {
    return error
}

// After: single, reusable function
if !util.IsAdminOrChatAdmin(user) {
    return error
}
```

The migration improved:

**Maintainability**: Permission logic changes happen in one place
**Consistency**: All parts of the system use identical checks
**Security**: Reduced risk of permission check errors

## Safety Features

All permission functions include null safety checks:

```go
func IsAdminOrChatAdmin(user *casdoorsdk.User) bool {
    if user == nil {
        return false
    }
    return user.IsAdmin || user.Type == UserTypeChatAdmin
}
```

This prevents nil pointer dereferences and ensures permission checks fail safely when user data is unavailable.
