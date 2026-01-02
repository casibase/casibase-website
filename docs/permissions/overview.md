---
title: Permissions Overview
description: Understanding Casibase's permission system
keywords: [permissions, roles, access control, admin, chat-admin]
---

Casibase uses a role-based permission system to control access to features and resources. The system distinguishes between different user types, each with specific capabilities and access levels.

## User Roles

Casibase supports several user roles:

**System Admin** - Full administrative access to all features, including system configuration, user management, and all resources. This is the highest privilege level.

**Chat Admin** - Administrative access focused on chat and knowledge base operations. Can manage stores, vectors, chats, activities, and view all users' data.

**Chat User** - Regular users who can interact with AI chat, access their assigned stores, and view their own usage data.

**Video Normal User** - Users with restricted video permissions. Can only modify videos in "Draft" state when no remarks are present.

## Permission Hierarchy

The permission system follows this hierarchy (from highest to lowest):

1. System Admin (built-in admin or users with `isAdmin` flag)
2. Chat Admin (users with `type: "chat-admin"`)
3. Chat User (users with `type: "chat-user"`)
4. Anonymous/Guest users (limited read-only access)

Higher-level roles inherit the permissions of lower-level roles.

## How Permissions Work

Permissions are checked throughout the application:

**Frontend checks** determine what UI elements users see and which client-side operations they can perform. These checks prevent unauthorized access to admin panels, configuration pages, and sensitive features.

**Backend checks** enforce permissions on API endpoints and data operations. Even if frontend checks are bypassed, backend validation ensures security at the server level.

This dual-layer approach provides defense in depth - the frontend offers a smooth user experience by hiding inaccessible features, while the backend guarantees security enforcement.

## Authentication Integration

Casibase integrates with [Casdoor](/docs/basic/casdoor-sso) for user authentication and SSO. User roles and permissions are managed through Casdoor and synchronized automatically with Casibase.

## Implementation

Casibase centralizes permission logic to maintain consistency and simplify updates:

- Frontend utilities in `Setting.js` provide reusable permission checking functions
- Backend utilities in `util/permission.go` handle server-side authorization

For implementation details, see [Frontend Permissions](/docs/permissions/frontend-permissions) and [Backend Permissions](/docs/permissions/backend-permissions).
