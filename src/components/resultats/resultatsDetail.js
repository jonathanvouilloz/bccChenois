import React from "react"
import styles from "./resultats.module.css"
import Divider from "../styledComponents/dividerV2"
import {MdMoodBad,MdMood} from "react-icons/md"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ResultatsInfo = ({ interclub, id }) => {


  return (
    <div class="container is-fluid has-text-centered">
      <h2 class={styles.titleInterclub}>{interclub.title}</h2>
      <br />
        <div class="table-container">
        <table class="table is-striped is-bordered">
          <thead>
            <th>Match</th>
            <th>BC Chênois - BC Mandement</th>
            <th class={styles.setTd}>Set 1</th>
            <th class={styles.setTd}>Set 2</th>
            <th class={styles.setTd}>Set 3</th>
            <th class={styles.setTd}></th>
          </thead>

          
          {interclub.match.map((match)=>{
          return <tr>
              <td style={{verticalAlign:'middle'}}>{match.match}</td>

              <td ><strong>{match.j1}{match.j3 ? ' - ' + match.j3 : ''}</strong> 
              <br /> {match.j2}{match.j4 ? ' - ' + match.j4 : ''} </td>
              <td style={{ verticalAlign:'middle'}}>{match.set1}</td>

              <td style={{ verticalAlign:'middle'}} class={styles.setTd}>{match.set2}</td>
              <td style={{ verticalAlign:'middle'}} class={styles.setTd}>{match.set3}</td>
              <td style={{ verticalAlign:'middle'}} class={styles.WoL}><span class={match.win ? styles.win : styles.lose}>{match.win ? <MdMood /> : <MdMoodBad />}</span></td>
              </tr>
            })}      
        </table>
        </div>
        <div class={styles.resume}>
            <div class="has-text-left">
                <h2 class="is-size-4 is-uppercase">Résumé</h2>
                <content class={styles.content}>{documentToReactComponents(interclub.resultats.json)}</content>
            </div>
        </div>
        <Divider />
    </div>
  )
}

export default ResultatsInfo
