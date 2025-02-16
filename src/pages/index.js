import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate, {translate} from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";
import {useWindowSize} from "@docusaurus/theme-common";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Casibase</Translate></h1>
        <br />
        <p className="hero__subtitle" style={{margin: "0 auto", maxWidth: 700}}>
          <Translate>
            🚀⚡️Open-Source LangChain-like AI Knowledge Database & Chat Bot with Admin UI and multi-model support (ChatGPT, Claude, Llama 3, DeepSeek R1, HuggingFace, etc.)
          </Translate>
        </p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/overview">
            <Translate>🚀Get Started⚡️</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="https://ai.casibase.com">
            <Translate>Online Demo (Chat Bot)</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="https://ai-admin.casibase.com">
            <Translate>Online Demo (Admin UI)</Translate>
          </Link>
        </div>
        <br />
      </div>
    </header>
  );
}

function Showcase() {
  return (
    <div className="hero text--center showcase">
      <div className="container">
        <h1><Translate>Who&apos;s using Casibase?</Translate></h1>
        <p style={{
          width: "50vw",
          margin: "auto",
        }}>
          <Translate values={{
            UsersPage: (
              <Link to="/users">
                <Translate>check out these apps</Translate>
              </Link>
            ),
          }}>
            {"Hundreds of projects are using Casibase, from established Fortune 500 companies to hot new startups.If you're curious to see what can be accomplished Casibase, {UsersPage}!"}
          </Translate>
        </p>
        <br /><br />
        <UserList />
      </div>
    </div>
  );
}

function OpenCollective() {
  if (useWindowSize() === "mobile") {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
    );
  } else {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "650px", display: "block"}}></iframe>
    );
  }
}

export default function Home() {
  return (
    <Layout
      title={"Casibase"}
      description="⚡️Open-Source LangChain-like AI Knowledge Database & Chat Bot with Admin UI and multi-model support (ChatGPT, Claude, Llama 3, DeepSeek R1, HuggingFace, etc.)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Showcase />
        <OpenCollective />
      </main>
    </Layout>
  );
}
