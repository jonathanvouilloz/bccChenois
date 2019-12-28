import React from 'react'
import Layout from "../components/layout/layout"
import Team from '../components/joinUs/team/team'
import AboutUs from '../components/joinUs/about/about'
import Salles from '../components/joinUs/salles/salles'
import Divider from "../components/styledComponents/dividerV2"



const infos = () => {
    return (
        <Layout>
            <AboutUs />
            <Divider />
            <Team />
            <Divider />
            <Salles />       
        </Layout>
    )
}

export default infos
