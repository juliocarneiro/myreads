import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrowDropdownIcon from '../icons/arrow-drop-down.svg'

const BookStyle = styled.div`
    width: 140px;
    margin:10px 15px;
    .book-top {
        position: relative;
        height: 200px;
        display: flex;
        align-items: flex-end;
    }
    .book-shelf-changer {
        position: absolute;
        right: 0;
        bottom: -10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: black; 
        background-image: url("${arrowDropdownIcon}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 20px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    .book-shelf-changer select {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
    .book-cover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background: #eee;
    }
    .book-cover-title {
        padding: 20px 10px 0;
        text-align: center;
        font-size: 0.8em;
    }
    .book-title,
    .book-authors {
        font-size: 0.8em;
    }
    .book-title {
        margin-top: 10px;
    }
    .book-authors {
        color: #999;
    }
`
const Book = (props) => {
     const { book, onShelfChange } = props
    const noThumb = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
    return(
        <BookStyle className="animated fadeIn">
            <div className="book-top">
                <div 
                    className="book-cover" 
                    style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noThumb})`}}>                        
                </div>
                <div className="book-shelf-changer">
                    <select 
                        onChange={e => onShelfChange(book, e.target.value)}
                        value={book.shelf ? book.shelf : ''}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title ? book.title : null}</div>
            <div className="book-authors">{book.authors ? book.authors.join(',') : null}</div>
        </BookStyle>
    )
}

Book.propType = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func
}

export default Book