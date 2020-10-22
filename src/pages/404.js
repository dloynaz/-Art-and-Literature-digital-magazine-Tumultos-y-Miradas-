import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'


const NotFound = () => {
    return (
    <div>
    <Head title="404"/>
      <h1>404 - Página no encontrada</h1>
      <p><Link to="/">Ir a inicio</Link></p>
    </div>
    )
}

export default NotFound
