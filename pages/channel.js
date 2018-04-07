import Link from 'next/link'
import Head from 'next/head'
import Wrapper from '../components/Wrapper';

import React, { Component, Fragment } from 'react';

let faker = require('faker')


class Channel extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Wrapper>
                <ChannelHeader {...this.props}></ChannelHeader>
            </Wrapper>

        )
    }
}

class ChannelHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <img style={styles.img} src={faker.image.image()} />
                <h1>{this.props.url.query.title}</h1>
                <span>77,955 subscribers</span>
            </Fragment>

        )
    }
}

const styles = {
    root: {
        display: 'flex',
        paddingTop: 18,
        // flexWrap: 'wrap',
        // width: 900,
        // justifyContent: 'space-around',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: '50%',
    },
    gridTile: {
        fontFamily: 'arial',
        width: 220,
        height: 200
        // marginRight: 10,
        // marginLeft: 10,
        // marginBottom: 220,
    }
};
export default Channel