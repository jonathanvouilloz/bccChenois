import React, { useState } from "react"
import events from "../../data/calendrier.json"
import styles from "./calendar.module.css"


const Calendar = () => {


  return (
    <div class="table-container">
      <table class="table is-striped">
        <thead>
          <tr>
            <th>
              <abbr title="Date">Date</abbr>
            </th>
            <th>
              <abbr title="Heure">Heure</abbr>
            </th>
            <th>
              <abbr title="Adversaire">Adversaire</abbr>
            </th>
            <th>
            <abbr title="Où ça se passe ?">Où ça se passe ?</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((item) => 
            <tr className={item.finish ? styles.finished : ""}>
            <th>{item.date}</th>
            <td>
              {item.time}
            </td>
            <td>{item.team}</td>
            <td>
              {item.place}
            </td>
          </tr>
          )}     
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
