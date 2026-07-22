import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    const {title,body} = post;
    return (
        <div style={{maxWidth:'800px'}}>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;