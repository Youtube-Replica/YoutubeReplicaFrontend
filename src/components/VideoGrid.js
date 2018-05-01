import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
let faker = require('faker')

export default class VideoGrid extends Component {
    render() {

        let videos = []

        for (let i = 0; i < 15; i++) {
            videos.push(

                <GridTile key={i}
                    style={styles.gridTile}
                    title={faker.lorem.words()}
                    subtitle={<span>Uploaded by <b>{faker.internet.userName()}</b></span>}>
                    <img src={faker.image.image()} />
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
        paddingTop: 18,
        // flexWrap: 'wrap',
        // width: 900,
        // justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
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