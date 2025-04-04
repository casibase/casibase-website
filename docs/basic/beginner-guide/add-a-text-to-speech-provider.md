---
title: Add a Text-to-Speech Model Provider
description: Learn how to add a text-to-speech provider to enhance Casibase functionality.
keywords: [Casibase, Text-to-Speech Provider, TTS, Integration, Voice Synthesis]
authors: [dark-Qy]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a text-to-speech provider with Casibase, our powerful knowledge base system.



## Introduction

Text-to-Speech (TTS) is a technology that converts text into spoken voice output. TTS providers allow your Casibase applications to communicate with users through synthesized speech, enhancing the user experience and accessibility of your knowledge base system.

In Casibase, integrating a TTS provider enables your AI applications to verbally respond to queries, creating more interactive and engaging user experiences.

### Add a New Text-to-Speech Provider

Text-to-Speech providers are used to integrate voice synthesis capabilities into Casibase. You can add them by following these steps:

Click the `Providers` button on the page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Add a Text-to-Speech Provider

Click the `Add` button to add a Text-to-Speech provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Fill in Text-to-Speech Provider Details

Fill in the Text-to-Speech provider details:

1. Select `Text-to-Speech` as the category
2. Choose a provider type (currently only Alibaba Cloud is supported)
3. Select the appropriate subtype (e.g., `cosyvoice-v1` for Alibaba Cloud)
4. Configure authentication details
5. Click the `Save & Exit` button



:::tip

Casibase currently supports the following Text-to-Speech provider:

- [Alibaba Cloud](https://www.alibabacloud.com/product/intelligent-speech-interaction)
    - cosyvoice-v1 (with multiple voice options)

:::

#### Voice Options for Alibaba Cloud

When using Alibaba Cloud's `cosyvoice-v1`, you can choose from various voice options:

- longwan
- longcheng
- longhua
- longxiaochun
- longxiaoxia
- longxiaocheng
- longxiaobai
- longlaotie
- longshu
- longjing
- longmiao
- longyue
- longyuan
- longfei
- longjielidou
- longshuo
- longtong
- longxiang
- loongstella
- loongbella

### Using Text-to-Speech in Stores

After adding a Text-to-Speech provider, you can configure it in your store settings:

1. Navigate to the store edit page
2. Select your configured TTS provider from the `Text-to-Speech provider` dropdown
3. Enable TTS streaming if needed with the `Enable TTS streaming` toggle
4. Save your store configuration

Now, your store can convert text responses to speech, providing a more interactive experience for users.

For more information about configuring stores, please refer to the [Store Management](../basic/stores) section of our documentation.