---
title: Model Providers
keywords: [Casibase, Model Provider]
authors: [IsAurora6]
---

## Introduction

Adding a model provider to Casibase enables you to enhance its functionality by incorporating machine learning models and AI capabilities. Model providers allow you to analyze and process data within your knowledge base system, making it more intelligent and efficient.

### Add a Model Provider

Model providers are used to integrate LLM into Casibase. You can add them by following these steps:

Click the `Providers` button on the home page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

Click the `Add` button to add a model provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Fill in Model Provider Details

Fill in the model provider details and click the `Save & Exit` button.

![Casibase-model-openai](/img/walkthrough-guides/casibase-model-openai.png)

:::tip

Casibase supports many model providers, including:

- [Hugging Face](https://huggingface.co/)
  - meta-llama/Llama-2-7b
  - THUDM/chatglm2-6b
  - baichuan-inc/Baichuan2-13B-chat
  - gpt2
  - ......
- [OpenRouter](https://openrouter.ai/)
  - anthropic/claude-2
  - palm-2-chat-bison
  - palm-2-codechat-bison
  - openai/gpt-4
  - ......
- [OpenAI](https://openai.com/)
  - text-davinci-003
  - gpt-3.5-turbo
  - gpt-4
  - ......
- [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
  - Uses the official OpenAI SDK for enhanced compatibility
  - Supports all Azure OpenAI models and features
- [Alibaba Cloud](https://www.alibabacloud.com/)
  - Integrated with official SDK
  - Supports web search functionality for real-time information retrieval
  - Search results are displayed inline with AI responses in the chat interface

:::

:::caution

- Category: The first-level category of the model provider. For example, `Model` and `Embedding`.
- Type: The second-level category of the model provider. For example, `OpenAI` and `Hugging Face`.
- SecretKey: The secret key of your OpenAI account.

**Example**

##### Add an OpenAI model provider

![Casibase-model-select](/img/walkthrough-guides/casibase-model-select.png)

:::

:::caution

Some models don't support **streaming-output**. Known models that support streaming-output include:

- `gpt-3.5-turbo-0613`

:::

After adding a model provider, you can use it to analyze and process data in Casibase using chatbots, question answering, and other AI capabilities.

Return to the model provider list page:

![Casibase-providers-view](/img/walkthrough-guides/casibase-model-view.png)

Now that you've added a model provider, you can use it to analyze and process data in Casibase using chatbots, question answering, and other AI capabilities.
