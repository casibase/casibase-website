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
        "basic/try-with-helm",
        "basic/public-api",
        "basic/container-cloud",
        {
          type: "category",
          label: "Beginner Guide",
          collapsed: true,
          link: {type: "generated-index"},
          items: [
            "basic/beginner-guide/add-a-storage-provider",
            "basic/beginner-guide/add-a-model-provider",
            "basic/beginner-guide/add-an-embedding-provider",
            "basic/beginner-guide/add-a-text-to-speech-provider",
            "basic/beginner-guide/add-a-speech-to-text-provider",
            "basic/beginner-guide/add-a-store",
            "basic/beginner-guide/chats-with-ai",
          ],
        },
        "basic/casdoor-sso",
      ],
    },
    {
      type: "category",
      label: "Developer Guide",
      link: {type: "generated-index"},
      items: [
        "developer-guide/swagger",
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
      label: "How to Connect to Casibase",
      link: {type: "generated-index"},
      items: [
        "connect/overview",
        "connect/casibase-sdk",
        "connect/casibase-openai-api-compatibility",
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
        "providers/text-to-speech-providers",
        "providers/speech-to-text-providers",
        {
          type: "category",
          label: "Blockchain Providers",
          collapsed: true,
          link: {
            type: "doc",
            id: "providers/blockchain/overview",
          },
          items: [
            "providers/blockchain/chainmaker-configuration",
            "providers/blockchain/ethereum-configuration",
          ],
        },
        {
          type: "category",
          label: "Private Cloud Providers",
          collapsed: true,
          link: {
            type: "doc",
            id: "providers/private-cloud/overview",
          },
          items: [
            "providers/private-cloud/kubernetes-configuration",
          ],
        },
        {
          type: "category",
          label: "Public Cloud Providers",
          collapsed: true,
          link: {
            type: "doc",
            id: "providers/public-cloud/overview",
          },
          items: [
            "providers/public-cloud/alibaba-cloud-configuration",
          ],
        },
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
      label: "Forms",
      link: {type: "generated-index"},
      items: [
        "forms/overview",
        "forms/form-configuration",
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
      label: "TextSplitters",
      link: {type: "generated-index"},
      items: [
        "textsplitters/overview",
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
      label: "Container Cloud",
      link: {type: "generated-index"},
      items: [
        "container-cloud/overview",
        "container-cloud/kubernetes-templates",
        {
          type: "category",
          label: "Applications",
          collapsed: true,
          link: {
            type: "doc",
            id: "container-cloud/kubernetes-applications/overview",
          },
          items: [
            "container-cloud/kubernetes-applications/database",
          ],
        },
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
    {
      type: "category",
      label: "Graphs",
      link: {type: "generated-index"},
      items: [
        "graphs/overview",
      ],
    },
    // {
    //   type: "category",
    //   label: "Walkthrough Guides",
    //   link: {type: "generated-index"},
    //   items: [
    //     "beginner-guide/deploy-casdoor-and-casibase",
    //     "beginner-guide/add-a-storage-provider",
    //     "beginner-guide/add-a-model-provider",
    //     "beginner-guide/add-an-embedding-provider",
    //     "beginner-guide/add-a-store",
    //     "beginner-guide/chats-with-ai",
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
