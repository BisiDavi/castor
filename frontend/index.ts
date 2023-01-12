//question 1
type getUrlParamsResult = {[key:string]:string} | {}
type urlArrayType = Array<{text:string, type:"params" | "static", paramKey?:string, param:string, index:number}> 

function getUrlParams(path:string, pattern:string):getUrlParamsResult{
  const splitPath = path.split("/");
  const splitPattern = pattern.split("/");
  let urlArray:urlArrayType = [];
  splitPattern.filter((item,index) => {
    if(item.includes(":")){
    urlArray.push({param:item.split(":")[1], text:item, index, type:"params", paramKey: splitPath[index]});
    }else{
    urlArray.push({text:item, index, type:"static", param:""});
    }
  });

  let result = {}
  for (let item of urlArray){
    if(item.text !== splitPath[item.index] && item.type === "static" ){
     return result
    }
    if(item.type === "params" && item.paramKey === splitPath[item.index]){
        const resultObj = {[item.param] : splitPath[item.index]}
    result = {...result, ...resultObj}
    }
  }
console.log('result',result)
return result;
}