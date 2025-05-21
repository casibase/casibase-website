---
title: Casibase SDKs
description: Learn how to integrate and use Casibase SDKs with your applications.
keywords: [Casibase, SDK, API, Integration, Java SDK]
authors: [dark-Qy]
---

## Introduction

Casibase provides SDKs to help developers integrate with Casibase's APIs more easily. The SDKs offer a convenient way to interact with Casibase's services for tasks like managing AI conversations, knowledge bases, and more.

Currently, Casibase offers a Java SDK, with more language support planned for the future.

| Backend SDK | Description | SDK code | Example code |
|-------------|-------------|----------|--------------|
| Java SDK | For Java backends | [casibase-java-sdk](https://github.com/casibase/casibase-java-sdk) | - |

## How to use Casibase SDK?

### 1. Backend SDK configuration

When your application starts up, you need to initialize the Casibase SDK config by providing the required parameters.

Take casibase-java-sdk as an example:

```java
CasibaseConfig config = new CasibaseConfig(
    "https://demo-admin.casibase.com",  // endpoint
    "your-client-id",                   // clientId
    "your-client-secret",               // clientSecret
    "casbin",                           // organizationName
    "app-casibase"                      // applicationName (optional)
);
```

All the parameters for initialization are explained as follows:

| Parameter | Required | Description |
|-----------|----------|-------------|
| endpoint | Yes | Casibase Server URL, like <https://demo-admin.casibase.com> or <http://localhost:14000> |
| clientId | Yes | Client ID for the Casibase application |
| clientSecret | Yes | Client secret for the Casibase application |
| organizationName | Yes | The name for the Casibase organization, e.g., casbin |
| applicationName | No | The name for the Casibase application, e.g., app-casibase |

### 2. Available Services

Once you have initialized the configuration, you can create and use the available services. Currently, the only available service is `TaskService`.

```java
TaskService taskService = new TaskService(config);
```

#### TaskService

`TaskService` supports basic task operations, such as:

* `getTask(String name)`: Get a single task by task name.
* `getTasks()`: Get all tasks under the organizationName.
* `addTask(Task task)`: Add a new task to the database.
* `updateTask(Task task)`: Update an existing task in the database.
* `deleteTask(Task task)`: Delete a task from the database.
