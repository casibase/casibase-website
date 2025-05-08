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

Fill in the embedding provider details and click the `Save & Exit` button.

![Casibase-providers-add](/img/walkthrough-guides/casibase-text-to-speech-form.png)

:::tip

Casibase currently supports the following Text-to-Speech provider:

- [Alibaba Cloud](https://www.alibabacloud.com/product/intelligent-speech-interaction)
  - cosyvoice-v1 (with multiple voice options)

:::
#### Testing Your Text-to-Speech Provider
You can test your TTS provider by clicking the `Read it out` button. This will allow you to enter text and hear the synthesized speech output.

![Casibase-providers-add](/img/walkthrough-guides/casibase-text-to-speech-test.png)

This testing feature allows you to verify your TTS configuration before implementing it in your applications, ensuring the voice quality and settings meet your requirements.


#### Voice Options for Alibaba Cloud

When using Alibaba Cloud's `cosyvoice-v1`, you can choose from various voice options:

- longwan
- longcheng
- ......

### Using Text-to-Speech in Stores

After adding a Text-to-Speech provider, you can select this provider in your store settings and choose whether to enable TTS streaming.

![Casibase-providers-add](/img/walkthrough-guides/casibase-text-to-speech-stream-mode.png)

Now, your store can convert text responses to speech, providing a more interactive experience for users.
