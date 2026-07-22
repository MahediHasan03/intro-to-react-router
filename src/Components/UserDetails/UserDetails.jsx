import React from 'react';
import { Link } from 'react-router';

const UserDetails = () => {
    return (
        <div>
            <h3>Here is User Details</h3>
            <Link to="users">Back to User</Link>
        </div>
    );
};

export default UserDetails;