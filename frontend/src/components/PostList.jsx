import React, {useContext} from 'react';
import { PostContext} from '../context/PostContext';
import Post from './Post';

const PostList = () => {
    const { posts } = useContext(PostContext);
    return (
        <div>
            <ul className="posts-list">
                {posts.map(post => {
                    return <Post post={post} key={post.user}/>
                })}

            </ul>
        </div>
    )
}

export default PostList
