const settings = {
  username: "pranav",
  stats: {
    age: 19,
    verified: false,
  },
  preferences: {
    theme: "light",
    notify: {
      email: true,
      sms: false,
    },
  },
  roles: ["admin", "editor", "guest"],
};

// in here we will use recursion for nested objects
let count = 0;
let boolVarArr = [];

function transformObject(obj){
    const result = {};
    for(const [key, value] of Object.entries(obj)){
        const type = typeof(value);
        count++;
        if(type === 'object' && value != null && !Array.isArray(value)){
            result[key] = transformObject(value);
        }else{
        switch(type){
            case "boolean":
                result[key] = !value;
                boolVarArr.push(key);
                break;
            case "string":
                result[key] = value.toUpperCase();
                break;
            case "number":
                result[key] = value + 10;
                break;
            default:
                result[key] = value;
        }}
    }
    return result;
}


const resultantObj = transformObject(settings);
console.log(resultantObj);
console.log(count);
console.log(boolVarArr);

count= 0;
boolVarArr = [];

function flattenObject(obj, prefix, postfix) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const type = typeof value;
    count++;
    const keyName = prefix + key.toString() + postfix;
    if (type === "object" && value != null && !Array.isArray(value)) {
      const nestedRes = flattenObject(value, keyName+"_", "");
      Object.assign(result, nestedRes);
    } 
    else if(Array.isArray(value)){
        for (let i = 0; i < value.length; i++){
            const element = value[i];
            const elemType = typeof(value[i]);
            const pref = keyName + "_" + i.toString();

            if(elemType === 'object' && element != null && !Array.isArray(element)){
                const nestedRes = flattenObject(element, pref, "");
                Object.assign(result, nestedRes);
            }
            else{
                count++;
                switch (elemType) {
                  case "boolean":
                    result[pref] = !element;
                    boolVarArr.push(pref);
                    break;
                  case "string":
                    result[pref] = element.toUpperCase();
                    break;
                  case "number":
                    result[pref] = element + 10;
                    break;
                  default:
                    result[pref] = element;
                }

            }
        }
    }
    else {
      switch (type) {
        case "boolean":
          result[keyName] = !value;
          boolVarArr.push(keyName);
          break;
        case "string":
          result[keyName] = value.toUpperCase();
          break;
        case "number":
          result[keyName] = value + 10;
          break;
        default:
          result[keyName] = value;
      }
    }
  }
  return result;
}

const flattened = flattenObject(settings, "", "");
console.log(flattened);
console.log(count);
console.log(boolVarArr);