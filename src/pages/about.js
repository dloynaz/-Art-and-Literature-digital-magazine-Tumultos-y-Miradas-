import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'

import Head from '../components/head'


const AboutPage = () => {
  return (
    <Layout>
      <Head to="About" />
      <h1>This is my Bio</h1>
      <p>Here it will go my bio</p>
      <p><Link to="/contact">Want to work with me? Contact me!</Link></p>

    </Layout>
  )
}

export default AboutPage