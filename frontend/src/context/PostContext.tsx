import * as React from 'react';

//import React, { createContext, useState } from 'react';
// import PostList from '../components/PostList';

export const PostContext = React.createContext()

const PostContextProvider: React.FC = (props) => {
    const [posts, setPosts] = React.useState([
        {   user: 1,
            title: "Test Title",
            text: "test text",
            date: "November 15, 1955",
            id: 1
        },
        {
            user: 1,
            title: "Test Title2",
            text: "test text2",
            date: "November 15, 1956",
            id: 2
        },
        {
            user: 1,
            title: "Test Title3",
            text: "test text3",
            date: "November 15, 1957",
            id: 3
        }
    ]);

    return (
        <PostContext.Provider value={{posts}}>
            {props.children}
        </PostContext.Provider>
    )
}
// api in context
export default PostContextProvider;