---
title: Storage Providers
keywords: [Casibase, Storage Provider, Integration]
authors: [IsAurora6]
---

## Introduction

Adding a storage provider to Casibase enables you to efficiently manage and store data, making it an essential component for your knowledge base system.

### Add a New Storage Provider

Storage providers are used to store data. They can be added in Casdoor by clicking the `Identity - Providers` button on the home page.

![Casdoor-home-providers](/img/walkthrough-guides/casdoor-home-providers.png)

Click the `Add` button to add a storage provider.

![Casdoor-providers-add](/img/walkthrough-guides/casdoor-providers-add.png)

#### Fill in the storage provider information

Fill in the storage provider information and click the `Save & Exit` button.

![Casdoor-providers-form-filling](/img/walkthrough-guides/casdoor-providers-form-filling.png)

:::tip

Casdoor supports many storage providers, including:

- [AWS S3](https://aws.amazon.com/s3/)
- [Azure Blob](https://azure.microsoft.com/en-us/products/storage/blobs)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [MinIO](https://min.io/)
- [Qiniu Cloud Kodo](https://www.qiniu.com/)
- [Alibaba Cloud OSS](https://www.alibabacloud.com/product/oss)
  ...

:::

**Example**

##### Add an Aliyun OSS storage provider

:::caution

- Client ID: The AccessKey ID of your Aliyun OSS account.
- Client Secret: The AccessKey Secret of your Aliyun OSS account.

`****` is the placeholder for your Aliyun OSS account information.

![Casdoor-providers-form-filling-alioss](/img/walkthrough-guides/casdoor-providers-form-filling-alioss.png)

:::

#### View the storage provider

After adding the storage provider, you can view the storage provider information.

![Casdoor-providers-view](/img/walkthrough-guides/casdoor-providers-view.png)
