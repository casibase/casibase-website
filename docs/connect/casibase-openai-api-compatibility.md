---
title: Using Casibase OpenAI API Compatible Interface
description: Learn how to connect external chat UIs to Casibase using OpenAI API compatibility.
keywords: [Casibase, OpenAI API, External UI, Integration]
authors: [dark-Qy]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of connecting external chat UIs to Casibase using its OpenAI API compatibility feature.

## Introduction

Casibase now supports integration with external chat UIs through OpenAI API compatibility. This feature allows you to use popular open-source chat interfaces with Casibase's backend, giving you more flexibility in how you interact with your knowledge base system.

If you're looking to use your preferred chat UI with Casibase, this guide will walk you through the simple setup process.

### Step 1: Set Up Casibase with a Model Provider

Before connecting an external UI, ensure you have Casibase properly set up with a model provider. If you haven't done this yet, please refer to the [Add an AI Model Provider](../basic/beginner-guide/add-a-model-provider.md) tutorial.

### Step 2: Get Your OpenAI-compatible API Key

When you create a model provider in Casibase, an API key is automatically generated. This key allows external applications to communicate with Casibase using the OpenAI API format.

#### Step 2.1: Access Your API Key

Navigate to the `Providers` section and select your model provider. Only administrators can view and modify API keys.

![Casibase-provider-api-key](/img/walkthrough-guides/casibase-provider-api-key.png)

:::tip
If the API key field is empty, Casibase will automatically generate a new key when you save the provider.
:::

### Step 3: Configure Your External Chat UI

Once you have your API key, you can configure your external chat UI to connect to Casibase.

#### Step 3.1: Configure with chatgpt-web

For this example, we'll use [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web), a popular open-source ChatGPT interface.

1. Locate the `service/.env` file in your chatgpt-web installation
2. Modify the following variables:
    - `OPENAI_API_KEY`: Set this to your Casibase-generated API key
    - `OPENAI_API_BASE_URL`: Set this to `http://your-casibase-backend:port/api`

```env
# Example configuration
OPENAI_API_KEY=sk-UflKsbiYjzBvjeUFJbDpxuKg
OPENAI_API_BASE_URL=http://localhost:14000/api
```

Make sure your Casibase backend is accessible from the machine running your chat UI. Check firewall settings if you encounter connection issues.

### Step 4: Test Your Integration

Start your chat UI application and test the connection. You should now be able to interact with Casibase through your preferred interface. If everything is set up correctly, you should see responses from Casibase in your chat UI.
![Casibase-provider-api-key](/img/walkthrough-guides/casibase-openai-compatibility-chatgpt-web.png)

## Compatible Chat UIs

Casibase's OpenAI API compatibility has been tested with these popular chat interfaces:

- [chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web)

Other chat UIs that use the standard OpenAI API format should also work with Casibase.
