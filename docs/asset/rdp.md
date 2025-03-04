---
title: RDP
description: Casibase Assets RDP
keywords: [assets rdp]
authors: [leoil, IsAurora6]
---

Casibase Support Connect to your assets via RDP protocol:

## Rdp connection

1. Start Guacamole Server

    ```bash
    docker run --name guacd -d -p 4822:4822 guacamole/guacd
    ```

2. Add a new asset, set protocol to `rdp`
    ![add list](/img/asset/asset_list.png)

    ![add edit](/img/asset/asset_edit.png)

3. Connect to your asset by clicking the `connect` button

    ![connect asset](/img/asset/rdp.gif)

## Remote App

We support remote app on Windows assets, you can add remote apps on `Asset Edit` page, and then you can connect to your remote app by clicking the `connect` button.

1. Configure your remote app on the server end.  
   You can use [RemoteApp Tool](https://github.com/kimmknight/remoteapptool) to register apps.
   ![remote app config](/img/asset/remote_app_config.png)

2. Configure the remote app information in the asset edit page according to the server-end configuration.
    'remoteAppName', 'remoteAppDir', and 'remoteAppArgs' are required.
    ![asset config](/img/asset/Casibase_remote_app_config.png)
    refer to [Configuring Guacamole — Apache Guacamole Manual v1.5.3](https://guacamole.apache.org/doc/gug/configuring-guacamole.html#remoteapp)

3. Connect to your remote app.

    ![rmeote app connect](/img/asset/asset_remote_app.gif)
