import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const navigate = useNavigate()
    const post = useLoaderData();
    const {title,body} = post;
    return (
        <div style={{maxWidth:'800px'}}>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={() => navigate(-1)}> Go Back...</button>
        </div>
    );
};

export default PostDetails;