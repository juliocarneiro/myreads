import React from 'react'

import BookShelf from './BookShelf'
import AddBook from './AddBook'

import styled from 'styled-components'

const ListBooksStyle = styled.div`
    .list-books-title {
        padding: 10px 0;
        background: black;
    }
    .list-books-title h1 {
        font-weight: 400;
        margin: 0;
        color: white;
        text-align:center;
    }
    .list-books-content {
        padding: 0 0 80px;
        flex: 1;
    }
`
const BookList = () => {
    return(
        <ListBooksStyle className="animated fadeIn">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelf /> 
            <AddBook />
        </ListBooksStyle>
    )
}

export default BookList