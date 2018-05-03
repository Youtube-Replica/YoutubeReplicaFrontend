import React, { Component } from 'react';
import AppRouter from './router'
import Wrapper from './components/Wrapper'

export default class App extends Component {
    render() {
        return (

            <Wrapper>
                <AppRouter />
            </Wrapper>

        )
    }
};
