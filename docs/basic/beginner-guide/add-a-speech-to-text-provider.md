---
title: Add a Speech-to-Text Provider
description: Learn how to add a speech-to-text provider to enhance Casibase functionality.
keywords: [Casibase, Speech-to-Text Provider, Voice Recognition]
authors: [dark-Qy]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a speech-to-text provider with Casibase, our powerful knowledge base system.

## Introduction

Speech-to-Text (STT) is a technology that converts spoken language into written text. STT providers allow your Casibase applications to understand and process spoken user input, enhancing the user experience and accessibility of your knowledge base system.

In Casibase, integrating an STT provider enables your AI applications to receive and process voice queries, creating more interactive and natural user interactions.

### Add a New Speech-to-Text Provider

Speech-to-Text providers are used to integrate voice recognition capabilities into Casibase. You can add them by following these steps:

Click the `Providers` button on the page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Add a Speech-to-Text Provider

Click the `Add` button to add a Speech-to-Text provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Fill in Speech-to-Text Provider Details

Fill in the speech-to-text provider details and click the `Save & Exit` button.

![Casibase-providers-add](/img/walkthrough-guides/casibase-speech-to-text-form.png)

### Using Voice Recognition

When you click the voice recognition button in your Casibase application, the following process occurs:

1. The browser will request permission to access your microphone
2. Once granted, the system will begin listening and automatically convert your speech to text
3. After you finish speaking, the recognized text will be automatically sent as a message

![Casibase-providers-add](/img/walkthrough-guides/casibase-speech-to-text-use.png)

This feature enables hands-free interaction with your Casibase applications, making them more accessible and convenient to use.

:::tip

Casibase currently supports the following Speech-to-Text provider:

- [Alibaba Cloud](https://www.alibabacloud.com/product/intelligent-speech-interaction)
  - paraformer-realtime-v1

:::
