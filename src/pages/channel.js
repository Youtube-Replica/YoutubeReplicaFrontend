import Wrapper from '../components/Wrapper';

import React, { Component } from 'react';
import VideoGrid from '../components/VideoGrid'
import RaisedButton from 'material-ui/RaisedButton'
import placeholder from '../assets/placeholder.jpg'
import '../style.css'

let faker = require('faker')


class Channel extends Component {

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

            <div>
                <ChannelHeader {...this.props} />

                <div style={styles.tabsList}>
                    <div className={(this.state.chosenTab === 'Videos') ? 'red' : ''} onClick={this.handleClick} style={styles.tabs}>
                        Videos
                </div>
                    <div className={(this.state.chosenTab === 'Playlists') ? 'red' : ''} onClick={this.handleClick} style={styles.tabs}>
                        Playlists
                    </div>
                </div>
                <VideoGrid />
            </div>

        )
    }
}


class ChannelHeader extends Component {

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
        let button = <RaisedButton label={"subscribe"} backgroundColor="red" labelColor="#ffffff" onClick={this.handleClick}
            style={{ marginTop: 30, marginLeft: 1000, }} />

        if (subscribed) {
            button = <RaisedButton label={"unsubscribe"} backgroundColor="white" onClick={this.handleClick}
                style={{ marginTop: 30, marginLeft: 1000, }}
            />
        }

        return (
            <div>
                <img alt="profile" style={styles.img} src={placeholder} />
                <div style={styles.channelName}>
                    <h1>{this.props.match.params.username}</h1>
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
        width: '150px',
        height: '50px',
        borderRadius: '4px',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer'
    },
    subBtnWhite: {
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