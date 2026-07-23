import React from 'react';
import '../User/User.css'
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate = useNavigate();

    const handleNavigate = ()=> {
        navigate('/laptops')
    }

    const {id, title, userId} = post;

    return (
        <div className='card'>
            <p>User ID: {userId}</p>
            <p style={{color: 'red'}}>{title}</p>
            <Link to={`/posts/${post.id}`}>
            <button className='button'>Post Details</button>
            </Link>
            <button className='button' onClick={handleNavigate}>Detail of {id}</button>
        </div>
    );
};

export default Post;