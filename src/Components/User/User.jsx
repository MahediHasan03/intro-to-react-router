import React from 'react';
import './User.css';
import { Link } from 'react-router';

const User = ({user}) => {
    return (
        <div className='card'>
            <h3>Name: {user.name}</h3>
            <p>username:{user.username} </p>
            <p><small>{user.phone}</small></p>
            <Link to={`/users/${user.id}`}>User Details</Link>
        </div>
    );
};

export default User;

  
