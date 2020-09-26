import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>This is my contact page</h1>
            <p>If you want to build something awesome please send me an e-mail to <a href="mailto:davidloynazdev@gmail.com">davidloynazdev@gmail.com</a></p>
            <p>or find me on my <a href="https://www.linkedin.com/in/david-loynaz-52b6251b2/" target="_blank">linkedin profile</a></p>

        </Layout>
    )
}

export default ContactPage