import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import AddHelp from '../components/AddHelp';
import EditHelp from '../components/EditHelp';
import Feedback from '../components/Feedback';
import Header from '../components/Header';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/addHelp" component={AddHelp} />
                    <Route path="/editHelp/:id" component={EditHelp} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;