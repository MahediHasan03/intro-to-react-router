import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {

    const users = useLoaderData();
    const {website, name} = users;

    return (
        <div>
            <h3>Here is User Details</h3>
            <p>{name}</p>
            <p>{website}</p>

        </div>
    );
};

export default UserDetails;