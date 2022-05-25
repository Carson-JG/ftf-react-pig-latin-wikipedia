import { useState, useEffect, useCallback } from "react";
import { Layout } from "antd";
import qs from "qs";

export default () => {
  const [content, setContent] = useState("");

  function toPigLatin(word) {
    const isVowel = char => "aeiou".includes(char.toLowerCase());
    const isCap = char => char === char.toUpperCase();

    const firstChar = word.charAt(0);
    const vowelStart = isVowel(firstChar);
    if (vowelStart) return word + "way";

    const firstVowel = word.split("").find(isVowel);
    const vowelIndex = word.indexOf(firstVowel) || 0;

    const end = word.substring(vowelIndex).toLowerCase();
    const start = word.substring(0, vowelIndex).toLowerCase();
    const output = end + start + "ay";

    const capStart = isCap(firstChar);
    return capStart
      ? output.replace(/[a-z]/i, char => char.toUpperCase())
      : output;
  }

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
    const json = await response.json();
    const pages = Object.values(json.query.pages);
    return pages[0].extract;
  }, []);

  useEffect(() => {
    getArticle().then(content => {
      content = content.replace(/[a-z']+/gi, toPigLatin);
      setContent(content);
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
