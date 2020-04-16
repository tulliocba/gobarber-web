import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashborad';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" exact component={Profile} isPrivate />
        </Switch>
    );
}
