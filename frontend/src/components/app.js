import React from 'react'
import '../stylesheets/main.scss';
import PostList from './PostList';
import PostContextProvider from '../context/PostContext';


const App = () => {
    return (
        <PostContextProvider>
            <div>
                <PostList />
            </div>
        </PostContextProvider>
    )
}

export default App
