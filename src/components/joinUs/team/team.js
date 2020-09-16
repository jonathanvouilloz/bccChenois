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
            contact="+41 78 699 97 60"
            sentence="-"
            image="team/jp.jpg"
          />
          <MemberBox
            role="Vice-Président"
            name="Julien Ourny"
            contact="+41 76 616 17 74"
            sentence="-"
            image="team/adrien-ourny.png"
          />
          <MemberBox
            role="Responsable Interclub"
            name="Adrien Ourny"
            contact="+41 76 616 17 75"
            sentence=""
            image="team/adrien-ourny.png"
          />
           <MemberBox
            role="Entraineur Junior I"
            name="Guillaume Juillerat"
            contact="+41 79 719 39 81"
            sentence=""
            image="team/guillaume.jpg"
          />
          <MemberBox
            role="Entraineur Junior II"
            name="Jérémy Apostolides"
            contact="+41 78 607 29 55"
            sentence=""
            image="team/jeremy.png"
          />
          <MemberBox
            role="Entraineur Junior III"
            name="Jonathan Vouilloz"
            contact="+41 78 944 77 07"
            sentence=""
            image="team/jonathan.png"
          />
          <MemberBox
            role="Entraineur Junior IV"
            name="Jonas Garazi"
            contact="+41 76 544 22 32"
            sentence=""
            image="team/jonas.png"
          />
          <MemberBox
            role="Entraineur Adultes"
            name="Arnaud Ritz"
            contact="+41 78 883 25 83"
            sentence=""
            image="team/arnaud.jpg"
          />     
        </div>
      </div>
    </div>
  )
}

export default team
