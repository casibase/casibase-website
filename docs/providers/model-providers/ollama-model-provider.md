---
title: Ollama Model Provider
description: Run local AI models with Ollama
keywords: [Casibase, Ollama, Local Model, LLM, Self-hosted, Open Source]
authors: [casibase]
---

Ollama is a lightweight framework for running large language models locally on your own machine. The Ollama provider in Casibase allows you to connect to Ollama instances and use models running on your local infrastructure without requiring API keys or external services.

## When to Use Ollama Provider

Ollama is ideal when you want to run AI models locally with minimal setup. It handles model downloads, updates, and serving automatically, making it one of the easiest ways to get started with local models.

**Privacy and Data Control**:

All processing happens on your local machine or private network. No data is sent to external services, making it suitable for sensitive workloads or environments with strict data governance requirements.

**Cost-Effective Experimentation**:

Run powerful open-source models without paying per-token API fees. Perfect for development, testing, or high-volume use cases where API costs would be prohibitive.

**Offline Operation**:

Once models are downloaded, Ollama works completely offline, making it suitable for air-gapped environments or situations with unreliable internet connectivity.

## Prerequisites

Before configuring Ollama in Casibase, you need to have Ollama installed and running. Download it from [ollama.com](https://ollama.com) and follow the installation instructions for your operating system.

Once installed, pull the models you want to use:

```bash
ollama pull llama3.2
ollama pull qwen2.5
ollama pull deepseek-r1
```

Start the Ollama server (it usually starts automatically on installation):

```bash
ollama serve
```

By default, Ollama runs on `http://localhost:11434`.

## Configuration

### Required Fields

**Category**: Set to `Model` for language model providers or `Embedding` for embedding models.

**Type**: Select `Ollama` from the dropdown.

**Sub type**: Choose the specific model you've pulled with Ollama (e.g., `llama3.2`, `qwen2.5`, `mistral`, `deepseek-r1`). This should match the model name used when you ran `ollama pull`.

**Provider URL**: The endpoint where Ollama is running. Common configurations:

- `http://localhost:11434` for local installation
- `http://192.168.1.100:11434` for Ollama on another machine in your network
- Custom URLs if you've configured Ollama on a different port

Note that Ollama doesn't require an API key or client secret, so these fields are automatically hidden in the configuration interface.

### Pricing Configuration

Since Ollama runs locally, there are no per-token costs:

**Input price / 1k tokens**: Set to `0`

**Output price / 1k tokens**: Set to `0`

**Currency**: Can be left as default or set to your preferred currency for consistency

## Supported Models

Ollama supports a wide range of open-source models. Popular options include:

- **Llama family**: llama3.2, llama3.1, llama2
- **Qwen**: qwen2.5, qwen2.5-coder
- **DeepSeek**: deepseek-r1, deepseek-coder
- **Mistral**: mistral, mixtral
- **Gemma**: gemma2, gemma
- **Phi**: phi3, phi3.5

Visit the [Ollama library](https://ollama.com/library) for a complete list of available models.

## Using the Provider

After configuring your Ollama provider in Casibase, select it when creating chats or configuring stores for RAG operations. The experience is identical to using cloud-based providers, but all processing happens locally.

When making requests, Casibase communicates with your Ollama instance using its native API format, which is compatible with the OpenAI API structure.

## Troubleshooting

**Connection refused**: Verify Ollama is running with `ollama list` in your terminal. If not running, start it with `ollama serve`.

**Model not found**: Ensure you've pulled the model with `ollama pull <model-name>` and that the Sub type in Casibase matches exactly.

**Slow responses**: Local models require adequate hardware. Check your system resources (CPU, RAM, GPU). Some larger models may need GPU acceleration for reasonable performance.

**Port conflicts**: If port 11434 is already in use, configure Ollama to use a different port and update the Provider URL in Casibase accordingly.
