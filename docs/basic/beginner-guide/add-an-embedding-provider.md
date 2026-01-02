---
title: Add an Embedding Provider
description: Explore how to integrate an embedding provider with Casibase.
keywords: [Casibase, Embedding Provider, Integration]
authors: [kv-chiu, IsAurora6]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating an embedding provider with Casibase, our powerful knowledge base system.

## Introduction

Embedding is a technique used to represent words and documents as vectors. Embedding providers allow you to analyze and process data within your knowledge base system, making it more intelligent and efficient.

Refer to the [Core Concepts](../core-concepts) section of our previous documentation for more information about embedding.

In Casibase, you can add an embedding provider by following these steps:

### Step 1: Deploy Casdoor and Casibase

Before you can add an embedding model provider, make sure you have Casdoor and Casibase deployed. If you haven't done, please refer to the [Deploy Casdoor and Casibase](../../deployment/deploy-casdoor-and-casibase.md) tutorial.

### Step 2: Add a New Embedding Provider

Embedding providers are used to integrate embedding into Casibase. You can add them by following these steps:

Click the `Providers` button on the home page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Step 2.1: Add an Embedding Provider

Click the `Add` button to add an embedding provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Step 2.2: Fill in Embedding Provider Details

Fill in the embedding provider details and click the `Save & Exit` button.

![Casibase-embedding](/img/walkthrough-guides/casibase-embedding-form.png)

:::tip

Same as the [Model Provider](./add-a-model-provider) section, Casibase supports many embedding providers, including:

- [OpenAI](https://openai.com/)
  - AdaSimilarity
  - DavinciSimilarity
  - AdaEmbedding2
  - ......
- [Hugging Face](https://huggingface.co/)
  - sentence-transformers/paraphrase-MiniLM-L6-v2
  - ......

:::

:::info

The API key field is masked by default to protect your credentials. Click the visibility icon if you need to reveal the key during configuration.

:::

Return providers list page:

![Casibase-embedding-view](/img/walkthrough-guides/casibase-embedding-view.png)

Now, you can use the embedding provider to convert text to vectors.

After adding an embedding provider, you can use it to retrieve similar documents in Casibase. For more information, please refer to the [Core Concepts](../core-concepts) section of our previous documentation.

In the next chapter, we will learn how to integrate storage providers, model providers, and embedding providers with Casibase.
