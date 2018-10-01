import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const BookShelfStyle = styled.div`
    padding: 0 10px 20px;
    @media (min-width: 600px) {
        .bookshelf {
        padding: 0 20px 40px;
        }
    }
    .bookshelf-title {
        border-bottom: 1px solid #dedede;
    }
    .bookshelf-noresults{
        text-align:center;
    }
`
const Shelf = (props) => {
    const { title, books, onShelfChange } = props
    return(
        <BookShelfStyle className="animated fadeIn">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                {books.length !== 0 ? 
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            <Book key={index} book={book} onShelfChange={onShelfChange} />
                        ))}
                    </ol> : <p className="bookshelf-noresults animated fadeIn">No results...</p>
                }
            </div>
        </BookShelfStyle>
    )
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Shelf