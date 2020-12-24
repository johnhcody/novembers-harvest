//import React, {useContext} from 'react';
import * as React from 'react';
import { PostContext} from '../context/PostContext';
import Post from './Post';
import PostForm from './PostForm';

interface IPost {
    user: number
    title: string
    text: string
    date: string
}

const PostList: React.FC = () => {
    const { posts } = React.useContext(PostContext);
    return (
        <div>
            <ul className="posts-list">
                {posts.map(post => {
                    return <Post post={post} />
                })}

            </ul>
            <PostForm />
        </div>
    )
}

export default PostList
