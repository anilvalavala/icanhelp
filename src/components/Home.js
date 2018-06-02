import React from 'react';
import UserInfo from './UserInfo';
import HelpItems from './HelpItems';
import HelpItemsFilters from './HelpItemsFilters';
import AddHelp from './AddHelp';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div>
                User Info
            </div>
            <Link to="/addHelp">Add Help</Link>
            <div>Items added by current user (if logged in)</div>
            <div>
                <HelpItemsFilters />
                <HelpItems />
            </div>
            <div>Testimonials</div>
        </div>
    );
};

export default Home;