import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import Head from '../components/head'

import templateStyle from './template.module.scss'

import './style.css'


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      author
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
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) - 825;
    var position = Math.floor(window.scrollY) - limit
    if(Number.isInteger(position / 5)){
      const newWidth = (Math.abs(position) * 50) / limit
      setWidth(`${newWidth}%`)
    }
  }

  useEffect(() => {
    listener()
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [])




  return (
    <Layout style={{ width: "fit-content" }}>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      <p className={templateStyle.author}>Autor: {props.data.contentfulBlogPost.author}</p>
      <ReadingBar width={width}/>
    </Layout>
  )
}

export default Blog