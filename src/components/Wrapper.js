import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component, Fragment } from 'react';

const Wrapper = (props) => (

    <MuiThemeProvider>

        <Fragment>
            {props.children}
        </Fragment>

    </MuiThemeProvider >

);

export default Wrapper