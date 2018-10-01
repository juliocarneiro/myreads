import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

import Shelf from './Shelf'
import Loader from './Loader'

export default class BookShelf extends Component {
    state = {
        books: [],
        loading: true
    }
    
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books: books,
                loading: false
            })
        })
    }

    onShelfChange = (book, shelf) => {
        const id = book.id
        const currentBooks = [...this.state.books]
        const indexToUpdate = currentBooks.findIndex(book => book.id === id)
        const newBookToUpdate = Object.assign({}, currentBooks[indexToUpdate], {
            shelf: shelf
        })
        this.setState({
            books: [...currentBooks.slice(0, indexToUpdate), newBookToUpdate, 
            ...currentBooks.slice(indexToUpdate + 1)]
        })
        BooksAPI.update(book, shelf)
    }

    render() {
        const { books } = this.state
        let currentList = [];
        let wantList = [];
        let readList = [];

        books.forEach(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    currentList.push(book)
                    break
                case 'wantToRead':
                    wantList.push(book)
                    break
                case 'read':
                    readList.push(book)
                    break
                default:
                    break
            }
        })
        
        const shelfList = [
            {
                name: 'Currently Reading',
                books : currentList
            },
            {
                name: 'Want To Read',
                books : wantList
            },
            {
                name: 'Read',
                books : readList
            }
        ]

        return(
            <div className="list-books-content">
            {
                this.state.loading ? <Loader color="black" title="Loading..." />
                : 
                <div>
                    {shelfList.map((shelf, index) => (
                    <Shelf
                        key={index} 
                        title={shelf.name}
                        books={shelf.books} 
                        onShelfChange={this.onShelfChange}/>
                    ))}
                </div>
            }
            </div>
        )
    }
}