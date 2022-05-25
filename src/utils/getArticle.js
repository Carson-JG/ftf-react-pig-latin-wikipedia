import qs from "qs";

const getArticle = async path => {
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
};

export default getArticle;
