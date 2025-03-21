---
title: Casibase + DeepSeek Integration Guide
author: Casibase Team
author_url: https://github.com/casibase
author_image_url: https://avatars.githubusercontent.com/casibase
tags: [Casibase]
---

# 	Casibase + DeepSeek Integration Guide: Building an Efficient AI Knowledge Base and Dialogue System

In today's digital age, there is a growing demand for efficient knowledge management and intelligent Q&A systems for businesses and individuals. With the rapid development of AI technology, people are looking for smarter and more efficient solutions to improve information processing, optimise workflow and enhance user experience.

Casibase, as an open source AI knowledge base and dialogue system, has become the preferred solution for many developers and enterprises due to its strong multi-model compatibility, enterprise-level feature support, and intuitive and friendly web interface. It not only can efficiently organise and retrieve knowledge, but also provides flexible interfaces for easy integration with various AI models to meet the needs of different scenarios.

Meanwhile, recently released advanced AI models such as **DeepSeek R1** have attracted a lot of attention in the developer community due to their excellent performance, optimised distillation technology and free open source. DeepSeek R1's powerful reasoning and efficient knowledge integration capabilities have enabled it to perform well in intelligent Q&A, code generation, text comprehension, and other tasks, making it an important member of the open source AI ecosystem.

In this article, we will discuss how to efficiently integrate Casibase with DeepSeek R1 to build an AI knowledge base and dialogue system with high performance, security, and powerful features. We will introduce the key steps from environment setup to real-world application, and analyse how to leverage the enterprise-grade features of Casibase and the power of DeepSeek R1 to achieve accurate and efficient intelligent Q&A and knowledge management.

## What is Casibase:

Casibase is an open source AI knowledge base and dialogue system that combines the latest RAG (Retrieval Augmented Generation) technology, enterprise-grade [Single sign-on](https://so.csdn.net/so/search?q=单点登录&spm=1001.2101.3001.7020) (SSO) functionality, and support for a wide range of mainstream AI models. As a LangChain-like system, Casibase aims to provide a powerful, flexible and easy-to-use knowledge management and intelligent dialogue platform for enterprises and developers.

Currently, Casibase supports language models such as OpenAI-based GPT series, Gemini, Claude, Moonshot, DeepSeek, etc., as well as OpenAI-based embedding models, Hugging Face's sentence-transformers, Cohere, Qwen, and other models. Hugging Face, Cohere, Qwen, and other embedding models. This wide range of model support allows users to choose the most suitable AI model according to their needs and preferences, and also facilitates the integration of new models in the future.

### Casibase Online Demo:

Casibase offers several online demo sites, including a chatbot demo and an administration interface demo, allowing users to experience the system's functionality visually.

- Chatbot demo: [https://demo.casibase.com](https://demo.casibase.com/)
- Management UI Demo: [https://demo-admin.casibase.com](https://demo-admin.casibase.com/)

## Casibase integration with the DeepSeek series of models:

Using DeepSeek in Casibase is very easy, by building Casibase and making some simple configurations, you can talk to DeepSeek R1, DeepSeek V3 and a bunch of Deepseek and its enhancements supported by other platforms such as AlibabaCloud. Avoid complex configurations for local deployments.

### Step 1: Casibase environment deployment

#### 1.1 **Deployment of Casdoor**.
Since the powerful enterprise SSO authentication, authentication and other functions provided by Casibase are done based on Casdoor. Therefore, installing Casdoor is a prerequisite for using Casibase.

***Casdoor is a robust authentication system that provides a safe and secure login experience.***

You can refer to the official Casdoor documentation to complete the Casdoor environment deployment：[Deployment of Casdoor](https://casdoor.org/docs/basic/server-installation/)

#### 1.2 **Deployment of Casibase**: [Deployment of Casibase](https://casibase.org/zh/docs/basic/server-installation)

### Step 2: Casibase Basic Configuration

#### 2.1 **Configuring Casdoor**:

You need to complete three steps in the deployed Casdoor to support the presence of users accessing Casibase, i.e., Configure Organizations->Configure Apply under Authentication->Configure user. do the following:

##### 2.1.1 Add Organisation

Configuring Organisations in the Casdoor website.

![addOrganisations](/img/blog/casibase-deepSeek-guideline/add-organisations.png)

##### 2.1.2 Add Apply

Set "Apply" for Casibase. you should create it based on the Organizations you have configured, which will be reflected in the add form.

![addApply](/img/blog/casibase-deepSeek-guideline/add-apply.png)

![addApplications](/img/blog/casibase-deepSeek-guideline/add-applications.png)

##### 2.1.3 Add User

Creating a user for the created Apply is the final preparation for subsequent login to Casibase. Just follow the information on the form.

![addUser](/img/blog/casibase-deepSeek-guideline/add-user.png)

### 2.2 **Configuring Casibase**：

With the above configuration, we already have access to casibase, next, after logging in, we will configure it for AI chat, deploying a DeepSeek r1 based on the AlibabaCloud Big Model Service Platform (https://help.aliyun.com/zh/model-studio/) supported model.

##### 2.2.1 Configure Storage Provider

Firstly, it is necessary to **configure a storage provider** through Casdoor, which can be used to store data by adding this storage provider. They can be added to Casdoor by clicking the button on the homepage：`Authentication-> Providers->add`

##### 2.2.2 Configure Model Provider

In Casibase, configure the new model provider: `Click the Providers button in the navigation bar at the top of the home page->add`.

***In the pop-up add form, we can set Category as Model, and then set the first level model: such as Moonshot, DeepSeek, Alibaba Cloud, etc. Here we don't directly select the AI model support provided by DeepSeek, but use the DeepSeek provided by Alibaba Cloud support, as shown below, we can see various sub-models supported by Alibaba Cloud in Sub Type.***

![addModelProvider](/img/blog/casibase-deepSeek-guideline/add-model-provider.png)

##### 2.2.3 Configure Embedding Providers (Optional)

After 2.2.1 and 2.2.2 have been added successfully, we can Configure Embedding Providers, by configuring Embedding Providers, we can integrate with our powerful knowledge base system Casibase. Similar steps to 2.2.2, fill out the form via: `Authentication-> Providers->add` (but please note that the Category needs to be configured as Embedding):

![casibaseEmbedding](/img/blog/casibase-deepSeek-guideline/casibase-embedding.png)

##### 2.2.4 Add stores.

In this step we organise all the information we added above (Storage provider, Model provider, Embedding provider), in the form we can fill in these three items and finally create a Stores.

### Step 3: Chatting using the DeepSeek model based on Casibase and Alibaba Cloud

![Chat](/img/blog/casibase-deepSeek-guideline/chat.png)

## Conclusions

In this guide, we learned how to implement AI chat functionality in Casibase using DeepSeek. Now you can chat with chatbots in Casibase.

For more details, you can refer to [Casibase Docs](https://casibase.org/zh/docs/overview).

