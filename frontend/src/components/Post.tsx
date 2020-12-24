import React from 'react'
 
 const Post = ({post}) => {
     return (
         <li className="list-item">
             <span>{post.title}</span>
         </li>
     )
 }
 
export default Post
 