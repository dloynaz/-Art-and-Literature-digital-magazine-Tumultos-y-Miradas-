import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Word from '../components/word'


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
    contentfulIndexImg {
      img00 {
        file {
          url
        }
      }
      img01  {
        file {
          url
        }
      }
      img02  {
        file {
          url
        }
      }
      img03  {
        file {
          url
        }
      }
      img04  {
        file {
          url
        }
      }
      img05  {
        file {
          url
        }
      }
      img06  {
        file {
          url
        }
      }
      img08  {
        file {
          url
        }
      }
      img09  {
        file {
          url
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
    }, 3000)

    return () => clearTimeout(timer);

  }, [])




  let id = 0


  function declareImgSrc() {
    let today = new Date()
    today = today.getDate().toString()
    if(today[1] === "7" || today === "7"){
      setImgSrc(data.contentfulIndexImg[`img08`].file.url)
    } else {
      if(!today[1]){
        setImgSrc(data.contentfulIndexImg[`img0${today}`].file.url)
      } else {
        setImgSrc(data.contentfulIndexImg[`img0${today[1]}`].file.url)
      }
    }
  }


  return (
    <div>
      <Head title="Inicio" />
      <div className={indexStyle.header}>
        <div className={indexStyle.headerText}>
          <h1 className={indexStyle.title} style={opacity}>La apoteosis</h1>
          <h2 className={indexStyle.description} style={opacity}>se encuentra en ese punto vacilante de dimensiones <Word /> </h2>
        </div>
        <div style={opacity} className={indexStyle.headerImgContainer}>
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