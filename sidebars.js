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
      label: "Deployment",
      link: {type: "generated-index"},
      items: [
        "deployment/deploy-casdoor-and-casibase",
      ],
    },
    {
      type: "category",
      label: "Providers",
      link: {type: "generated-index"},
      items: [
        "providers/overview",
        "providers/model-providers",
        "providers/embedding-providers",
        "providers/storage-providers",
      ],
    },
    {
      type: "category",
      label: "Stores",
      link: {type: "generated-index"},
      items: [
        "stores/overview",
        "stores/store-configuration",
      ],
    },
    {
      type: "category",
      label: "Vectors",
      link: {type: "generated-index"},
      items: [
        "vectors/overview",
        "vectors/vectors-generation",
      ],
    },
    {
      type: "category",
      label: "Chats",
      link: {type: "generated-index"},
      items: [
        "chats/overview",
      ],
    },
    {
      type: "category",
      label: "Messages",
      link: {type: "generated-index"},
      items: [
        "messages/overview",
      ],
    },
    {
      type: "category",
      label: "Nodes",
      link: {type: "generated-index"},
      items: [
        "node/overview",
        "node/rdp",
        "node/vnc",
      ],
    },
    // {
    //   type: "category",
    //   label: "Walkthrough Guides",
    //   link: {type: "generated-index"},
    //   items: [
    //     "walkthrough-guides/deploy-casdoor-and-casibase",
    //     "walkthrough-guides/add-a-storage-provider",
    //     "walkthrough-guides/add-a-model-provider",
    //     "walkthrough-guides/add-an-embedding-provider",
    //     "walkthrough-guides/add-a-store",
    //     "walkthrough-guides/chats-with-ai",
    //   ],
    // },
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
