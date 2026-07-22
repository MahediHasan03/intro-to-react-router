import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}
        >
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
 
