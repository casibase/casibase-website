/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "The Basics",
      link: {type: "generated-index"},
      items: [
        "overview",
        "basic/core-concepts",
        "basic/server-installation",
        "basic/try-with-docker",
        "basic/casdoor-sso",
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {type: "generated-index"},
      items: [
        "asset/overview",
        "asset/rdp",
        "asset/vnc",
        "asset/database",
        "asset/intranet",
      ],
    },
    {
      type: "category",
      label: "Walkthrough Guides",
      link: {type: "generated-index"},
      items: [
        "walkthrough-guides/deploy-casdoor-and-casibase",
        "walkthrough-guides/add-a-storage-provider",
        "walkthrough-guides/add-a-model-provider",
        "walkthrough-guides/add-a-embedding-provider",
        "walkthrough-guides/add-a-store",
        "walkthrough-guides/chat-with-ai",
      ],
    },
    // {
    //   type: "category",
    //   label: "",
    //   link: { type: "generated-index" },
    //   items: [
    //     "doc1",
    //     "folder1/doc1",
    //     {
    //       type: "category",
    //       label: "",
    //       link: { type: "generated-index" },
    //       items: [
    //         "floder2/doc1",
    //         "floder2/doc2",
    //         "floder2/doc3",
    //       ],
    //     },
    //   ],
    // },
  ],
};
