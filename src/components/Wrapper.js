import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component, Fragment } from 'react';
import Bar from "./Bar";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

const Wrapper = (props) => (

    <MuiThemeProvider>

        <Fragment>
            <div>
                <title>YouTube</title>
                <link rel="icon" href="../static/favicon.svg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </div>

            <Bar />
            <SideMenu />
            {props.children}
        </Fragment>

    </MuiThemeProvider >

);

export default Wrapper