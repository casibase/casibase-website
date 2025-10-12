---
title: Add a Bot Provider
description: Learn how to add a bot provider to integrate enterprise chat platforms with Casibase.
keywords: [Casibase, Bot Provider, WeCom, Integration, Enterprise Chat]
authors: [IsAurora6]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a bot provider with Casibase, enabling AI-powered chatbots on enterprise messaging platforms.

## Introduction

Adding a bot provider to Casibase allows you to deploy AI-powered chatbots directly on enterprise messaging platforms like WeCom (WeChat Work). This means your team can interact with your knowledge base without leaving their familiar chat environment.

Bot providers bridge the gap between your Casibase knowledge base and your team's daily communication tools, making AI assistance more accessible and convenient.

### Step 1: Deploy Casdoor and Casibase

Before you can add a bot provider, make sure you have Casdoor and Casibase deployed. If you haven't done so, please refer to the [Deploy Casdoor and Casibase](../../deployment/deploy-casdoor-and-casibase.md) tutorial.

### Step 2: Configure Your Knowledge Base

Ensure you have at least one store configured with:

- A model provider (e.g., OpenAI, Claude)
- An embedding provider
- Knowledge base content

If you need help setting these up, refer to:

- [Add a Model Provider](./add-a-model-provider.md)
- [Add an Embedding Provider](./add-an-embedding-provider.md)
- [Add a Store](./add-a-store.md)

### Step 3: Obtain Bot Credentials from Your Platform

Before configuring the bot in Casibase, you need to obtain credentials from your enterprise chat platform.

#### For WeCom (WeChat Work)

1. Log in to your WeCom admin console
2. Navigate to Applications
3. Create or select your bot application
4. Note down the following information:
   - **Bot ID** (AgentId or similar identifier)
   - **Token** (callback verification token)
   - **EncodingAESKey** (message encryption key)

:::tip

Keep these credentials secure! You'll need them in the next step.

:::

### Step 4: Add a New Bot Provider

Click the `Providers` button on the Casibase home page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Step 4.1: Create a New Provider

Click the `Add` button to create a new provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Step 4.2: Configure Bot Provider Details

Fill in the bot provider configuration:

1. **Name**: Give your bot provider a descriptive name (e.g., "Company WeCom Bot")
2. **Display name**: A friendly display name for the provider
3. **Category**: Select "Bot" from the dropdown
4. **Type**: Choose your platform type (e.g., "Tencent" for WeCom)
5. **Sub type**: Select the specific bot type (e.g., "WeCom Bot")
6. **Bot ID**: Enter your bot's unique identifier (this goes in the "Client ID" field)
7. **Token**: Enter the verification token from your platform (this goes in the "Client Secret" field)
8. **AES Key**: Enter the encryption key (this goes in the "Region" field)

Click the `Save & Exit` button to save your configuration.

:::tip

**Field Mapping for WeCom Bot:**

- Client ID → Bot ID (AgentId)
- Client Secret → Token (callback verification token)
- Region → EncodingAESKey (AES encryption key)

:::

### Step 5: Configure Callback URL in Your Platform

After saving the bot provider, you need to configure the callback URL in your enterprise chat platform.

#### For WeCom

1. Copy the callback URL (it should look like):

   ```text
   https://your-casibase-domain.com/api/wecom-bot/callback/your-bot-id
   ```

2. In your WeCom admin console, navigate to your bot's settings

3. Find the "Callback URL" or "API URL" configuration section

4. Paste the Casibase callback URL

5. The platform will send a verification request to ensure the URL is valid

6. If configured correctly, the verification should succeed automatically

:::info

Make sure your Casibase instance is accessible from the internet and the callback URL uses HTTPS for security.

:::

### Step 6: Test Your Bot

Now it's time to test your bot!

1. Open your enterprise chat application (e.g., WeCom)
2. Find and start a conversation with your bot
3. Send a test message like "Hello" or "What can you help me with?"
4. The bot should respond based on your configured knowledge base

### Step 7: Monitor and Improve

After deploying your bot:

1. **Monitor Usage**: Check how often the bot is being used and what questions are being asked
2. **Update Knowledge Base**: Add more content to improve response quality
3. **Gather Feedback**: Ask users for feedback on bot responses
4. **Adjust Configuration**: Fine-tune your store settings and prompts based on usage patterns

## Understanding Bot Provider Types

### WeCom Bot

WeCom (WeChat Work) is Tencent's enterprise communication platform. The WeCom Bot provider enables:

- **Text Message Processing**: Handle text messages from users
- **Streaming Responses**: Progressive response delivery for better user experience
- **Secure Communication**: Encrypted message handling with signature verification
- **Knowledge Base Integration**: Access to your Casibase stores and AI models

## Troubleshooting

### Bot Not Responding

**Problem**: The bot doesn't respond to messages

**Solutions**:

- Verify the callback URL is correctly configured in your chat platform
- Check that all credentials (Bot ID, Token, AES Key) are entered correctly
- Ensure your Casibase instance is accessible from the internet
- Check the Casibase server logs for error messages

### URL Verification Failed

**Problem**: Platform rejects the callback URL during verification

**Solutions**:

- Confirm the Token and AES Key match exactly with the platform configuration
- Remove any extra spaces from the credentials
- Verify you're using the correct callback URL format
- Check that your Casibase instance is running and accessible

### Slow Responses

**Problem**: Bot takes too long to respond

**Solutions**:

- Check your model provider's performance and limits
- Ensure your knowledge base is properly vectorized
- Consider using a faster AI model
- Verify your network connectivity

### Incorrect or Irrelevant Responses

**Problem**: Bot gives unhelpful answers

**Solutions**:

- Review and improve your knowledge base content
- Adjust your store's prompt configuration
- Increase the knowledge count in your store settings
- Ensure your embedding provider is working correctly

## Best Practices

1. **Start Small**: Begin with a limited knowledge base and expand based on usage
2. **Clear Documentation**: Document what your bot can and cannot do for users
3. **Regular Updates**: Keep your knowledge base current and accurate
4. **Security First**: Never share bot credentials and use HTTPS for callbacks
5. **User Training**: Provide guidance to users on how to effectively interact with the bot
6. **Monitor Performance**: Regularly check bot response quality and response times
7. **Feedback Loop**: Implement a way for users to provide feedback on responses

## Next Steps

Now that you have a bot provider configured, you can:

- Add multiple bot providers for different teams or use cases
- Customize your store's prompts for better responses
- Expand your knowledge base with more content
- Explore advanced features like streaming responses
- Integrate with additional enterprise platforms as they become available

For more advanced configuration options, refer to the [Bot Providers](../../providers/bot-providers.md) documentation.
