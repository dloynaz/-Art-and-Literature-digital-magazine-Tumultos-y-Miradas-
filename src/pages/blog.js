import React, { useForm, useEffect, useState } from 'react'


import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from './blog.module.scss'

import Head from '../components/head'



const BlogPage = () => {


  const [opacity, setOpacity] = useState({
    transition: "1s",
    opacity: "0"
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity({
        transition: "1s",
        opacity: "1"
      })
    }, 1000)
    return () => clearTimeout(timer);
  }, [edges])

  let data = {
    allContentfulBlogPost: {
      edges: {
        node: {
          title: "Loading",
          publishedDate: "Loading",


        }
      }
    }
  }

  data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
      fields: publishedDate,
      order: DESC
     }
   ) {
      edges {
        node {
          author
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
  let edges = data.allContentfulBlogPost.edges

  const handleChange = (data) => {
    console.log(data)
    const regex = new RegExp(data, "gi");
    edges = edges.filter(edge => {
      return edge.node.author.match(regex)
    })
    
  }


  return (
    <div>
      <Head title="Blogs" />
      <form >
        <input className={blogStyles.search} type={"text"} placeholder="Buscar por autor" onChange={handleChange}></input>
      </form>
      <ol className={blogStyles.posts}>
        {edges.map(item => {
          return (
            <li className={blogStyles.post} style={opacity}>
              <Link to={`/blog/${item.node.slug}`} className={blogStyles.link}>
                <div className={blogStyles.textContainer}>
                  <h2>{item.node.title}</h2>
                  <p style={{ fontSize: "0.9rem" }}>{item.node.author}</p>
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
    </div>
  )
}

export default BlogPage