import React from "react"
import styles from "./resultats.module.css"
import Divider from "../styledComponents/dividerV2"
import {MdMoodBad,MdMood} from "react-icons/md"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ResultatsInfo = ({ interclub, id, section }) => {
  return (
    <div className="container is-fluid has-text-centered">
      <br />
        <div className="table-container">
        <div className={styles.resume}>
            <div className="has-text-left">
                <h2 className="is-size-4 is-uppercase"><span className={styles.underline}>{interclub.title}</span></h2>
                <article className={styles.content}>{documentToReactComponents(interclub.resultats.json)}</article>
            </div>
        </div>
        <p><span role="img">⬇️⬇️⬇️⬇️⬇️</span></p>
        <table className="table is-striped is-bordered">
          <tr className="has-background-white-ter">
            <th className="has-text-centered">Match</th>
            <th className="has-text-centered">BC Chênois - BC Mandement</th>
            <th className="has-text-centered">Set 1</th>
            <th className="has-text-centered">Set 2</th>
            <th className="has-text-centered">Set 3</th>
            <th className="has-text-centered"></th>
          </tr>

          
          {interclub.match.map((match)=>{
          return <tr>
              <td className="has-text-centered has-background-white-ter" style={{verticalAlign:'middle'}}>{match.match}</td>

              <td className="has-text-centered"><strong>{match.j1}{match.j3 ? ' - ' + match.j3 : ''}</strong> 
              <br /> {match.j2}{match.j4 ? ' - ' + match.j4 : ''} </td>
              <td style={{ verticalAlign:'middle', textAlign:'center'}}>{match.set1}</td>

              <td style={{ verticalAlign:'middle', textAlign:'center'}}>{match.set2}</td>
              <td style={{ verticalAlign:'middle', textAlign:'center'}} className={styles.setTd}>{match.set3}</td>
              <td style={{ verticalAlign:'middle', textAlign:'center'}} className={styles.WoL}><span className={match.win ? styles.win : styles.lose}>{match.win ? <MdMood /> : <MdMoodBad />}</span></td>
              </tr>
            })}      
        </table>
        </div>
        {section === "home" ? <br /> :  <Divider />
}
    </div>
  )
}

export default ResultatsInfo
