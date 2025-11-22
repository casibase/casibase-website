---
title: Store Configuration
keywords: [Casibase, Store, Data Storage, Knowledge Base]
authors: [kv-chiu]
---

After adding storage providers, model providers and embedding providers, we can configure the stores

## 1.Add a New Store

Stores are used to integrate storage, model, and embedding providers into Casibase. You can add them by following these steps:

Click the `Stores` button on the home page and then click the `Add` button to add a store.

![Casibase-stores-add](/img/walkthrough-guides/casibase-stores-add.png)

### Fill in Store Details

Fill in the store details and click the `Save & Exit` button.

![Casibase-stores-form-preview](/img/walkthrough-guides/casibase-stores-form-preview.png)

Select the storage provider, model provider, embedding provider, text-to-speech provider and speech-to-text provider you added before.

![Casibase-stores-select](/img/walkthrough-guides/casibase-stores-select.png)

Click the `Save & Exit` button and return to the stores list page:

![Casibase-stores-view](/img/walkthrough-guides/casibase-stores-view.png)

The store list shows many columns for AI configurations like model providers, embedding providers, and voice settings. If you're mainly using stores for file management, toggle "Hide chat" at the top of the list to simplify the view and show only the essentials: name, storage provider, and status.

Now, you can use the store to store knowledge base data, convert text to vectors, and chat with the chatbot.

When configuring your store, consider adding example questions that appear when users start a new chat. These suggestions help users discover what they can ask and get them started quickly. You can also configure which other stores this one should search through using the **Vector stores** field - useful when you want one store to pull knowledge from multiple sources.

### Vector Stores

Sometimes you need one store to search through knowledge from multiple other stores. For example, you might have separate stores for different topics or departments, but want a main store that can answer questions by searching across all of them. The **Vector stores** field makes this possible by letting a store use vectors from other stores in addition to its own.

To configure this, navigate to the store edit page and find the **Vector stores** field. You can select one or more stores from the dropdown list. When you chat with this store, it will automatically search through both its own vectors and the vectors from all the stores you selected. This way, you can create a centralized knowledge hub without duplicating content across multiple stores.

:::tip

The store always uses its own vectors automatically. You only need to specify additional stores in the **Vector stores** field when you want to search across multiple knowledge bases.

:::

In the next section, we will learn how to chat with the chatbot in Casibase.

## 2.Store Isolation for Users

Casibase allows administrators to restrict users to specific stores by setting the user's Homepage field in Casdoor. When a user's Homepage matches a store name, that user becomes bound to that store and can only access data within it.

This feature is particularly useful for multi-tenant environments where different teams or departments need isolated access to their own knowledge bases. A bound user experiences the system as if they've permanently selected their assigned store - they cannot switch to other stores or see data from them.

### How Store Isolation Works

Store isolation is configured through Casdoor's user management. When you set a user's Homepage field to match a store name (for example, "marketing-store"), the following restrictions automatically apply:

**Data Access**: The user can only view and interact with data from their assigned store. API calls attempting to access other stores will be rejected with an error message.

**Store Selector**: In the top bar, the store selector is automatically set to the user's assigned store and becomes disabled - they cannot change it.

**Store Management**: Bound users cannot perform administrative actions on stores. They cannot add new stores, delete existing stores, or rename their assigned store. This prevents them from accidentally breaking their isolation.

If the Homepage field is empty or doesn't match any existing store, the user has full access to all stores as normal. This makes it easy to maintain both restricted and unrestricted users in the same system.

### Setting Up Store Isolation

To bind a user to a store, open the user's profile in Casdoor and set their Homepage field to the exact name of the target store. The binding takes effect immediately upon the user's next login or page refresh. Make sure the store name matches exactly - case matters.

When managing users, you can assign them to different stores by changing their Homepage field at any time. This flexibility allows you to reorganize team access without modifying the stores themselves.

## 3.Support Multi-store

The multi-store mode provides users with different models, suggestions, and more within each distinct store.

### Enable Multi-store

First, you should enable multi-store mode in the built-in store.

Click the `Stores` button on the home page and then click the `store-built-in` button to enter the store-built-in store.

![Casibase-stores-form-builtIn](/img/walkthrough-guides/casibase-stores-form-builtIn.png)

Scroll down and find the `Can Select Store`field, tick it.

![Casibase-stores-multi-store-enable](/img/walkthrough-guides/casibase-stores-multi-store-enable.png)

### Add Usable Stores

The multi-store mode only provides usable stores. To make a store usable, you need to configure its storage provider, model provider, and embedding provider.

### Select For Conversation

Casibase provides a very convenient method for selecting a store.

![Casibase-stores-multi-store-choose](/img/walkthrough-guides/casibase-stores-multi-store-choose.png)

Just hover your mouse over "New Chat" and then you can select the Store you wish to use from the list that appears below.

If you click the "New Chat" button, the system will assign you a default Store.
