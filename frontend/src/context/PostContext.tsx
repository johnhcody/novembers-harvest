import * as React from 'react';

//import React, { createContext, useState } from 'react';
// import PostList from '../components/PostList';

export const PostContext = React.createContext()

const PostContextProvider: React.FC = (props) => {
    const [posts, setPosts] = React.useState([
        {   user: '',
            title: '',
            text: '',
            date: '',
        }
    ]);

    const addInput = (field, input) => {
        setPosts([...posts, {[field]: input}]);
    }

    return (
        <PostContext.Provider value={{posts, addInput}}>
            {props.children}
        </PostContext.Provider>
    )
}

interface IPost {
    user: number
    title: string
    text: string
    date: string
}


type ContextType = {
    posts: IPost[]
    savePost: (post: IPost) => void
    updatePost: (id: number) => void
}
// api in context
export default PostContextProvider;