import React from 'react';
import '../User/User.css'

const Post = ({post}) => {

    const {title, body} = post;

    return (
        <div className='card'>
            <p>{title}</p>
            <p>{body}</p>
            <button><Link to="/"></Link>Post Details</button>
        </div>
    );
};

export default Post;