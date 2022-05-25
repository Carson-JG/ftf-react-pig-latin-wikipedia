import { useState, useEffect } from "react";
import { Layout } from "antd";

import toPigLatin from "../../utils/toPigLatin";
import getArticle from "../../utils/getArticle";

export default () => {
  const [content, setContent] = useState("");

  const { pathname: path } = window.location;

  useEffect(() => {
    getArticle(path).then(article => {
      const pigLatinArticle = article.replace(/[a-z']+/gi, toPigLatin);
      setContent(pigLatinArticle);
    });
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
