//import React, {useContext} from 'react';
import * as React from 'react';
import { PostContext} from '../context/PostContext';
import Post from './Post';

const PostList: React.FC = () => {
    const { posts } = React.useContext(PostContext);
    return (
        <div>
            <ul className="posts-list">
                {posts.map(post => {
                    return <Post post={post} />
                })}

            </ul>
        </div>
    )
}

export default PostList
