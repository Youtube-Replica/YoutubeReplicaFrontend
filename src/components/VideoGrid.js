import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import placeholder from '../assets/placeholder.jpg';

let faker = require('faker')

export default class VideoGrid extends Component {
    render() {

        let videos = []

        for (let i = 0; i < 15; i++) {
            videos.push(

                <GridTile key={i}
                    spacing={24}
                    style={styles.gridTile}
                    title={faker.lorem.words()}
                    subtitle={<span>Uploaded by <b>{faker.internet.userName()}</b></span>}>
                    <img src={placeholder} />
                </GridTile>

            )
        }

        return (
            <div>

                <GridList style={styles.root} cols={5} padding={20}>
                    {videos}
                </GridList>

            </div >
        )
    }
};


const styles = {
    root: {
        display: 'flex',
        // paddingTop: 20,
        // paddingBottom: 30,
        // flexWrap: 'wrap',
        // width: 900,
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto'
    },
    gridTile: {
        fontFamily: 'arial',
        width: 220,
        height: 200
    }
};