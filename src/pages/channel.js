import Wrapper from '../components/Wrapper';

import React, { Component, Fragment } from 'react';
import VideoGrid from '../components/VideoGrid'
import { Divider } from 'material-ui';
import '../style.css'

let faker = require('faker')


class Channel extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount = () => {
        this.setState({
            chosenTab: 'Videos'
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            chosenTab: e.target.innerText
        })
    }


    render() {
        return (
            <Wrapper>
                <ChannelHeader {...this.props}></ChannelHeader>
                <div style={styles.tabsList}>
                    <div className={(this.state.chosenTab === 'Videos') ? 'red' : ''} onClick={this.handleClick} style={styles.tabs}>
                        Videos
                </div>
                    <div className={(this.state.chosenTab === 'Playlists') ? 'red' : ''} onClick={this.handleClick} style={styles.tabs}>
                        Playlists
                    </div>
                </div>
                <VideoGrid />
            </Wrapper >

        )
    }
}


class ChannelHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        let subscribed = !this.state.subscribed;
        this.setState({ subscribed: subscribed });
    }
    componentWillMount = () => {
        this.setState({
            subscribed: false
        })

    }
    render() {
        const subscribed = this.state.subscribed;
        const button = subscribed ? (
            <div style={styles.subBtnContainer}>
                <button style={styles.subBtnWhite} onClick={this.handleClick}>  UNSUBSCRIBE</button>
            </div>

        ) : (
                <div style={styles.subBtnContainer}>
                    <button style={styles.subBtn} onClick={this.handleClick}>  SUBSCRIBE</button>
                </div>

            )

        return (
            <div style={styles.header}>
                <img style={styles.img} src={faker.image.image()} />
                <div style={styles.channelName}>
                    <h1>{this.props.url.query.title}</h1>
                    <span>77,955 subscribers</span>
                </div>
                {button}
            </div>

        )
    }
}

const styles = {
    red: {
        color: 'red'
    },
    tabs: {
        fontFamily: 'Roboto, Noto, sans-serif',
        cursor: "pointer",
        margin: '15px',
        padding: '15px',
        transition: "all ease .5s",
        ":hover": {
            color: "#red"
        }
    },
    subBtnContainer: {
        display: 'flex',
        jusifyContent: 'flex-end',
        alignItems: 'center'
    },
    tabsList: {
        display: 'flex',
        flexDirection: 'row'
    },
    subBtn: {
        background: 'red',
        width: '150px',
        height: '50px',
        borderRadius: '4px',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer'
    },
    subBtnWhite: {
        background: 'white',
        width: '150px',
        height: '50px',
        borderRadius: '4px',
        color: 'black',
        fontSize: '20px',
        cursor: 'pointer'
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    channelName: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        justifyContent: "space-evenly",
        alignItens: "flex-start",
        width: '70%'

    },
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
        padding: "20px"
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