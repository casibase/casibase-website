---
title: Intranet
description: Connect assets in intranet
keywords: [Casibase, intranet, nat-traversal]
authors: [leo220yuyaodog, IsAurora6]
---

The section will tell you how to config an intranet asset and connect to your intranet asset. Casibase uses NAT traversal
technology to connect to your intranet asset. You need to deploy a Casibase agent in your intranet machine. After the
agent is connected to the Casibase server, you can both connect to the intranet RDP asset by Casibase web UI and other tools like mstsc.

## Config Casibase server

If you want start the NAT traversal service, you need to add `gatewayEndpoint` in `conf/app.conf`.

- The host is your Casibase server public IP or domain.
- The port is the port that listens to the Casibase agent connection request.

For example:

```ini
gatewayEndpoint = door.Casibase.com:19100
```

## Config intranet asset

Fill in the required fields that connect to your intranet asset.

- Name: The **hostname** of the intranet machine. When the Casibase starts, it connects to the database to check whether
  the current hostname is the name of an asset, and if so, it starts in agent mode. So, make sure to fill in the correct hostname.
- Category: The category of the asset, select `Machine`.
- Protocol: The protocol of the asset, select `RDP`.
- Gateway port: The port in the Casibase server that listens to the user's connection request.

For example, fill in Gateway port with `7000`. Then the user can connect to the intranet machine by:

```shell
ssh <Username>@<Casibase server public IP> -p 7000
```

- Endpoint: Unlike public assets, the endpoint needs to be filled in with the application address of the private network.
  If you want to use SSH or RDP to connect to the host, enter 127.0.0.1
- Port: The port of the application in the intranet machine. Port 3389 is used by RDP and 22 by SSH by default. If you
  have a custom port, fill in your custom port.
- Username: The username of the application.
- Password: The password of the application.

![config](/img/asset/intranet/asset_intranet_config.png)

## Deploy Casibase agent

You need to deploy a Casibase on the host to which you are connected in the intranet. As mentioned in the previous chapter,
when the Casibase starts, it connects to the database to check whether the current hostname is the name of an asset, and
if so, it starts in agent mode. So the must configurations in the agent Casibase `conf/app.conf` are below:

```ini
httpport = 19000
driverName = 
dataSourceName = 
dbName = 
gatewayEndpoint = door.Casibase.com:19100
```

It is **recommended** that you can copy the same configuration file `conf/app.conf` in the server Casibase directly.
