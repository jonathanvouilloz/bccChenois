import React from 'react'
import Layout from "../components/layout/layout"
import CoursJunior from "../components/informations/cours/coursJunior"
import Divider from "../components/styledComponents/dividerV2"
import CoursAdule from "../components/informations/cours/coursAdulte"
import Inscription from "../components/informations/formulaire/formulaireInscription"


const joinUs = () => {
    return (
        <Layout>
            <CoursJunior />
            <Divider />
            <CoursAdule />
            <Divider />
            <Inscription />
        </Layout>
    )
}

export default joinUs