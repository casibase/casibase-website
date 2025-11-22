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

### Example Questions

Configure example questions to help users get started with your store. These suggested queries appear when users open a new chat, providing helpful starting points for conversation. Add questions that demonstrate the store's capabilities or guide users to frequently needed information.

### Vector Stores

Sometimes you need one store to search through knowledge from multiple other stores. For example, you might have separate stores for different topics or departments, but want a main store that can answer questions by searching across all of them. The **Vector stores** field makes this possible by letting a store use vectors from other stores in addition to its own.

To configure this, navigate to the store edit page and find the **Vector stores** field. You can select one or more stores from the dropdown list. When you chat with this store, it will automatically search through both its own vectors and the vectors from all the stores you selected. This way, you can create a centralized knowledge hub without duplicating content across multiple stores.

:::tip

The store always uses its own vectors automatically. You only need to specify additional stores in the **Vector stores** field when you want to search across multiple knowledge bases.

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

## 3.Simplified Store View

The store list page displays many AI configuration columns that may not be needed when managing stores primarily for file storage. Use the "Hide chat" toggle in the store list to show only essential columns: name, display name, is default, storage provider, state, and actions. This simplified view helps focus on file tree workflows without clutter from model, embedding, and voice provider settings. Your preference is saved automatically and persists across sessions.
