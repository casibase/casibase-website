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

Now, you can use the store to store knowledge base data, convert text to vectors, and chat with the chatbot.

### Vector Stores

The **Vector stores** field allows a store to use vectors from other stores in addition to its own vectors. This feature enables you to combine knowledge from multiple stores when searching for relevant information during conversations.

**Use Cases:**

- **Cross-store Knowledge Retrieval**: When one store needs to access knowledge base data from multiple other stores
- **Centralized Knowledge Access**: Create a main store that can search across all your specialized knowledge bases
- **Knowledge Sharing**: Allow different stores to share vector data without duplicating content

**How to Configure:**

1. Navigate to the store edit page for the store you want to configure
2. Find the **Vector stores** field
3. Select one or more stores from the dropdown list (you can select multiple stores)
4. Save your changes

When you chat with this store, it will search for relevant information from:

- Its own vectors
- Vectors from all the stores you selected in the **Vector stores** field

:::tip

The store will automatically use its own vectors. You only need to add additional stores in the **Vector stores** field if you want to search across multiple knowledge bases.

:::

In the next section, we will learn how to chat with the chatbot in Casibase.

## 2.Support Multi-store

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
