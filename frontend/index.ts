//question 1
type getUrlParamsResult = { [key: string]: string } | {};
type urlArrayType = Array<{
  text: string;
  type: "params" | "static";
  paramKey?: string;
  param: string;
  index: number;
}>;

function getUrlParams(path: string, pattern: string): getUrlParamsResult {
  const splitPath = path.split("/");
  const splitPattern = pattern.split("/");
  let urlArray: urlArrayType = [];
  splitPattern.filter((item, index) => {
    if (item.includes(":")) {
      urlArray.push({
        param: item.split(":")[1],
        text: item,
        index,
        type: "params",
        paramKey: splitPath[index],
      });
    } else {
      urlArray.push({ text: item, index, type: "static", param: "" });
    }
  });

  let result = {};
  for (let item of urlArray) {
    if (item.text !== splitPath[item.index] && item.type === "static") {
      return result;
    }
    if (item.type === "params" && item.paramKey === splitPath[item.index]) {
      const resultObj = { [item.param]: splitPath[item.index] };
      result = { ...result, ...resultObj };
    }
  }
  return result;
}

// test
const pattern = "staticOne/:paramOne/staticTwo/staticThree/:paramTwo";
const path1 = "staticZero/one";
const path2 = "staticOne/one";
const path3 = "staticOne/one/staticThree/three";
const path4 = "staticOne/one/staticTwo/staticThree/two";

const result1 = getUrlParams(path1, pattern);
const result2 = getUrlParams(path2, pattern);
const result3 = getUrlParams(path3, pattern);
const result4 = getUrlParams(path4, pattern);

console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);
console.log("result4", result4);
