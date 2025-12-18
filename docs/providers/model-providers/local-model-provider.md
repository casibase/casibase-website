---
title: Local Model Provider
description: Configure local and custom model providers with OpenAI-compatible APIs
keywords: [Casibase, Local Model, Custom Model, OpenAI API, LLM, Self-hosted]
authors: [casibase]
---

The Local model provider in Casibase enables you to connect to self-hosted models or any custom provider that implements an OpenAI Chat Completion-style interface. This gives you maximum flexibility to use models not directly supported by Casibase while maintaining full control over your infrastructure and data.

## When to Use Local Provider

The Local provider is ideal in two scenarios:

**Custom Provider Integration**: When you need to connect to a model provider that isn't available in Casibase's Type dropdown, but exposes an OpenAI-compatible API endpoint. Many modern LLM services implement this standard interface for compatibility.

**Self-hosted Models**: When running your own model instances locally or in your private infrastructure. This includes popular frameworks like vLLM, Ollama, LocalAI, LM Studio, or any custom deployment that supports the OpenAI Chat Completion format.

Using the Local provider ensures your data never leaves your infrastructure, which is valuable for sensitive workloads, regulatory compliance, or development environments.

## Configuration

### Required Fields

When adding a Local model provider, configure these essential fields:

**Category**: Set to `Model` to indicate this is a model provider rather than embedding or other service types.

**Type**: Select `Local` from the dropdown.

**Sub type**: This field is automatically set to `custom-model` and cannot be changed. It identifies the provider as a custom implementation.

**Compatible provider**: Enter the actual provider name or model type you're connecting to. This is a free-text field where you can specify identifiers like `ollama`, `vllm`, `llama-cpp`, or your custom service name. This helps you identify the provider in logs and UI.

**Provider URL**: The HTTP(S) endpoint where your model service is running. This is the base URL that Casibase will use to make requests. For example:

- `http://localhost:11434/v1` for Ollama
- `http://192.168.1.100:8000/v1` for vLLM
- `https://my-model-service.company.com/api/v1` for a custom deployment

The endpoint should implement the `/chat/completions` path that accepts OpenAI format requests.

**API key**: If your model service requires authentication, provide the API key or token here. Leave empty if your service doesn't require authentication (common for local deployments). The key is securely stored and sent in the Authorization header as `Bearer <key>`.

### Pricing Configuration

These fields help track usage costs when using paid services or for internal billing:

**Input price / 1k tokens**: Cost per 1,000 input tokens. Enter the numeric value (e.g., `0.001` for $0.001 per 1k tokens). Set to `0` for free models.

**Output price / 1k tokens**: Cost per 1,000 output tokens. Typically higher than input pricing for most models.

**Currency**: The currency for pricing, such as `USD`, `EUR`, or `CNY`. This is used for cost tracking and reporting.

## Configuration Example

Here's how you might configure a Local provider for different scenarios:

**Ollama running locally**:

- Compatible provider: `ollama`
- Provider URL: `http://localhost:11434/v1`
- API key: Leave empty
- Input/Output price: `0` (free)

**vLLM server in your datacenter**:

- Compatible provider: `vllm`
- Provider URL: `http://gpu-server.internal:8000/v1`
- API key: Your authentication token if required
- Input/Output price: Configure based on your internal cost model

**Third-party OpenAI-compatible service**:

- Compatible provider: The service name (e.g., `together`, `anyscale`)
- Provider URL: Service endpoint URL
- API key: Your service API key
- Input/Output price: According to the service pricing

## Using the Provider

After saving your Local model provider, you can use it just like any other provider in Casibase. Select it when creating chats, configuring stores for RAG, or any other feature that requires a model provider.

When the provider is in use, Casibase sends requests to your configured Provider URL using the OpenAI Chat Completion format. Your service should respond with compatible JSON responses.

## Troubleshooting

**Connection refused**: Verify the Provider URL is correct and the service is running. Check firewalls and network connectivity.

**Authentication errors**: Ensure the API key is correct if your service requires authentication. Some services use different authentication methods - verify your service supports Bearer token authentication.

**Unexpected responses**: Confirm your service implements the OpenAI Chat Completion API format correctly. Check the service logs for details about request/response formats.

**Model not found**: If the service returns model not found errors, verify your model is loaded and available in your deployment. Some services require explicit model loading or configuration.
