---
title: Add a Store
description: Learn how to add a store to your Casibase knowledge base system.
keywords: [Casibase, Add a Store, Data Storage, Knowledge Base]
authors: [kv-chiu, IsAurora6]
---

We have added a storage provider, a model provider, and an embedding provider. Now we need to configure a store to use these providers.

:::caution

This guide assumes that you have already deployed a Casibase knowledge base system. If you haven't done, please refer to the [Deploy Casdoor and Casibase](../../deployment/deploy-casdoor-and-casibase.md) tutorial.

Besides, this guide assumes that you have already added a storage provider, a model provider, and an embedding provider. If you have not, please follow the [Add a Storage Provider](add-a-storage-provider.md), [Add a AI Model Provider](add-a-model-provider.md), and [Add an Embedding Provider](add-an-embedding-provider.md) guides.

:::

### Step 1: Add a New Store

Stores are used to integrate storage, model, and embedding providers into Casibase. You can add them by following these steps:

Click the `Stores` button on the home page and then click the `Add` button to add a store. You'll be redirected to the store edit page.

![Casibase-stores-add](/img/walkthrough-guides/casibase-stores-add.png)

### Step 2: Fill in Store Details

Select the storage provider, model provider, and embedding provider you added before.

Fill in the store details and click the `Save & Exit` button. If you change your mind, click **Cancel** to discard the new store.

![Casibase-stores-select](/img/walkthrough-guides/casibase-stores-select.png)

Click the `Save & Exit` button and return to the stores list page:

![Casibase-stores-view](/img/walkthrough-guides/casibase-stores-view.png)

Now, you can use the store to store knowledge base data, convert text to vectors, and chat with the chatbot.

In the next section, we will learn how to chat with the chatbot in Casibase.

## Support Multi-store

The multi-store mode provides users with different models, suggestions, and more within each distinct store.

### Step 1: Enable Multi-store

First, you should enable multi-store mode in the built-in store.

Click the `Stores` button on the home page and then click the `store-built-in` button to enter the store-built-in store.

![Casibase-stores-form-builtIn](/img/walkthrough-guides/casibase-stores-form-builtIn.png)

Scroll down and find the `Can Select Store`field, tick it.

![Casibase-stores-multi-store-enable](/img/walkthrough-guides/casibase-stores-multi-store-enable.png)

### Step 2: Add Usable Stores

The multi-store mode only provides usable stores. To make a store usable, you need to configure its storage provider, model provider, and embedding provider.

### Step 3: Select For Conversation

Casibase provides a very convenient method for selecting a store.

![Casibase-stores-multi-store-choose](/img/walkthrough-guides/casibase-stores-multi-store-choose.png)

Just hover your mouse over "New Chat" and then you can select the Store you wish to use from the list that appears below.

If you click the "New Chat" button, the system will assign you a default Store.
