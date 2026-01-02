---
title: Chats with AI
description: Implement AI chat functionality in your Casibase knowledge base system.
keywords: [Casibase, AI Chat, Chatbot Implementation, Knowledge]
authors: [kv-chiu]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of implementing AI chat functionality in your Casibase knowledge base system.

## Introduction

In previous sections, we have deployed Casdoor and Casibase, integrated a storage provider, a model provider, and a embedding provider with Casibase, and added a store to use these providers.

Refer to the [Add a Store](add-a-store.md) section of our previous documentation for more information about stores.

Now, let's implement AI chat functionality in Casibase.

### Step 1: Access the Chat Interface

When you log in to Casibase, you'll land directly on the chat interface. This gives you immediate access to start conversations with AI. If you need to create a new chat session, click the `New Chat` button.

![Casibase-chats-add](/img/walkthrough-guides/casibase-chats-add.png)

### Step 2: Send a Message

Write a message and click the `Send` button to send it.

![Casibase-chats-davinci003](/img/walkthrough-guides/casibase-chats-davinci003.png)

### Step 3: Knowledge Base Chat

Additionally, you can chat with the chatbot in the knowledge base.

There are some requirements for the knowledge base chat:

- The knowledge base must have a store.
- The store must have a model provider.
- The store must have an embedding provider.
- The store must have a storage provider.
- The storage provider must have a readable document (e.g. a markdown file, docx file and pdf file).

Once you have met these requirements, you can return to the `Stores` page and click the `Refresh Vectors` button to embedding the knowledge base data.

![Casibase-stores-refresh-button](/img/walkthrough-guides/casibase-stores-refresh-button.png)

The button will be disabled when the embedding is in progress.

After the embedding is complete, you can click the `Vectors` button in the navigation bar to view the vectors.

Result:

![Casibase-vectors-refresh-result](/img/walkthrough-guides/casibase-vectors-refresh-result.png)

Let's **chat with the chatbot in the knowledge base**.

![Casibase-chats-get-answer](/img/walkthrough-guides/casibase-chats-get-answer.png)

Compare the results with **non-knowledge base chat**:

![Casibase-chats-answer-wrong-casdoor](/img/walkthrough-guides/casibase-chats-answer-wrong-casdoor.png)

:::caution

The embedding rate is related to two factors:

- The documents in the knowledge base:
  - Number of documents: The more documents, the longer the embedding time.
  - Size of documents: The larger the document size, the longer the embedding time.
- The embedding provider:
  - API rate limit: The more API rate limit, the faster the embedding speed.
  - API concurrency: The more API concurrency, the faster the embedding speed.

For example, if you use the [OpenAI API](https://platform.openai.com/docs/api-reference) as the embedding provider, the embedding rate is related to the [OpenAI API](https://platform.openai.com/docs/api-reference) rate limit and concurrency.

:::

## Conclusion

In this guide, we have learned how to implement AI chat functionality in Casibase.

Now, you can chat with the chatbot in Casibase. Enjoy it!

More information about Casibase can be found in the [Core Concepts](../core-concepts) section of our documentation.
