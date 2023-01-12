/* question 2 */
type dataType = { [key: string]: string | number };

function objectDiff(source: dataType, target: dataType) {
  let result = {};
  const sourceObj = {
    keys: Object.keys(source),
    values: Object.values(source),
  };
  const targetObj = {
    keys: Object.keys(target),
    values: Object.values(target),
  };

  targetObj.values.map((item, index) => {
    if (item !== sourceObj.values[index]) {
      const resultX = {
        [targetObj.keys[index]]: {
          old: source[targetObj.keys[index]],
          new: item,
        },
      };
      result = { ...result, ...resultX };
    }
  });

  return result;
}

type Data = { id: string; name?: string; count: number };

const before: Data = { id: "1", count: 0 };
const after: Data = { id: "1", name: "khan", count: 1 };
const result = objectDiff(before, after);
console.log("result", result);
