import React from 'react'

import Layout from '../components/layout'

import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
      fields: publishedDate,
      order: ASC
     }
   ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
    `)
  const edges = data.allContentfulBlogPost.edges
  return (
    <Layout>
    <Head title="Blogs"/>
      <h1>My Blog</h1>

      <ol className={blogStyles.posts}>
        {edges.map(item => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${item.node.slug}`}>
                <h2>{item.node.title}</h2>
                <p>{item.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage