import * as React from 'react';
import { PostContext } from '../context/PostContext';
import Post from './Post';
import { usePost, createPost } from '../actions/PostActions';

export {}
const PostForm: React.FC = () => {
    const { posts, setPosts, addInput } = React.useContext(PostContext);
    const { value, handleChange, reset } = usePost({ title: '', text: '' });


    interface IPost {
        user: number
        title: string
        text: string
        date: string
    }
    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        createPost({title: e.target[0].value, text: e.target[1].value, id: 1});
        //reset();
    }

    // const handleChange = (field) => {
    //     addInput(field, e.target.value);
    // }
    // const handleChange = e => {
    //     e = () => setPosts(e.currentTarget.value)
    // }

    return (
        // <PostContext.Consumer>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Title
                    <input 
                        type="text" 
                        onChange={handleChange}
                        value={value.title}
                        name="title"
                        placeholder="Post Title"
                        />
                    {/* <input type="text" {...bind} /> */}
                    </label>
                    <textarea 
                        onChange={handleChange}
                        value={value.text}
                        name="text"
                        placeholder="Post Body"
                        ></textarea>
                    {/* <textarea {...bind}></textarea> */}
                    <button>Submit</button>
                </form>
            </div>
        // </PostContext.Consumer>
    )

}

export default PostForm;