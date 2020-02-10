import React, { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import events from "../../data/calendrier.json"

const Calendar = () => {
  const [lieu, lieuChange] = useState("-")
  const [horaire, horaireChanged] = useState("-")
  const [team, teamChanged] = useState("-")

  const eventClick = arg => {
    // bind with an arrow function
    lieuChange(arg.event.extendedProps.place)
    teamChanged(arg.event.extendedProps.team)
    horaireChanged(arg.event.extendedProps.time)
  }

  return (
    <div>
      <FullCalendar
        events={events}
        locale="fr"
        header={{
          right: "prev,next",
          left: "",
          center: "title",
        }}
        aspectRatio="1.5"
        eventClick={eventClick}
        weekends={false}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
      />
      <div>
        <br />
        {lieu === "-" ? (
          <span>Cliquer sur une date d'interclub pour avoir plus d'infos</span>
        ) : (
          <span>
            L'interclub se déroulera à <strong>{lieu}</strong> à{" "}
            <strong>{horaire}</strong> contre l'équipe <strong>{team}</strong>
          </span>
        )}
      </div>
    </div>
  )
}

export default Calendar
