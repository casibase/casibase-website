---
title: RDP
description: Casibase nodes RDP
keywords: [nodes rdp]
authors: [leoil, IsAurora6]
---

Casibase Support Connect to your nodes via RDP protocol:

## Rdp connection

1. Start Guacamole Server

    ```bash
    docker run --name guacd -d -p 4822:4822 guacamole/guacd
    ```

2. Add a new node, set protocol to `rdp`
    ![add list](/img/node/node_list.png)

    ![add edit](/img/node/node_edit.png)

3. Connect to your node by clicking the `connect` button

## Remote App

We support remote app on Windows nodes, you can add remote apps on `node Edit` page, and then you can connect to your remote app by clicking the `connect` button.

1. Configure your remote app on the server end.  
   You can use [RemoteApp Tool](https://github.com/kimmknight/remoteapptool) to register apps.
   ![remote app config](/img/node/remote_app_config.png)

2. Configure the remote app information in the node edit page according to the server-end configuration.
    'remoteAppName', 'remoteAppDir', and 'remoteAppArgs' are required.
    ![node config](/img/node/Casibase_remote_app_config.png)
    refer to [Configuring Guacamole — Apache Guacamole Manual v1.5.3](https://guacamole.apache.org/doc/gug/configuring-guacamole.html#remoteapp)

3. Connect to your remote app.
