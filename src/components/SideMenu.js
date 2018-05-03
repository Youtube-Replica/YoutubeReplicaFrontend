import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import AVSubscriptions from 'material-ui/svg-icons/av/subscriptions';
import AVPlaylistPlay from 'material-ui/svg-icons/av/playlist-play';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionthumbUp from 'material-ui/svg-icons/action/thumb-up';

import { Link } from 'react-router-dom'

// to generate fake data
let faker = require('faker')

export default class SideMenu extends Component {

    render() {

        let subs = []

        for (let i = 0; i < 10; i++) {

            let username = faker.internet.userName()

            subs.push(

                < ListItem
                    style={{ fontSize: 15, }}
                    key={i}
                    containerElement={<Link to={"/channel/" + username} />}
                    primaryText={username}
                    leftAvatar={<Avatar src={faker.image.avatar()}
                    />}
                />
            )
        }

        return (
            <div>
                <Paper style={{
                    display: 'inline-block',
                    float: 'left',
                    margin: '16px 32px 16px 0',
                }}>
                    <Menu>
                        <MenuItem primaryText="Home" leftIcon={<ActionHome />} />
                        <MenuItem primaryText="Trending" leftIcon={<ActionTrendingUp />} />
                        <MenuItem primaryText="Subscriptions" leftIcon={<AVSubscriptions />} />

                        <Divider />

                        <MenuItem primaryText="History" leftIcon={<ActionHistory />} />
                        <MenuItem primaryText="Playlists" leftIcon={<AVPlaylistPlay />} />
                        <MenuItem primaryText="Liked videos" leftIcon={<ActionthumbUp />} />

                        <Divider />

                        <List>
                            <Subheader>Subscriptions</Subheader>
                            {subs}
                        </List>

                    </Menu>
                </Paper>
            </div>
        )
    }
};
