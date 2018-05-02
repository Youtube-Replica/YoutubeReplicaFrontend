import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bar from "./components/Bar";
import SideMenu from "./components/SideMenu";

import Home from './pages/'
import Settings from './pages/settings'
import Channel from './pages/channel'

export default class AppRouter extends Component {
    render() {
        return (
            <Router>

                <div>

                    <Bar />
                    <SideMenu />

                    <Route exact path="/" component={Home} />
                    <Route path="/channel" component={Channel} />
                    <Route path="/settings" component={Settings} />
                </div>

            </Router>
        )
    }
};
