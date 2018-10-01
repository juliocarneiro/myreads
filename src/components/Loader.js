import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
  text-align: center;
  margin-top: 15%;
  font-size: 18px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Spinner = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: 0 auto ;
  float: none ;
  margin-bottom:20px;
  border: 10px solid black;
  border-top: 10px solid white;
`
const Loader = (props) => {
  return(
    <Loading className="load animated fadeIn">
      <Spinner/>
      <p style={{color: `${props.color}`}}>{props.title}</p>
    </Loading>
  )
}

export default Loader