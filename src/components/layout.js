import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

import './style.css'

import solid from "../assets/videoB.webm"

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <video
        loop
        autoPlay
        className={layoutStyles.videoA}
        muted
        id="videoIdA"
      >
        <source src={solid} type='video/mp4' />
      </video>
      <video
        loop
        autoPlay
        className={layoutStyles.videoB}
        muted
        id="videoIdB"
      >
        <source src={solid} type='video/mp4' />
      </video>
      <Footer />
    </div>
  )
}

export default Layout