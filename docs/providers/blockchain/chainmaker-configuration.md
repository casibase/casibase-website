---
title: Chainmaker Configuration
keywords: [Casibase, BlockChain, Chain, Ethereum]
authors: [IsAurora6]
---

ChainMaker is a high-performance, enterprise-grade blockchain platform developed under the leadership of China. It is designed to provide secure, controllable, and scalable blockchain infrastructure for industries such as finance, government, and supply chain. ChainMaker supports multiple consensus mechanisms, smart contracts, privacy protection, and other features, meeting the needs of large-scale commercial applications. Its open-source, modular architecture allows developers to flexibly customize and extend functionalities according to actual business scenarios.

In this chapter, you will learn how to configure and use ChainMaker, including setting up storage providers and other operations, to help you quickly get started and apply the features of the ChainMaker platform.

## 1. Configuration field description

When configuring a ChainMaker provider in Casibase, you need to fill in several key fields. Each field has a specific meaning and is required for the correct integration with the ChainMaker blockchain. The following list explains the purpose of each field:

- `Name`: The unique identifier for this blockchain provider.
- `Display name`: The display name shown in the UI for this provider.
- `Category`: The type of service, here it should be `Blockchain`.
- `Type`: The blockchain type, here it should be `ChainMaker`.
- `orgId`: The organization ID in the ChainMaker network.
- `ChainId`: The chain ID of the ChainMaker blockchain.
- `AuthType`: The account mode. Currently, only `permissionedwithcert` is supported.
- `User key`: The user's private key for authentication in the ChainMaker server (masked for security).
- `User cert`: The user's certificate for authentication in the ChainMaker server.
- `Sign key`: The user's private key for signing transactions in the ChainMaker server (masked for security).
- `Sign cert`: The user's certificate for signing transactions in the ChainMaker server.
- `Node address`: The address of the ChainMaker node to connect to.
- `Contract name`: The name of the smart contract to interact with.
- `Invoke method`: The method name to invoke on the contract.
- `Browser URL`: The URL for viewing the blockchain in a browser.
- `Chainmaker endpoint`: The API endpoint for the ChainMaker service. See: [https://github.com/casibase/chainmaker-server](https://github.com/casibase/chainmaker-server)

Please make sure to fill in each field accurately according to your ChainMaker deployment information. This will ensure that Casibase can successfully connect and interact with your ChainMaker blockchain.

Next, we will use "Deploying ChainMaker via the Management Console" as an example for our introduction. If you have not yet deployed ChainMaker, please follow the [ChainMaker documentation](https://docs.chainmaker.org.cn/v3.0.0/html/quickstart/%E9%80%9A%E8%BF%87%E7%AE%A1%E7%90%86%E5%8F%B0%E4%BD%93%E9%AA%8C%E9%93%BE.html) for deployment.

## 2. Configure ChainMaker

### 2.1 chainId, orgId and authType configuration

#### Obtaining Blockchain Information from the Web Panel

To retrieve blockchain information such as `chainId`, `orgId`, and `authType`, log in to the **ChainMaker Management Console** (Web panel). Navigate to the relevant **blockchain management** section, where these configuration details are displayed. Copy the required values and use them when configuring the ChainMaker provider in Casibase.

![configuration-1.png](/img/chainmaker/configuration-1.png)

![configuration-2.png](/img/chainmaker/configuration-2.png)

### 2.2 Contract name and Invoke method configuration

![configuration-3.png](/img/chainmaker/configuration-3.png)

Click the edit button in the "operate" column:
![configuration-4.png](/img/chainmaker/configuration-4.png)

### 2.3 key, certificate, and nodeAddr configuration

![configuration-5.png](/img/chainmaker/configuration-5.png)

Click the "download the chain configuration" button and extract the archive:

#### 2.3.1 node addr

You can find the node_addr configuration in ~\CasibaseChainMaker\sdk_configs\sdk_config.yml.

Alternatively, you can check nodeAddr elsewhere, but note that the displayed port is the p2p port. The one we use should be the rpc port, which is the p2p port + 1000 by default.

![configuration-7.png](/img/chainmaker/configuration-7.png)

#### 2.3.2 user certificate and key

You can find the corresponding user certificate and key in ~\CasibaseChainMaker\sdk_configs\crypto-config\TestCMorg1\user\cmtestuser1. Fill in the provider fields accordingly.

![configuration-6.png](/img/chainmaker/configuration-6.png)

### 2.4 Browser URL and ChainMaker endpoint

The Browser URL refers to the URL of the ChainMaker management console, which allows for quick access from Casibase in the future:

![configuration-8.png](/img/chainmaker/configuration-8.png)

![configuration-9.png](/img/chainmaker/configuration-9.png)

The ChainMaker endpoint refers to the IP and port of the ChainMaker server that Casibase needs to connect to, for example: 127.0.0.1:13900
