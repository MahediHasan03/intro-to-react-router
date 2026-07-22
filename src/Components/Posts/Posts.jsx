import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts);

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;