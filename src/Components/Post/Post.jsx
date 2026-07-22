import React from 'react';
import '../User/User.css'
import { Link } from 'react-router';

const Post = ({post}) => {

    const {title, userId} = post;

    return (
        <div className='card'>
            <p>User ID: {userId}</p>
            <p style={{color: 'red'}}>{title}</p>
            <Link to={`/posts/${post.id}`}>
            <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;