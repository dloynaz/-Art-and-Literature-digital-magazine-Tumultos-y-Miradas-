import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'

import aboutStyle from './about.module.scss'



const AboutPage = () => {
  const data = useStaticQuery(graphql`
  query { 
    allContentfulAuthor{
      edges {
        node {
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)

  const edges = data.allContentfulAuthor.edges
  console.log(edges)
  return (
    <div style={{overflow: "hidden"}}>
      <Head title="Nosotros" />
      <div className={aboutStyle.carousel}>
      {
        edges.map(item => {
          return(
            <div  className={aboutStyle.assetsContainer}>
              <img src={item.node.photo.file.url} className={aboutStyle.carouselAssets} ></img>
            </div>
          )
        })
      }
      </div>
      <h1>LA GRISALLA DEL A-BURRO-Y-MIENTO</h1>
      <p>Si un imperativo nos persigue ¿cómo llamarlo? ¿El imperativo hedónico, el imperativo del aburrimiento, el imperativo de la parranda, el imperativo de la estupidez, el imperativo del autosabotaje y la parodia…? Todo impera hacia una misma condición: la “aburrida absurdidad” del “Homo Ludens Posthistórico”. Sin convicciones, sin objetivos, sin obligaciones, el hombre y la mujer posthistóricos se aburren mortalmente en un ruinoso Edén, Edén, Edén. Sin embargo, este fin de la historia, que suena siempre a cuento que no acaba, no acabó: Todo es vivencia pero quizá sea la vivencia el elemento en el que muere el arte. <i>La muerte avanza tan lentamente que precisa varios siglos para consumarse. </i>(Heidegger). En esa consumación estamos y en esa posibilidad nos discutimos. Pero de pronto un nuevo horizonte especular se abre: la virtualidad comienza a abrir ese mundo sumido en el aburrimiento hacia una nueva arena de juego. La virtualidad abre un nuevo desierto donde, si bien seguimos aburridos, el aburrimiento cobra un sentido que nos supera. Sin embargo, arrastramos ya tantos finales que las energías se agotan y de ahí que el imperativo consista en una evasión de la realidad, en un derrotismo perfecto que no permita ya comprender, ni ver, ni escuchar, ni callar, ni hacer, ni pensar, esto es; la inercia solar. Nos regocijamos de impotencia y prefijos póstumos…</p>
    </div>
  )
}

export default AboutPage