import React, { use } from 'react';

const Users2 = ({usersPromise}) => {

    const users = use(usersPromise);
    console.log('Users 2 info',users)

    return (
        <div>
            <h3>This is users 2</h3>
        </div>
    );
};

export default Users2;