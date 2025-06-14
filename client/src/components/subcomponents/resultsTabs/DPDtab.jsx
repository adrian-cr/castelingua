import React from 'react'
import { isArrEmpty, isLastArrEl } from '../../../modules/checkers.js';
import { Link } from 'react-router-dom';

const superindex = (str) => {
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

export default function DPDTab({entries}) {
  let termNum = 1;

  return (
    <ul>
    {
      entries && entries.map(e =>
        <li>
          {
            e.splitText.map(f => {
              switch(f.type) {
                case "abbr":
                  return <abbr>{f.content}</abbr>
                case "bib":
                  return <span className="bibliography">{f.content}</span>
                case "def":
                  return <dfn>{f.content}</dfn>
                case "em":
                  return <em>{f.content}</em>
                case "ex":
                  return <span className="example-sentence">{f.content}</span>
                case "link":
                  return f.scope==="external"? <Link className="link external" to={`/búsqueda/${f.content}`}>{superindex(f.content)}</Link> : <span className="link internal">{f.content}</span>
                case "text":
                  return f.content;
                default: return "";
              }
            }
            )
          }
      </li>
      )
    }
    </ul>
  )
}
