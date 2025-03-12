import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function DocPaginatorWrapper(props) {
  const {colorMode} = useColorMode();
  return (
    <>
      <DocPaginator {...props} />
      <br />
      <Giscus
        id="comments"
        repo="casibase/casibase"
        repoId="MDEwOlJlcG9zaXRvcnkyNjc3NDk0NTE"
        category="Docs comments"
        categoryId="DIC_kwDOD_WIS84CRIiB"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </>
  );
}
