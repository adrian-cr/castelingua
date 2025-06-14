// @ts-nocheck
import React from 'react'
import { isArrEmpty, isLastArrEl } from '../../../modules/checkers.js';
import { Link } from 'react-router-dom';
import { capitalize } from '../../../modules/formatters.js';

export default function GTGtab({data}) {
  let termNum = 1;
  const dataTypeMap = {
    examples: "ejemplos",
    synonyms: "sinónimos",
    relatedTerms: "relacionados",
    graphs: "esquemas",
    tables: "tablas",
    references: "referencias"
  }
  return ( data &&
    <>
      <div className="gtg-div gtg-intro">
        {
          data.intro.map(e =>
            <p className="gtg-intro-p">
              {capitalize(dataTypeMap[e.type])}:&nbsp;
              {
                e.content.map(f => {
                  switch(e.type) {
                    case "examples":
                    case "synonyms":
                      return <><em>{f}</em>{isLastArrEl(e.content, f)? "." : ", "}</>
                    case "relatedTerms":
                      return <><Link to={`/búsqueda/${f.path}`}>{f.term}</Link>{isLastArrEl(e.content, f)? "." : ", "}</>
                    case "graphs":
                      return <><a href={`${f.path}`}>{f.text}</a>{isLastArrEl(e.content, f)? "." : ", "}</>
                    case "tables":
                      return <><a href={`${f.path}`}>{f.text}</a>{isLastArrEl(e.content, f)? "." : ", "}</>
                    case "references":
                      return <><span className="ref"><em>{f.resource}</em> § {f.links.map(g => <><a href={g.url} target="_blank">{g.text}</a>{isLastArrEl(f.links, g)? "." : ", "}</>)}</span>{!isLastArrEl(e.content, f) && " | " }</>
                  }
                })
              }
            </p>
          )
        }
      </div>
      <div className="gtg-div gtg-main">
        {data.body.main.map(e =>
            <p>
              {
                e.map(f => {
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
                    return <Link className="link gtg-link" to={`/búsqueda/${f.content}`}>{f.content.toUpperCase()}</Link>
                  case "sup":
                    return <sup>{f.content}</sup>;
                  case "text":
                    return f.content
                  default: return "";
                }
              }
              )
              }
            </p>
          )
        }
      </div>
      {
        !isArrEmpty(data.body.complementary) &&
          <div className="gtg-div gtg-complementary">
            <h3>Información complementaria</h3>
            {data.body.complementary.map(e =>
                <p>
                  {
                    e.map(f => {
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
                        return <Link className="link gtg-link" to={`/búsqueda/${f.content}`}>{f.content.toUpperCase()}</Link>
                      case "sup":
                        return <sup>{f.content}</sup>;
                      case "text":
                        return f.content;
                      default: return "";
                    }
                  }
                  )
                  }
                </p>
              )
            }
          </div>
      }
      {
        data.body.graphs &&
          <div className="gtg-div gtg-graphs">
            {
              data.body.graphs.map(e =>
                <>
                <h3>{e.title}</h3>
                <img id={e.id} className="gtg-img" src={e.imgURL} alt="" />
                {
                  e.notes.map(f =>
                    <p>
                      {
                        f.map(g => {
                          switch(g.type) {
                            case "abbr":
                              return <abbr>{g.content}</abbr>
                            case "bib":
                              return <span className="bibliography">{g.content}</span>
                            case "def":
                              return <dfn>{g.content}</dfn>
                            case "em":
                              return <em>{g.content}</em>
                            case "ex":
                              return <span className="example-sentence">{g.content}</span>
                            case "link":
                              return <Link className="link gtg-link" to={`/búsqueda/${f.content}`}>{g.content.toUpperCase()}</Link>
                            case "sup":
                              return <sup>{g.content}</sup>;
                            case "text":
                              return g.content;
                            default: return "";
                          }
                        })
                      }
                    </p>
                  )
                }
                </>
              )
            }
          </div>
      }
      {
        data.body.tables &&
          <div className="gtg-div gtg-tables">
            {
              data.body.tables.map(e =>
                <>
                <h3>{e.title}</h3>
                <img id={e.id} className="gtg-img" src={e.imgURL} alt="" />
                {
                  e.notes.map(f =>
                    <p>
                      {
                        f.map(g => {
                          switch(g.type) {
                            case "abbr":
                              return <abbr>{g.content}</abbr>
                            case "bib":
                              return <span className="bibliography">{g.content}</span>
                            case "def":
                              return <dfn>{g.content}</dfn>
                            case "em":
                              return <em>{g.content}</em>
                            case "ex":
                              return <span className="example-sentence">{g.content}</span>
                            case "link":
                              return <Link className="link gtg-link" to={`/búsqueda/${f.content}`}>{g.content.toUpperCase()}</Link>
                            case "sup":
                              return <sup>{g.content}</sup>;
                            case "text":
                              return g.content;
                            default: return "";
                          }
                        })
                      }
                    </p>
                  )
                }
                </>
              )
            }
          </div>
      }
    </>
  )
}
