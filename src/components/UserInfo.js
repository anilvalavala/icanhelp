import React from 'react';
import { NavLink } from 'react-router-dom';

const UserInfo = () => {
    return(
        <div>
            <div>Picture - Browse and Upload feature should be available</div>
            <div>
                <h1>Name</h1>
                <h2>Phone</h2>
                <h2>E-mail ID</h2>
                <p>Address Line 1</p>
                <p>Address Line 2</p>
                <p>Address Line 3</p>
                <p>Address Line 4</p>
                <p>State</p>
                <p>Country</p>
                <p>ZIP Code</p>
            </div>
            <button>Edit Profile</button>
        </div>
    );
}

export default UserInfo;