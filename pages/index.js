import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Bar from '../components/Bar';
import SideMenu from '../components/SideMenu';

export default class Homepage extends Component {

    render() {
        return (
            <MuiThemeProvider>

                <div>

                    <Head>
                        <title>YouTube</title>
                        <link rel="icon" href="../static/favicon.svg" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>

                    <Bar />
                    <SideMenu />

                </div>
            </MuiThemeProvider>
        )
    }
};
