import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import Loader from './Loader'
import * as BooksAPI from '../BooksAPI'

import styled from 'styled-components'
import arrowBack from '../icons/arrow-back.svg'

const SearchBooksStyle = styled.div`
  .search-books-input-wrapper {
    flex: 1;
    background: #e9e;
  }
  .search-books-bar input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
  .search-books-results {
    padding: 80px 10px 20px;
  }
  .search-books-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
  }
  .close-search {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background: white;
    background-image: url("${arrowBack}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
  }
`
export default class BookSearch extends Component {
    state = {
      loading: true,
      currentBooks: [],
      books: [],
    }

    componentDidMount() {
      BooksAPI.getAll()
        .then(books => {
          const booksId = books.map(book => ({ id: book.id,shelf: book.shelf }))
          this.setState({ currentBooks: booksId, loading: false })
        })
    }

    onSearch = (e) => {
      const value = e.target.value
      if(value) {
        BooksAPI.search(value).then(books => {
          if(!books || books.hasOwnProperty('error')) {
            this.setState({ books: [] })
          } else {
              this.setState({ books: books })
          }  
        })
      } else {
        this.setState( { books: [] })
      }
    }

    onShelfChange = (book, shelf) => {
      const newBooks = []
      BooksAPI.update(book, shelf)
        .then(books => {
          Object.keys(books).forEach(shelf => { 
            return books[shelf].map(id => ({
              id: id, shelf: shelf
            })).forEach(book => { 
              newBooks.push(book)
            })
          })
          return newBooks
        })
        .then(newBooks => {
          this.setState({ currentBooks: newBooks })
        })
    }
 
    render() {
        const { books, currentBooks } = this.state
        let booksList

        if (books.length > 0) {
          booksList = books.map((book, index) => {
            currentBooks.forEach(currentBook => {
              if(currentBook.id === book.id) {
                book.shelf = currentBook.shelf
              }
            })
            return (
              <li key={index} className="animated fadeIn">
                <Book
                  onShelfChange={this.onShelfChange}
                  book={book} />
              </li>
            ) 
          })
        } else {
          booksList = null
        }
        return(
          <SearchBooksStyle className="animated fadeIn">
            {
              this.state.loading ? <Loader color="black" title="Loading..." />
              : 
              <div>
                <div className="search-books-bar animated fadeIn">
                  <Link to="/" className="close-search">Back</Link>
                  <div className="search-books-input-wrapper">
                    <input 
                      type="text" 
                      onChange={this.onSearch}
                      placeholder="Search by title or author"/>
                  </div>
                </div>
                <div className="search-books-results animated fadeIn">
                  <ol className="books-grid">
                  {
                    booksList ? booksList : 
                    <p className="animated fadeIn">No results...</p>
                  }
                  </ol>
                </div>
              </div>
            }
          </SearchBooksStyle>
        )
    }
}