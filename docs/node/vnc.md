---
title: VNC
description: Casibase nodes VNC
keywords: [nodes vnc]
authors: [leoil, IsAurora6]
---

## VCN Connect

VCN connection is similar to RDP connections.

1. Start Guacamole Server

    ```bash
    docker run --name guacd -d -p 4822:4822 guacamole/guacd
    ```

2. Add a new node, set protocol to `vnc`
    ![add list](/img/node/node_list.png)

3. Connect to your node by clicking the `connect` button.
