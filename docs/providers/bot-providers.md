---
title: Bot Providers
description: Learn about Bot Providers in Casibase
keywords: [Casibase, Bot Provider, WeCom, Enterprise Chat]
authors: [IsAurora6]
---

Bot Providers enable Casibase to integrate with enterprise chat platforms and messaging services, allowing AI-powered chatbots to interact directly with users through these platforms. This integration brings AI knowledge base capabilities to where your team already communicates.

## Overview

Bot Providers allow you to deploy AI-powered chatbots on enterprise messaging platforms without requiring users to access a separate interface. The bot can answer questions, provide information from your knowledge base, and assist users directly within their familiar chat environment.

### Key Features

- **Seamless Integration**: Connect Casibase with popular enterprise chat platforms
- **Real-time Responses**: Provide instant AI-powered answers to user queries
- **Streaming Support**: Support for streaming responses to provide faster, more interactive experiences
- **Knowledge Base Access**: Leverage your existing Casibase stores and knowledge base
- **Secure Communication**: All communications are encrypted and authenticated

## Supported Platforms

### Tencent WeCom Bot

WeCom (WeChat Work) is Tencent's enterprise communication and office collaboration platform. The WeCom Bot provider allows you to create AI-powered bots that can interact with employees directly in WeCom.

#### Features

- **Text Message Support**: Process and respond to text messages from users
- **Streaming Responses**: Support for streaming mode to provide faster responses
- **Secure Callbacks**: Encrypted callback handling with signature verification
- **Message Encryption**: All messages are encrypted using AES encryption

#### Configuration Parameters

When setting up a WeCom Bot provider, you'll need the following information:

| Parameter | Description | Required |
|-----------|-------------|----------|
| **Bot ID** | The unique identifier for your WeCom bot (stored as Client ID) | Yes |
| **Token** | The verification token for callback URL authentication (stored as Client Secret) | Yes |
| **AES Key** | The encoding AES key for message encryption/decryption (stored as Region) | Yes |

#### How It Works

1. **URL Verification**: When you configure the callback URL in WeCom, the platform sends a verification request to ensure your endpoint is valid
2. **Message Reception**: User messages are sent to your Casibase instance via encrypted callbacks
3. **Message Processing**: Casibase decrypts the message, processes it using your configured store and AI model
4. **Response Generation**: The AI generates a response based on your knowledge base
5. **Response Delivery**: The response is encrypted and sent back to WeCom, which delivers it to the user

#### Streaming Response Support

The WeCom Bot provider supports streaming responses (added in optimization update), which provides:

- **Faster Initial Response**: Users see the bot is processing their request immediately
- **Better User Experience**: Progressive response display instead of waiting for the complete answer
- **Efficient Resource Usage**: Asynchronous message processing

## Setting Up a Bot Provider

### Prerequisites

Before configuring a Bot Provider:

1. Have a Casibase instance deployed and running
2. Have a configured Store with AI model and embedding providers
3. Have administrative access to your enterprise chat platform
4. Have the necessary credentials from the platform (Bot ID, Token, AES Key for WeCom)

### Configuration Steps

1. Navigate to the Providers section in Casibase admin interface
2. Click "Add" to create a new provider
3. Select "Bot" as the category
4. Choose your platform type (e.g., "Tencent" for WeCom)
5. Select the sub-type (e.g., "WeCom Bot")
6. Enter your bot credentials:
   - Bot ID (Client ID field)
   - Token (Client Secret field)
   - AES Key (Region field)
7. Save the configuration

### Callback URL Configuration

After creating the Bot Provider in Casibase, you need to configure the callback URL in your enterprise chat platform:

**For WeCom Bot:**

The callback URL format is:

```text
https://your-casibase-domain/api/wecom-bot/callback/{botId}
```

Replace `{botId}` with your Bot ID.

## Usage

Once configured, users can interact with the bot directly in their chat platform:

1. User sends a message to the bot
2. The bot processes the message through Casibase
3. AI generates a response based on the knowledge base
4. User receives the response in the chat

## Best Practices

1. **Store Configuration**: Ensure your default store is properly configured with appropriate AI models and knowledge base
2. **Security**: Keep your bot credentials secure and never expose them in client-side code
3. **Response Quality**: Regularly update your knowledge base to improve bot response quality
4. **Monitoring**: Monitor bot interactions and user feedback to identify areas for improvement
5. **Testing**: Test the bot thoroughly before deploying to production users

## Troubleshooting

### Bot Not Responding

- Verify the callback URL is correctly configured in your chat platform
- Check that the bot credentials (Bot ID, Token, AES Key) are correct
- Ensure your Casibase instance is accessible from the internet
- Check Casibase logs for error messages

### URL Verification Failed

- Confirm the Token and AES Key match exactly with what's configured in your chat platform
- Ensure there are no extra spaces or special characters in the credentials
- Verify the callback URL format is correct

### Message Decryption Errors

- Double-check the AES Key is entered correctly
- Ensure the encoding format matches what your platform expects
- Check that the message signature validation is passing

## API Reference

Bot providers expose specific API endpoints:

### WeCom Bot Endpoints

- `GET /api/wecom-bot/callback/:botId` - URL verification endpoint
- `POST /api/wecom-bot/callback/:botId` - Message handling endpoint

These endpoints handle the communication between WeCom and Casibase, including message encryption/decryption and response generation.
