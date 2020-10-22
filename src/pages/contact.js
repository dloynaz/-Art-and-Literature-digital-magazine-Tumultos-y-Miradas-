import React, { useEffect } from 'react'

import Head from '../components/head'

import contactStyle from './contact.module.scss'

const ContactPage = () => {


    return (
        <div>
            <Head title="Contact" />
            <div className={contactStyle.box}>
                    <div className={contactStyle.box1}><h1></h1></div>
                    <div className={contactStyle.box2}><h1></h1></div>
                    <div className={contactStyle.box3}><h1></h1></div>
                    <div className={contactStyle.box4}><h1></h1></div>
                    <div className={contactStyle.box5}><h1></h1></div>
                    <div className={contactStyle.box6}><h1></h1></div>
                    <p><a href="mailto:davidloynazdev@gmail.com" className={contactStyle.email}>dloynaz@hotmail.com</a></p>
            </div>
           
        </div>
    )
}

export default ContactPage