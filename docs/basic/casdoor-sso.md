---
title: Casdoor-SSO
description: Setup Casdoor for casibase
keywords: [Casdoor, SSO, Security, Authentication, Authorization]
authors: [palp1tate]
---

```mdx-code-block
import styles from '.././styles.module.css';
import CasdoorCard from "@site/src/components/CasdoorCard";
```

Casibase uses Casdoor as its identity and single-sign-on (SSO) provider. Make sure to deploy it in advance.

Please refer to [Casdoor Server Installation](https://casdoor.org/docs/basic/server-installation) to install and configure Casdoor.

Follow these steps to setup Casdoor for casibase:

- Create an Organization

![create-organization](/img/create-organization.png)

- Configure information about the Organization

![configure-organization](/img/configure-organization.png)

- Create a new Application

![create-application](/img/create-application.png)

- Configuring Application Information (Remember Name, ClientID and ClientSecret)

![configure-application](/img/configure-application.png)

- Create a Certificate: In the Casdoor dashboard, choose Cert → Add, keep `Algorithm` as `RS256` (default), enter a name, and click Save.

![create-cert](/img/create-cert.png)  

- Bind the Certificate to the Application: Open the *Config* tab of your newly created Application, select the certificate you just created from the Cert dropdown, and click Save.

![bind-cert](/img/bind-cert.png)

- Add a member to the newly created organization

![add-user](/img/add-user-1.png)

![add-user](/img/add-user-2.png)

- Configure member information (remember its Name as well as Password)

![configure-user](/img/configure-user-1.png)

![configure-user](/img/configure-user-2.png)

## User Store Binding

The Homepage field in Casdoor user profiles controls store access in Casibase. When you set a user's Homepage to a store name, that user becomes bound to that specific store and cannot access data from other stores.

This binding creates an isolated workspace for the user. The store selector in Casibase automatically locks to their assigned store, and they cannot add, delete, or rename stores. All their API interactions are restricted to their assigned store's data. Users without a Homepage value (or with a value that doesn't match any store) retain full multi-store access.

To bind a user to a store, edit their profile in Casdoor and enter the exact store name in the Homepage field. The binding activates on their next login. For more details about store isolation, see the [Store Configuration](/docs/stores/store-configuration) documentation.

## Billing Integration

Casibase integrates with Casdoor's transaction system for AI usage billing. When users interact with AI models, transaction records are automatically created in Casdoor to track token consumption and costs. This enables centralized billing management across all your applications. For details on how transactions work, see the [Billing & Usage](/docs/billing/overview) section.
