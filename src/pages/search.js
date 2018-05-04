import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import VideoGrid from '../components/VideoGrid'
var faker = require('faker');

export default class Search extends Component {
    render() {
        return (
            <Paper zDepth={1} style={styles.root}>

                <h2 style={{ fontWeight: 100 }}>{faker.random.number()} results for {this.props.match.params.term}</h2>
                <VideoGrid cols={1} />


            </Paper>
        )
    }
};

const styles = {
    root: {
        margin: '0 auto',
        marginTop: 20,
        width: '60%',
        padding: 60,
    }
}