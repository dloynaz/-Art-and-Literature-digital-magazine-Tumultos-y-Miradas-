import React, { useEffect, useState } from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faBars, faPersonBooth } from '@fortawesome/free-solid-svg-icons'

import headerStyles from './header.module.scss'

import './style.css'

const Header = React.memo(() => {
    const data = useStaticQuery(graphql`
      query {
        site  {
            siteMetadata {
                title
            }
        
          }
      }
    `)


    const [navPosition, setNavPosition] = useState({
        right: "-225px"
    })

    const [barRotation, setBarRotation] = useState({
        transform: "rotate(0deg)"
    })

    const [coffeePosition, setCoffeePosition] = useState({
        opacity: "0",
        transition: "1s",
        transform: "translate(0px)"
    })

    const [navZindex, setNavZindex] = useState({
        zIndex: "-1"
    })

    useEffect(() => {
  
        const timer = setTimeout(() => {
            setCoffeePosition({
                opacity: "1",
                transition: "1s",
                transform: "translate(0px)"
          })
        }, 3000)
    
        return () => clearTimeout(timer);
    
      }, [])


    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (navPosition.right === "0") {
            const timer = setTimeout(() => {
                setNavZindex({
                    zIndex: "-1"
                })
            }, 1000)

            setNavPosition({
                right: "-225px"
            })
            setBarRotation({
                transform: "rotate(0deg)"
            })
        } else {
            setNavZindex({
                zIndex: "5"
            })
            setNavPosition({
                right: "0"
            })
            setBarRotation({
                transform: "rotate(90deg)"
            })
        }
    }

    function handlePositionCoffee(arg) {
        if (navPosition.right === "0") {
            setNavPosition({
                right: "-225px"
            })
            const timer = setTimeout(() => {
                setNavZindex({
                    zIndex: "-1"
                })
            }, 1000)
            setBarRotation({
                transform: "rotate(0deg)"
            })

        } else {
            setNavZindex({
                zIndex: "5"
            })
            setNavPosition({
                right: "0"
            })
            setBarRotation({
                transform: "rotate(90deg)"
            })
        }
        switch (arg) {
            case "Inicio":
                setCoffeePosition({
                    transition: "1s",
                    transform: "translate(0px)"
                })
                break
            case "Articulos":
                setCoffeePosition({
                    transition: "1s",
                    transform: "translate(72px)"
                })
                break
            case "About":
                setCoffeePosition({
                    transition: "1s",
                    transform: "translate(166px)"
                })
                break
            case "Contact":
                setCoffeePosition({
                    transition: "1s",
                    transform: "translate(262px)"
                })
                break
        }

    }



    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container}>
                <h1 className={headerStyles.title}>
                    <Link to="/" className={headerStyles.titleLink} onClick={handleClick} onClick={() => handlePositionCoffee("Inicio")}>
                        <i>{data.site.siteMetadata.title}</i>
                    </Link>
                </h1>
                <FontAwesomeIcon icon={faBars} className={headerStyles.bar} onClick={handleClick} style={barRotation} />
            </div>
            <FontAwesomeIcon style={coffeePosition} icon={faPersonBooth} className={headerStyles.coffee} />
            <nav className={headerStyles.navListContainer} style={navZindex}>
                <ul className={headerStyles.navList} style={navPosition} >
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  onClick={() => handlePositionCoffee("Inicio")} to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  onClick={() => handlePositionCoffee("Articulos")} to="/articulos">Articulos</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  onClick={() => handlePositionCoffee("About")} to="/nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  onClick={() => handlePositionCoffee("Contact")} to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
});

export default Header