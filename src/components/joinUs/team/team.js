import React from "react"
import MemberBox from "./membreBox"
import Title from "../../styledComponents/titleStyled"
import styles from "./team.module.css"

const team = () => {
  return (
    <div className={styles.main}>
      <div className="container is-centered">
        <div className="container has-text-centered">
          <Title title="L'" subtitle="équipe" />
        </div>
        <div className="container columns is-multiline">
          <MemberBox
            role="Président"
            name="Jean-Philippe ETTER"
            contact="078.944.77.07"
            sentence="-"
            image="team/jp.jpg"
          />
          <MemberBox
            role="Vice-Président"
            name="Julien Ourny"
            contact="078.944.77.07"
            sentence="-"
            image="team/adrien-ourny.png"
          />
          <MemberBox
            role="Responsable Interclub"
            name="Adrien Ourny"
            contact="078.944.77.07"
            sentence=""
            image="team/adrien-ourny.png"
          />
           <MemberBox
            role="Entraineur Junior I"
            name="Guillaume Juillerat"
            contact="078.944.77.07"
            sentence=""
            image="team/adrien-ourny.png"
          />
          <MemberBox
            role="Entraineur Junior II"
            name="Jérémy Apostolides"
            contact="078.944.77.07"
            sentence=""
            image="team/adrien-ourny.png"
          />
          <MemberBox
            role="Entraineur Junior III"
            name="Jonathan Vouilloz"
            contact="078.944.77.07"
            sentence=""
            image="team/jonathan.png"
          />
          <MemberBox
            role="Entraineur Junior IV"
            name="Jonas Garazi"
            contact="078.944.77.07"
            sentence=""
            image="team/adrien-ourny.png"
          />
          <MemberBox
            role="Entraineur Adultes"
            name="Arnaud Ritz"
            contact="078.944.77.07"
            sentence=""
            image="team/arnaud.jpg"
          />     
        </div>
      </div>
    </div>
  )
}

export default team
