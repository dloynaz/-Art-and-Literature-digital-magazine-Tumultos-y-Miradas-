import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'

import aboutStyle from './about.module.scss'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


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
    <div>
      <Head to="About" />
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
      <h1>Praesent dignissim</h1>
      <p>Integer quis augue convallis, condimentum dolor at, varius libero. Etiam vitae cursus metus, a placerat lacus. Aliquam congue, nulla quis malesuada gravida, risus eros gravida nisl, ac interdum est ligula non nisl. Phasellus sapien orci, vehicula in dolor ac, scelerisque scelerisque mi. Suspendisse ut nibh quis elit placerat interdum id in dui. Quisque ullamcorper leo non sapien condimentum, at scelerisque lorem pellentesque. In viverra sodales eros, vulputate tincidunt erat posuere tempus. Donec ut mauris semper, tempor eros non, accumsan augue. Integer id risus commodo, malesuada est sit amet, accumsan orci. Vivamus ultrices lacus id justo tristique, sed lacinia libero accumsan.
      Vivamus sit amet molestie urna, ut tristique lectus. Nulla quis lectus ullamcorper, fringilla enim sit amet, iaculis turpis. Etiam convallis elit congue accumsan tempor. Fusce pellentesque augue at augue semper, et maximus ipsum congue. Ut id urna pulvinar, pretium nulla sollicitudin, malesuada turpis. In quis augue accumsan, interdum lorem ac, scelerisque augue. Mauris nec varius odio. Integer molestie ipsum vitae enim tempor malesuada. Integer quis dolor nec libero facilisis pellentesque. Integer feugiat dictum dictum.
      Vivamus in tristique mauris. Praesent dignissim urna tellus, in laoreet nisl tincidunt vitae. Nunc imperdiet pretium ante, ac aliquet diam suscipit ac. Integer viverra eleifend leo sed malesuada. Integer velit leo, egestas eu orci quis, ornare commodo sem. Praesent sollicitudin mi a sem sagittis ullamcorper. In consequat in lectus eget pulvinar. Duis sagittis, magna in mollis porttitor, arcu eros egestas nisl, et dapibus odio metus ut nisl. In cursus metus eu diam tempor aliquam. Donec vel tempor felis, nec sagittis augue.</p>
    </div>
  )
}

export default AboutPage