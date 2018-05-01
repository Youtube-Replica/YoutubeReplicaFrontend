import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/'
import Settings from './pages/settings'
import Channel from './pages/channel'

export default class App extends Component {
    render() {
        return (

            <Router>

                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/channel" component={Channel} />
                    <Route path="/settings" component={Settings} />
                </div>

            </Router>
        )
    }
};
