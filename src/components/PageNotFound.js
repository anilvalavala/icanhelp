import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div>
            <h1>Requested page was not found</h1>
            <Link to="/">HOME</Link>
        </div>
    );
}

export default PageNotFound;