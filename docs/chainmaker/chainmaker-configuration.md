---
title: Chainmaker Configuration
keywords: [Casibase, ChainMaker]
authors: [IsAurora6]
---

In this chapter, you will learn how to configure and use ChainMaker, including setting up storage providers and other operations, to help you quickly get started and apply the features of the ChainMaker platform.

Next, we will use "Deploying ChainMaker via the Management Console" as an example for our introduction. If you have not yet deployed ChainMaker, please follow the [ChainMaker documentation](https://docs.chainmaker.org.cn/v3.0.0/html/quickstart/%E9%80%9A%E8%BF%87%E7%AE%A1%E7%90%86%E5%8F%B0%E4%BD%93%E9%AA%8C%E9%93%BE.html) for deployment.

## Configure Chain Information

### 1.1 chainId, orgId and authType configuration

![configuration-1.png](/img/chainmaker/configuration-1.png)

![configuration-2.png](/img/chainmaker/configuration-2.png)

### 1.2 Contract name and Invoke method configuration

![configuration-3.png](/img/chainmaker/configuration-3.png)

Click the edit button in the "operate" column:
![configuration-4.png](/img/chainmaker/configuration-4.png)

### 1.3 key, certificate, and nodeAddr configuration

![configuration-5.png](/img/chainmaker/configuration-5.png)

Click the "download the chain configuration" button and extract the archive:

1.3.1 You can find the node_addr configuration in ~\CasibaseChainMaker\sdk_configs\sdk_config.yml.

Alternatively, you can check nodeAddr elsewhere, but note that the displayed port is the p2p port. The one we use should be the rpc port, which is the p2p port + 1000 by default.

![configuration-7.png](/img/chainmaker/configuration-7.png)

1.3.2 You can find the corresponding user certificate and key in ~\CasibaseChainMaker\sdk_configs\crypto-config\TestCMorg1\user\cmtestuser1. Fill in the provider fields accordingly.

![configuration-6.png](/img/chainmaker/configuration-6.png)
