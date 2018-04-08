import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Bar from '../components/Bar';
import SideMenu from '../components/SideMenu';
import VideoGrid from '../components/VideoGrid'
import { Channel } from "./channel";

import { BrowserRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import Wrapper from '../components/Wrapper';








const Home = (props) => (
    <Wrapper>
        <VideoGrid />
    </Wrapper>

);


export default Home;
