---
title: Embedding Providers
keywords: [Casibase, Embedding Provider, Integration]
authors: [IsAurora6]
---

## Introduction

Embedding is a technique used to represent words and documents as vectors. Embedding providers allow you to analyze and process data within your knowledge base system, making it more intelligent and efficient.

Refer to the [Core Concepts](../basic/core-concepts) section of our previous documentation for more information about embedding.

In Casibase, you can add an embedding provider by following these steps:

### Add a New Embedding Provider

Embedding providers are used to integrate embedding into Casibase. You can add them by following these steps:

Click the `Providers` button on the page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Add an Embedding Provider

Click the `Add` button to add an embedding provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Fill in Embedding Provider Details

Fill in the embedding provider details and click the `Save & Exit` button.

![Casibase-embedding](/img/walkthrough-guides/casibase-embedding-form.png)

:::tip

Casibase supports many embedding providers, including:

- [OpenAI](https://openai.com/)
  - AdaSimilarity
  - DavinciSimilarity
  - AdaEmbedding2
  - ......
- [Hugging Face](https://huggingface.co/)
  - sentence-transformers/paraphrase-MiniLM-L6-v2
  - ......

:::

Return providers list page:

![Casibase-embedding-view](/img/walkthrough-guides/casibase-embedding-view.png)

Now, you can use the embedding provider to convert text to vectors.

After adding an embedding provider, you can use it to retrieve similar documents in Casibase. For more information, please refer to the [Core Concepts](../basic/core-concepts) section of our previous documentation.
