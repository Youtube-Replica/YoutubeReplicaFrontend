import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';








const NotFound = (props) => (
    <Wrapper>
        <NotFoundContent></NotFoundContent>
    </Wrapper>

);

const NotFoundContent = (props) => (
    <div>
        Page not found
    </div>
);


export default Wrapper;
