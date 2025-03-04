import React, {useState} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate from "@docusaurus/Translate";
// eslint-disable-next-line unused-imports/no-unused-imports
import CasdoorCard from "../components/CasdoorCard";

function FrameMask(props) {
  const [mouseState, setMouseState] = useState({state: false});
  const maskStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: 10,
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.4)",
    cursor: "pointer",
    borderRadius: "20px",
  };
  const handleMouseEnter = () => {
    setMouseState({
      ...mouseState,
      state: true,
    });

  };
  const handleMouseLeave = () => {
    setMouseState({
      ...mouseState,
      state: false,
    });
  };

  return (
    <div className={props.className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CasdoorCard src={props.src} width={props.width} height={props.height} />
      <div style={maskStyle} hidden={!mouseState.state} onClick={() => {window.open(props.src);}}>
        <Link
          className="button button--secondary button--lg"
          style={{marginTop: "50%", marginRight: "3rem", marginLeft: "3rem"}}>
          <Translate>Online Demo</Translate>
        </Link>
      </div>
    </div >
  );
}

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
      <FrameMask className={styles.headerborder} src="https://ai.casibase.com" width="500" height="720" />
    </header>
  );
}

function IdentityManager() {
  return (
    <div className={styles.identityManager}>
      <div className="container text--center">
        <div className="row">
          <div className="col" style={{marginBlock: "auto"}}>
            <h3><Translate>Enterprise-class identity management capabilities</Translate></h3>
            <Translate>
              {"Casibase uses Casdoor as its identity and single sign-on (SSO) provider. Through its deep integration with Casdoor, Casibase not only simplifies the user login process, but also provides a high level of security and flexibility, enabling organisations to easily manage user identities and access rights."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/role.png" alt="casibase features" width="500" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CasibaseFeatures() {
  return (
    <div className={styles.identityManager}>
      <div className="container text--center">
        <div className="row">
          <div className="col" style={{marginBlock: "auto"}}>
            <Translate>
              {"Casibase is an open source AI knowledge base and dialogue system that combines the latest RAG (Retrieval Augmented Generation) technology, enterprise-grade Single Sign-On (SSO) functionality, and support for a wide range of mainstream AI models.Casibase is designed to provide enterprises and developers with a powerful, flexible, and easy-to-use knowledge management and intelligent dialogue platform."}
            </Translate>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="/img/homePage.png" alt="core concepts" width="700" height="400" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CasibaseWalkthrough() {
  return (
    <div className={styles.coreConcepts}>
      <div className="container text--center">
        <div className="row">
          <div style={{marginInline: "auto"}}>
            <img src="/img/Architecture-casibase.png" alt="core concepts" width="700" height="450" />
          </div>
          <div className="col" style={{marginBlock: "auto"}}>
            <Translate values={{
              useLink: (
                <Link to="/docs/category/walkthrough-guides">
                  <Translate>Casibase Walkthrough Guide</Translate>
                </Link>
              ),
            }}>
              {"Casibase provides some provider configurations, such as storage provider, model provider, embedding provider, etc. Add them to chat with AI easily, please visit 'Casibase Walkthrough Guide Please visit {useLink} for more details."}
            </Translate>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Showcase() {
//   return (
//     <div className="hero text--center showcase">
//       <div className="container">
//         <h1><Translate>Who&apos;s using Casibase?</Translate></h1>
//         <p style={{
//           width: "50vw",
//           margin: "auto",
//         }}>
//           <Translate values={{
//             UsersPage: (
//               <Link to="/users">
//                 <Translate>check out these apps</Translate>
//               </Link>
//             ),
//           }}>
//             {"Hundreds of projects are using Casibase, from established Fortune 500 companies to hot new startups.If you're curious to see what can be accomplished Casibase, {UsersPage}!"}
//           </Translate>
//         </p>
//         <br /><br />
//         <UserList />
//       </div>
//     </div>
//   );
// }

// function OpenCollective() {
//   if (useWindowSize() === "mobile") {
//     return (
//       <iframe title="Sponsors" src="https://opencollective.com/casibase/banner.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
//     );
//   } else {
//     return (
//       <iframe title="Sponsors" src="https://opencollective.com/casibase/banner.html" style={{width: "100%", height: "650px", display: "block"}}></iframe>
//     );
//   }
// }

export default function Home() {
  return (
    <Layout
      title={"Casibase"}
      description="⚡️Open-Source LangChain-like AI Knowledge Database & Chat Bot with Admin UI and multi-model support (ChatGPT, Claude, Llama 3, DeepSeek R1, HuggingFace, etc.)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CasibaseFeatures />
        <CasibaseWalkthrough />
        <IdentityManager />
        {/* <Showcase />*/}
        {/* <OpenCollective />*/}
      </main>
    </Layout>
  );
}
