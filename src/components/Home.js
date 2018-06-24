import React from 'react';
import UserInfo from './UserInfo';
import HelpItems from './HelpItems';
import HelpItemsFilters from './HelpItemsFilters';
import AddHelp from './AddHelp';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="content-container">

            <div className="page-header">
                <p className="page-header__title">Donations Added</p>
            </div>
            <div className="page-header__actions">
                <Link className="button" to="/addHelp">Add Help</Link>
            </div>
            <div>
                <HelpItemsFilters />
                <HelpItems />
            </div>
        </div>
    );
};

export default Home;