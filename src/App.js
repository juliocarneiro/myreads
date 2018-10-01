import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import NotFound from './components/NotFound'

export default class BooksApp extends Component {
    render() {
        return(
            <div className="app">
                <Switch>
                    <Route path="/" exact component={BookList} />
                    <Route path="/search" component={BookSearch} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}