import * as React from 'react';
import { PostContext } from '../context/PostContext';
import Post from './Post';
import { createPost } from '../../actions/PostActions';

export {}
const PostForm: React.FC = () => {
    const { posts } = React.useContext(PostContext);
    const { value, bind, reset, submit } = createPost('');


    interface IPost {
        user: number
        title: string
        text: string
        date: string
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(e.currentTarget.value);
        reset();
    }


    return (
        <PostContext.Consumer>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title
                    <input type="text" {...bind} />
                    </label>
                    <textarea {...bind}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </PostContext.Consumer>
    )
}

export default PostForm;