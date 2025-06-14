export const parseDLEResponse = obj => {
  const data = obj.data;
  const parsedTerms = [];
  for (const term of data) {
    const termObj = {};
    termObj.word = term.word;
    termObj.etymology = term.etymology;
    const termDefs = term.termDefinitions;
    //alert(JSON.stringify(data))
    //alert(JSON.stringify(defs))
    const newDefs = [];
    for (const def of termDefs) {
      const defObj = {};
      defObj.synonyms = def.synonyms? def.synonyms : [];

      const defArr = parseDLETermDefinition()

      newDefs.push(defObj)

    }
    termObj.definitions = newDefs;
    parsedTerms.push(termObj);
  }

  return parsedTerms;
}

const parseDLETermDefinition = def => {
  return def
}
