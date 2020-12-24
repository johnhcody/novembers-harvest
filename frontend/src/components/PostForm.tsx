import * as React from 'react';
import { PostContext } from '../context/PostContext';
import Post from './Post';
import { createPost } from '../../actions/PostActions';

export {}
const PostForm: React.FC = () => {
    const { posts } = React.useContext(PostContext);
    const { value, bind, setValue } = createPost('');


    interface IPost {
        user: number
        title: string
        text: string
        date: string
    }



    return (
        <PostContext.Consumer>
            <div>
                <form>
                    <label htmlFor="post-title">Title</label>
                    <input type="text" name="post-title" id="" value="post-title" />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </PostContext.Consumer>
    )
}

export default PostForm;