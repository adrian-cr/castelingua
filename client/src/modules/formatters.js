const { isLastArrEl } = require("./checkers");

export const capitalize = str => str.slice(0,1).toUpperCase() + str.slice(1);

export const commaSepList = arr => {
  return arr.map(term => " " + term + (!isLastArrEl(arr, term)? "," : "."))
}

export const removeSuperindex = (str) => {
  for (let i=0; i<str.length; i++) {
    if ("0123456789".includes(str[i])) {
      str = str.replace(str[i], "");
    }
  }
  return str;
}
