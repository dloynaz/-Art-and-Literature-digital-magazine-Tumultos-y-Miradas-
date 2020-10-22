import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

import './style.css'

import solid from "../video.mp4"

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
        className={layoutStyles.video}
        muted
        id="myVideo"
      >
        <source src={solid} type='video/mp4' />
      </video>
      <Footer />
    </div>
  )
}

export default Layout