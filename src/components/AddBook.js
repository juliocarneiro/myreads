import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import addIcon from '../icons/add.svg'

const AddBookStyle = styled.div`
    position: fixed;
    right: 25px;
    bottom: 25px;
  a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: black; 
    background-image: url('${addIcon}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 0;
  }
`
const AddBook = () => {
    return(
        <AddBookStyle>
            <Link to="/search">Add  a book</Link>
        </AddBookStyle>
    )
}

export default AddBook