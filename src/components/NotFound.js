import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const NotFoundStyle = styled.div`
  text-align:center;
  a{
    background:black;
    color:white;
    padding:10px 25px;
    fontSize:12px; 
    text-decoration:none;
  }
`
const NotFound = () => {
  return (
    <NotFoundStyle className="animated fadeIn">
      <h2>Page not found - 404</h2>
      <Link to="/">Back</Link>
    </NotFoundStyle>
  )
}

export default NotFound