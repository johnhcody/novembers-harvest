import React from 'react'
import '../stylesheets/application.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import Header from './Header';
import PostContextProvider from '../context/PostContext';



const App: React.FC = () => {
    return (
        <PostContextProvider>
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path='/' component={PostList} />
                    </Switch>            
            </BrowserRouter>
        </PostContextProvider>
    )
}

// can contain all state in one context, or create a separate store

export default App
