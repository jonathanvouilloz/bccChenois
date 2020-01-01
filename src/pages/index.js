import React from "react"
import Layout from "../components/layout/layout"
import "./globalStyle.scss"
import Hero from '../components/home/hero/hero'
import SEO from "../components/seo/seo"
import Resultats from "../components/resultats/resultats"
import TitleStyled from "../components/styledComponents/titleStyled"

export default () => 
        <Layout>
            <SEO titleD="Accueil" descriptionD="Le badminton club Chênois vous souhaite la bienvenue sur son site web. Retrouvez toute notre actualité, les informations oncernant l'inscription et les séance d'essai ou encore les salles à disposition du club" />
            <Hero />
            <div className="container has-text-centered"> 
            <TitleStyled title="Derniers" subtitle="interclub" /></div>
        
            <Resultats />
        </Layout>
