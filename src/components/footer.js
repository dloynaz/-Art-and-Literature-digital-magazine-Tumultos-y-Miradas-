import React from 'react'

import {useStaticQuery, graphql} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }`)

    return(
        <footer className={footerStyles.footer}>
          <p style={{textAlign: "center", fontSize: '0.5rem' }}> COPYRIGHT © TODOS LOS DERECHOS RESERVADOS - 2020 - {data.site.siteMetadata.author.toUpperCase()}</p>
        </footer>
    )
}

export default Footer