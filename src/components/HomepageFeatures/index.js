import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Comprehensive Model Support",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
          Integrates a diverse range of AI models, including ChatGPT, Azure OpenAI, HuggingFace, and more, complemented by support for various embedding APIs like OpenAI Ada and Baidu Wenxin Yiyi.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Advanced Document Handling & AI Assistance",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
          Supports multiple document formats including txt, markdown, docx, pdf with intelligent parsing (enhanced by markitdown for better accuracy), and features an embedded AI assistant for real-time online chat and manual session handover.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Enterprise-Level Features & Multilingual Support",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate>
          Offers multi-user and multi-tenant capabilities with enterprise-grade Single Sign-On (SSO), comprehensive chat session logging for auditing, and a multilingual interface supporting Chinese, English, and more.
        </Translate>
      </>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
