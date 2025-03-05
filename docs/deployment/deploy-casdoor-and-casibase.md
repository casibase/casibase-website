---
title: Deploy Casdoor and Casibase
description: Discover how to deploy Casdoor and Casibase.
keywords: [Casibase, Deployment, Installation, Casdoor]
authors: [kv-chiu]
---

## Introduction

:::tip

**What is Casdoor?**

Casdoor is a powerful authentication system that provides a secure and reliable login experience. It's a prerequisite for Casibase, so be sure to deploy it first.

Refer to the [Casdoor](https://casdoor.org/) website for more information.

:::

### Step 1: Deploy Casdoor

In [Casdoor Deployment Guide](https://casdoor.org/docs/basic/server-installation/), you can find the detailed steps to deploy Casdoor.

Once you've deployed Casdoor, you'll look like this:

![Casdoor-home](/img/walkthrough-guides/casdoor-home.png)

### Step 2: Create an organization in Casdoor

In Casdoor, you can create an organization to manage your users and applications. You can create an organization by clicking the `User Management - Organizations` button on the home page.

![Casdoor-home-organization](/img/walkthrough-guides/casdoor-home-organizations.png)

#### Step 2.1: Add an organization

Click the `Add` button to add an organization.

![Casdoor-organizations-add](/img/walkthrough-guides/casdoor-organizations-add.png)

#### Step 2.2: Fill in the organization information

Fill in the organization information and click the `Save & Exit` button.

![Casdoor-organizations-form-filling](/img/walkthrough-guides/casdoor-organizations-form-filling.png)

#### Step 2.3: View the organization

After adding the organization, you can view the organization information.

![Casdoor-organizations-view](/img/walkthrough-guides/casdoor-organizations-view.png)

### Step 3: Create an application in Casdoor

In Casdoor, you can create an application to manage your users and organizations. You can create an application by clicking the `Identity - Applications` button on the home page.

![Casdoor-home-applications](/img/walkthrough-guides/casdoor-home-applications.png)

#### Step 3.1: Add an application

Click the `Add` button to add an application.

![Casdoor-applications-add](/img/walkthrough-guides/casdoor-applications-add.png)

#### Step 3.2: Fill in the application information

Fill in the application information and click the `Save & Exit` button.

![Casdoor-applications-form-filling](/img/walkthrough-guides/casdoor-applications-form-filling.png)

#### Step 3.3: View the application

After adding the application, you can view the application information.

![Casdoor-applications-view](/img/walkthrough-guides/casdoor-applications-view.png)

### Step 4: Create a user in Casdoor for Casibase

In Casdoor, you can create a user to login Casibase. You can create a user by clicking the `User Management - Organizations - Users` button from the home page.

![Casdoor-home-users](/img/walkthrough-guides/casdoor-home-users.png)

:::tip

A user is a member of an organization who can login to applications in the organization.

Refer to the [Casdoor](https://casdoor.org/) website for more information.

:::

#### Step 4.1: Add a user

Click the `Add` button to add a user.

![Casdoor-users-add](/img/walkthrough-guides/casdoor-users-add.png)

#### Step 4.2: Fill in the user information

Fill in the user information and click the `Save & Exit` button.

![Casdoor-users-form-filling](/img/walkthrough-guides/casdoor-users-form-filling.png)

- Password

You can set the user's password by clicking the `Modify password` button.

![Casdoor-users-form-filling-password](/img/walkthrough-guides/casdoor-users-form-filling-password.png)

- Admin

You can set the user's admin permission by clicking the `Is admin` button.

![Casdoor-users-form-filling-admin](/img/walkthrough-guides/casdoor-users-form-filling-admin.png)

#### Step 4.3: View the user

After adding the user, you can view the user information.

![Casdoor-users-view](/img/walkthrough-guides/casdoor-users-view.png)

### Step 5: Deploy Casibase

Like Casdoor, you can deploy Casibase by following the [Casibase Deployment Guide](../basic/server-installation).

Once you've deployed Casibase, you'll look like this:

![Casibase-home](/img/walkthrough-guides/casibase-home.png)
