import React from 'react'
import '../stylesheets/application.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import Header from '../components/Header';
import PostContextProvider from '../context/PostContext';



const App = () => {
    return (
        <PostContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PostList} />
                    <Route exact path="/header" component={Header} />
                </Switch>            
            </BrowserRouter>
        </PostContextProvider>
    )
}

// can contain all state in one context, or create a separate store

export default App
