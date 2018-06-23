import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import About from '../components/About';
import AddHelp from '../components/AddHelp';
import EditHelp from '../components/EditHelp';
import Feedback from '../components/Feedback';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => {
    return(
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={About} exact={true} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/home" component={Home} />
                    <Route path="/feedback" component={Feedback} />
                    <PrivateRoute path="/addHelp" component={AddHelp} />
                    <PrivateRoute path="/editHelp/:id" component={EditHelp} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;