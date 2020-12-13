const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            title: req.body.title,
            text: req.body.text,
            user: req.user.id
        });

        newPost.save().then(post => res.json(post));
    }
);

router.patch('/:postId', passport.authenticate('jwt', { session: false }), (req, res) => {
    Post.findById(req.params.postId, function (err, post) {
        if (!post) {
            return res.status(400).json('We could not find that post');
        } else if (post.author != req.user.id) {
            return res.status(400).json('Invalid Credentials');
        } else {
            Post.findOneAndUpdate({ _id: req.params.postId }, req.body, function (err, post) {
                if (err) {
                    return res.status(400).json(err);
                } else {
                    newPost = req.body;
                    res.send(newPost);
                }
            });
        }
    });
});

router.delete('/:postId', passport.authenticate('jwt', { session: false }), (req, res) => {
    Post.findById(req.params.postId, function (err, post) {
        if (!post) {
            return res.status(400).json('We could not find that post');
        } else if (post.author != req.user.id) {
            return res.status(400).json('Invalid Credentials');
        } else {
            Post.findOneAndDelete({ _id: req.params.postId }, function (err, post) {
                if (err) {
                    return res.status(400).json(err);
                } else {
                    res.send(post.id);
                }

            });
        }
    });
});

module.exports = router;