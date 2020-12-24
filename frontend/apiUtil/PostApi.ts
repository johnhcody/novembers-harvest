//import React from 'react';
import axios, { CancelTokenSource } from 'axios';

// interface IPost {
//     user: number
//     title: string
//     text: string
//     date: string
// }

// const defaultPosts: IPost[] = [];

export const fetchPosts = () => {
    return axios.get('/api/posts')
};

export const fetchPost = postId => {
    return axios.get(`/api/posts/${postId}`)
};

export const createPost = data => {
    return axios.post('/api/posts/', data)
}

export const updatePost = (data) => {
    return axios.patch(`/api/posts/${data._id}`, data)
}

export const deletePost = (postId) => {
    return axios.delete(`/api/posts/${postId}`)
}