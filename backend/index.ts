/* question 2 */
type dataType = {[key:string]: string | number}

function objectDiff(source:dataType, target:dataType){
    let result = {};
    const sourceObj = {keys: Object.keys(source), values: Object.values(source)}
    const targetObj = {keys: Object.keys(target), values: Object.values(target)}

    targetObj.values.map((item, index) => {
        if(item !== sourceObj.values[index]){
            const resultX = { [targetObj.keys[index]]: {old: source[targetObj.keys[index]], new:item }}
            result = {...result, ...resultX}
        }
    })

    console.log('result',result)
    return result
}
