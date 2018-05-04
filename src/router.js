import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bar from "./components/Bar";
import SideMenu from "./components/SideMenu";

import Home from './pages/'
import Settings from './pages/settings'
import Channel from './pages/channel'
import Login from './pages/login'
import Signup from './pages/signup'
import Search from './pages/search'

export default class AppRouter extends Component {
    render() {
        return (
            <Router>

                <div>

                    <Bar />
                    <SideMenu />

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/channel/:username" component={Channel} />
                    <Route path="/search/:term" component={Search} />
                    <Route path="/settings" component={Settings} />
                </div>

            </Router>
        )
    }
};
