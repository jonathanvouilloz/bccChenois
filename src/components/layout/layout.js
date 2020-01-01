import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import './layout.css'

const layout = ({children}) => {
    return (
        <div className="bodyPage">
            <Header />
            <main className="mainCOlor">{children}</main>
            <Footer />
        </div>
    )
}

export default layout
