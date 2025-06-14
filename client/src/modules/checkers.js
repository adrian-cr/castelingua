/* ARRAY-RELATED CHECKERS */
export const isArrEmpty = arr => arr?.length === 0;

export const isObjEmpty = obj => Object.keys(obj).length===0;

export const isLastArrEl = (arr, el) => {
  return arr.indexOf(el) === arr.length - 1;
}

export const hasData = (obj, resource) => {
  switch (resource) {
    case "DPD": return isArrEmpty(obj?.data?.entries);
  }
}
