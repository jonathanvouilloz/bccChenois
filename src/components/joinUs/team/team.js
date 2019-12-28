import React from "react"
import MemberBox from "./membreBox"
import Title from "../../styledComponents/titleStyled"
import styles from "./team.module.css"


const team = () => {
  return (
    <div class={styles.main}>
      <div className="container is-centered">
        <div className="container has-text-centered">
          <Title title="L'" subtitle="équipe" />
        </div>
        <div className="container columns is-multiline">
        <MemberBox role="Président" name="Jean-Philippe ETTER" sentence="Je suis un enfant handicapé je vous souhaite la bienvenue en turquie yes." />

        <MemberBox role="Vice-Président" name="Jean-Philippe" sentence="Je suis un enfant handicapé je vous souhaite la bienvenue en turquie yes." />

          <MemberBox role="Coach Responsable IC et JS" name="Jean-Philippe" sentence="Je suis un enfant handicapé je vous souhaite la bienvenue en turquie yes." />
          <MemberBox role="Trésorière" name="Carlos le bg" sentence="Salut les amis c'est Carlitos on prie pour vous et pour vos jambes tous les jours" />
        </div>
      </div>
    </div>
  )
}

export default team
