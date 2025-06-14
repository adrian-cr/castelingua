import React from 'react'
import { isArrEmpty, isLastArrEl } from '../../../modules/checkers.js';
import { Link } from 'react-router-dom';

export const superindex = (str) => {
  let supIdx = -1;
  for (let i=0; i<str.length; i++) {
    if ("0123456789".includes(str[i])) {
      supIdx = i;
      break;
    }
  }
  return (
    supIdx!==-1?
      <span>
        {str.slice(0, supIdx)}
          <sup>{str[supIdx]}</sup>
        {str.slice(supIdx+1)}
      </span>
    :
      str
    )

}

export default function TabBody({terms}) {
  let termNum = 1;

  return (
    <>
      {
        terms && terms.map(term =>
          <>
            {terms.length>1 && <h1>{superindex(term.word)}</h1>}
            {term.etymology && <p className="etymology">{superindex(term.etymology)}</p>}
            <ol>
              {term.entries.map(entry =>
                  <li>
                    <abbr>{entry.POS && entry.POS}</abbr> {entry.startAbbrs && <abbr>{entry.startAbbrs.join(" ")}</abbr>} {entry.POS && superindex(entry.definition)} {entry.endAbbrs && <abbr>{entry.endAbbrs.join(" ")}</abbr>}<br></br>
                    {entry.synonyms && <span><abbr>SIN.:</abbr> {entry.synonyms.map(e => <><Link className="link" to={`/búsqueda/${e}`}>{superindex(e)}</Link>{isLastArrEl(entry.synonyms, e)? "." : ", "}</>)}</span>}
                  </li>
              )}
            </ol>
              {
                !isArrEmpty(term.phrases) &&
                  term.phrases.map(phrase =>
                    <>
                      <h3>{phrase.phrase}</h3>
                      <ol>
                        {
                          phrase.entries.map(phraseEntry =>
                            <li>
                              {phraseEntry.POS && <abbr>{phraseEntry.POS}</abbr>} {phraseEntry.startAbbrs && <abbr>{phraseEntry.startAbbrs.join(" ")}</abbr>} {phraseEntry.definition} {phraseEntry.endAbbrs && <abbr>{phraseEntry.endAbbrs.join(" ")}</abbr>}<br/>
                              {phraseEntry.exampleSentence && <span>p.ej.: <span className="example-sentence">{phraseEntry.exampleSentence}</span></span>}
                            </li>
                          )
                        }
                      </ol>
                    </>
                  )
              }
              { !isArrEmpty(term.relatedTerms) &&
                <>
                  <h2>Véase También</h2>
                  <ul>
                    {
                      term.relatedTerms.map(term =>
                        <li>
                          <Link className="link" to={`/búsqueda/${term}`}>{term}</Link>
                        </li>
                      )
                    }
                  </ul>
                </>
              }

          </>
        )
      }
    </>
  )
}
