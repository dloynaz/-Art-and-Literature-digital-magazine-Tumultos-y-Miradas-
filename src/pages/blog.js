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
  return (
    <Layout>
      <Head title="Blogs" />
      <h1 className={blogStyles.title}>Derrumbes en la vía,</h1>
      <ol className={blogStyles.posts}>
        {edges.map(item => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${item.node.slug}`}>
                <div className={blogStyles.textContainer}>
                  <h2>{item.node.title}</h2>
                  <p>{item.node.publishedDate}</p>
                </div>
                <div className={blogStyles.imgContainer}>
                  {item.node.cover ? <img src={item.node.cover.file.url}></img> : <img src="https://i.pinimg.com/564x/85/aa/df/85aadfc71570dc4ddefd7481c1a34265.jpg"></img>}
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage