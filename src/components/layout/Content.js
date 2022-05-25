import { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import qs from "qs";

import toPigLatin from "../../utils/toPigLatin";

export default () => {
  const [content, setContent] = useState("");

  const getArticle = useCallback(async () => {
    const { pathname: path } = window.location;
    const wikiHost = "https://en.wikipedia.org/w/api.php";
    const titles = path.split("/").pop();
    const queryString = qs.stringify({
      origin: "*",
      format: "json",
      action: "query",
      prop: "extracts",
      exlimit: "max",
      explaintext: "",
      titles,
    });
    const requestUrl = wikiHost + "?" + queryString;
    const response = await window.fetch(requestUrl);
    const { query } = await response.json();
    const pages = Object.values(query.pages);
    return pages[0].extract;
  }, []);

  useEffect(() => {
    getArticle().then(content =>
      setContent(content.replace(/[a-z']+/gi, toPigLatin))
    );
  }, [setContent]);

  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      <div
        style={{
          minHeight: "100%",
          padding: "24px",
          background: "#fff",
        }}
      >
        {content}
      </div>
    </Layout.Content>
  );
};
