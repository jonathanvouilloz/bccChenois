import React from "react"
import styles from "./resultats.module.css"
import Divider from "../styledComponents/dividerV2"
import {MdMoodBad,MdMood} from "react-icons/md"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ResultatsInfo = ({ interclub, id }) => {


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
        <p>⬇️⬇️⬇️⬇️⬇️</p>
        <table className="table is-striped is-bordered">
          <tr>
            <th>Match</th>
            <th>BC Chênois - BC Mandement</th>
            <th className={styles.setTd}>Set 1</th>
            <th className={styles.setTd}>Set 2</th>
            <th className={styles.setTd}>Set 3</th>
            <th className={styles.setTd}></th>
          </tr>

          
          {interclub.match.map((match)=>{
          return <tr>
              <td style={{verticalAlign:'middle'}}>{match.match}</td>

              <td ><strong>{match.j1}{match.j3 ? ' - ' + match.j3 : ''}</strong> 
              <br /> {match.j2}{match.j4 ? ' - ' + match.j4 : ''} </td>
              <td style={{ verticalAlign:'middle'}}>{match.set1}</td>

              <td style={{ verticalAlign:'middle'}} className={styles.setTd}>{match.set2}</td>
              <td style={{ verticalAlign:'middle'}} className={styles.setTd}>{match.set3}</td>
              <td style={{ verticalAlign:'middle'}} className={styles.WoL}><span className={match.win ? styles.win : styles.lose}>{match.win ? <MdMood /> : <MdMoodBad />}</span></td>
              </tr>
            })}      
        </table>
        </div>
        <Divider />
    </div>
  )
}

export default ResultatsInfo
