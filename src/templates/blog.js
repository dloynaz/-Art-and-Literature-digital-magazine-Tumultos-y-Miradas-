import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'

import Head from '../components/head'

import templateStyle from './template.module.scss'

import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      author
      authorPhoto {
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
  `

const ReadingBar = styled.div`
  width: ${props => props.width};
  background-color: Chartreuse;
  height: 15px;
  bottom: 0px;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  transition:1s;
  `


const Blog = (props) => {

  const [width, setWidth] = useState("50%")

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  const listener = () => {

    var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - 800;
    var position = Math.floor(window.scrollY) - limit
    if (Number.isInteger(position / 5)) {
      const newWidth = (Math.abs(position) * 50) / limit
      setWidth(`${newWidth}%`)
    }
  }

  useEffect(() => {
    const videoA = document.querySelector("#videoIdA")
    const videoB = document.querySelector("#videoIdB")
    videoA.playbackRate = 0.1;
    videoB.playbackRate = 0.1;
    listener()
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
      videoA.playbackRate = 1;
      videoB.playbackRate = 1;
    };
  }, [])




  return (
    <div style={{ width: "fit-content" }}>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/articulos" className={templateStyle.button}><FontAwesomeIcon icon={faAngleLeft} className={templateStyle.icon} /><span>Articulos</span></Link>
        <Link to="/nosotros" className={templateStyle.author}> <div className={templateStyle.authorImgContainer} ><img src={props.data.contentfulBlogPost.authorPhoto.file.url}></img></div><span>{props.data.contentfulBlogPost.author}</span></Link>
      </div>
      <ReadingBar width={width} />

    </div>
  )
}

export default Blog