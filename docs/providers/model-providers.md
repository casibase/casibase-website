---
title: Model Providers
keywords: [Casibase, Model Provider]
authors: [IsAurora6]
---

## Introduction

Model providers connect AI capabilities to your Casibase instance. They power everything from chatbots to document analysis by integrating large language models (LLMs) directly into your knowledge base workflows.

### Add a Model Provider

Adding a model provider takes just a few clicks:

Click the `Providers` button on the home page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

Click the `Add` button to add a model provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Fill in Model Provider Details

Fill in the model provider details and click the `Save & Exit` button.

![Casibase-model-openai](/img/walkthrough-guides/casibase-model-openai.png)

:::tip Supported Providers

**[OpenAI](https://openai.com/)** — Access GPT-3.5-turbo, GPT-4, and o1 models. The o1 series shows its reasoning steps in the chat interface, while all models support web search to pull in real-time information.

**[Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/)** — Run OpenAI models through Azure's infrastructure using the official SDK.

**[Alibaba Cloud](https://www.alibabacloud.com/)** — Connect to Qwen models and DeepSeek's latest releases (v3, v3.1, v3.2, R1). Web search works here too, with results appearing inline in chat responses.

**[DeepSeek](https://www.deepseek.com/)** — Direct access to DeepSeek's v3.x series and R1 models for reasoning-focused tasks.

**[Hugging Face](https://huggingface.co/)** — Connect to open-source models like Llama-2, ChatGLM2, Baichuan2, and thousands of others.

**[OpenRouter](https://openrouter.ai/)** — One API to access Claude, PaLM, GPT-4, and other models from different providers.

:::

:::caution Configuration Notes

When adding a provider, you'll need to set:

- **Category**: Choose `Model` for language models or `Embedding` for text vectorization
- **Type**: Select the specific provider (OpenAI, Hugging Face, etc.)
- **SecretKey**: Your API key or access token from the provider

**Example: Adding OpenAI**

![Casibase-model-select](/img/walkthrough-guides/casibase-model-select.png)

:::

:::caution Streaming Support

Not all models support streaming output (showing responses as they're generated). GPT-3.5-turbo and most modern models do, but if you're using older or custom models, check with your provider.

:::

Once configured, your model provider powers Casibase's chat interface, document Q&A, and other AI features. You can switch between providers anytime to compare results or optimize for cost and performance.

![Casibase-providers-view](/img/walkthrough-guides/casibase-model-view.png)
