import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Word from '../components/word'

import {
  Img00,
  Img01,
  Img02,
  Img03,
  Img04,
  Img05,
  Img06,
  Img07,
  Img08,
  Img09

} from '../assets/indexImg'

import Head from '../components/head'

import { graphql, useStaticQuery } from 'gatsby'

import indexStyle from './index.module.scss'

import '../components/style.css'



const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost  (
      sort: {
      fields: publishedDate,
      order: DESC
     }
      limit: 3
   ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
          cover {
            file {
              url
            }
          }
        }
      }
    }
  }
  `)

  const edges = data.allContentfulBlogPost.edges

  const [opacity, setOpacity] = useState({
    opacity: "0"
  })

  const [imgSrc, setImgSrc] = useState("")




  useEffect(() => {

    declareImgSrc()


    const timer = setTimeout(() => {
      setOpacity({
        opacity: "1"
      })
    }, 1000)

    return () => clearTimeout(timer);

  }, [])




  let id = 0


  function declareImgSrc() {
    let today = new Date()
    today = today.getDate().toString()
    let imgArray = [
      Img00,
      Img01,
      Img02,
      Img03,
      Img04,
      Img05,
      Img06,
      Img07,
      Img08,
      Img09
    ]
    setImgSrc(imgArray[today[1]])
  }


  return (
    <div>
      <Head title="Home" />
      <div className={indexStyle.header}>
        <div className={indexStyle.headerText}>
          <h1 className={indexStyle.title} style={opacity}>Bienvenida, </h1>
          <h2 className={indexStyle.description} style={opacity}>vigoréxica frente a un ventilador de dimensiones <Word /> </h2>
        </div>
        <div  style={opacity} className={indexStyle.headerImgContainer}>
          <img src={imgSrc}></img>
        </div>
      </div>
      <section className={indexStyle.externalContainer} style={opacity}>
        {
          edges.map(edge => {
            id++
            return (
              <Link className={`${indexStyle.container}`} to={`/blog/${edge.node.slug}`} id={`element${id}`} key={id}>
                <h1 className={indexStyle.containerTitle}>
                  {edge.node.title}
                </h1>
                <div className={indexStyle.containerBoxImg}>
                  <img
                    className={indexStyle.containerImg}
                    alt={edge.node.title}
                    src={edge.node.cover.file.url}
                  >
                  </img>
                </div>
              </Link>
            )
          })
        }
      </section>
    </div>
  )
}

export default IndexPage