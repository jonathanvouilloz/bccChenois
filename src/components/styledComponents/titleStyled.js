import React from 'react'
import styled from 'styled-components'

const titleStyled = ({title, subtitle, primary}) => {
    return (
        <Title>
            <h4>
                <span  className={primary ? "title" : "subtitle"}>{title}</span>
                <span>&nbsp;</span>
                <span className={primary ? "subtitle" : "title"}>{subtitle}</span>
            </h4>
        </Title>
    )
}

const Title = styled.div`
    text-transform:uppercase;
    .subtitle{
        color:var(--primaryColor);
        font-size:2.5rem;
        border-color:var(--primaryColor);
    border-style:solid;
  border-width: 0px 0px 3px 0px;
  transition: all .2s ease-in;
    }
    .title{
        color:var(--mainBlack);
        font-size:2.5rem;
        border-color:var(--mainBlack);
   
    }
    h4{
        font-size:2.5rem;
    }


    @media (max-width: 768px) {
        .title, .subtitle {
            margin:auto;
            font-size:2.3rem;
            display:inline-block;
        }
    }

    margin: 2.5rem 0.5rem;
    `

export default titleStyled
