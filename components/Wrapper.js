import Link from 'next/link'
import Head from 'next/head'
import React, { Component, Fragment } from 'react';
import Bar from "./Bar";
import SideMenu from "./SideMenu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Wrapper = (props) => (

    <MuiThemeProvider>

        <Fragment>
            <Head>
                <title>YouTube</title>
                <link rel="icon" href="../static/favicon.svg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Bar />
            <SideMenu />
            {props.children}
        </Fragment>

    </MuiThemeProvider >

);

export default Wrapper