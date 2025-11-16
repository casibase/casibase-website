import React from "react";
import Layout from "@theme/Layout";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate, {translate} from "@docusaurus/Translate";

function Help() {
  return (
    <Layout title="Help" description="Help Page" styles={{padding: "19px"}}>
      <div className="container text--center">
        <br /><br />
        <h1><Translate>本公司微信小程序：</Translate></h1>
        <img alt={"miniapp"} src={"/img/miniapp.jpg"} width="200px" /><br /><br />
        <Translate>If you need help with Casibase, you can try one of the mechanisms below.</Translate>
        <br /><br /><br /><br />
        <div className="row">
          <div className="col">
            <h2><Translate>Discord</Translate></h2>
            <Translate>You can join the conversation on</Translate> <a
              href="https://discord.gg/devUNrWXrh"><Translate>Discord</Translate></a> <Translate>for contributing
            help.</Translate>
          </div>
          <div className="col">
            <h2>GitHub</h2>
            <Translate>At our</Translate> <a href="https://github.com/casibase/casibase"><Translate>GitHub
            repo</Translate></a><Translate>, browse and submit</Translate> <a
              href="https://github.com/casibase/casibase/issues">issues</a> or <a
              href="https://github.com/casibase/casibase/pulls">pull requests</a> <Translate>for bugs you find or any new
            features you may want implemented.</Translate>
          </div>
          <div className="col">
            <h2><Translate>QQ && WeChat</Translate></h2>
            <Translate
              values={{
                963536134: (
                  <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casibase.png">
                    963536134
                  </a>
                ),
                Wechat_group: (
                  <a href="https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg" target="_blank"
                    rel="noreferrer">
                    WeChat group
                  </a>
                ),
              }}
            >
              {"You can contact us by joining the QQ group: {963536134} or {Wechat_group}"}
            </Translate>
          </div>
        </div>
      </div>
      <br /><br />
    </Layout>
  );
}

export default Help;
