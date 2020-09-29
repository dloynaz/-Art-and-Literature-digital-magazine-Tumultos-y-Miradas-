import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
      query {
        site  {
            siteMetadata {
                title
            }
        
          }
      }
    `)



    return (
        <header className={headerStyles.header}>
            <h1>
              <Link to="/" className={headerStyles.title}>
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/blog">Articulos</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/about">Nosotros</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/contact">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header