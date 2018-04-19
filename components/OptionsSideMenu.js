import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import AVSubscriptions from 'material-ui/svg-icons/av/subscriptions';
import AVPlaylistPlay from 'material-ui/svg-icons/av/playlist-play';
import ActionHistory from 'material-ui/svg-icons/action/history';
import ActionthumbUp from 'material-ui/svg-icons/action/thumb-up';


export default class SideMenu extends Component {

    handleClick(e) {
        e.preventDefault();
        window.location.replace(`/channel/${e.target.innerText}`)
    }

    render() {

        return (
            <div>
                <Paper style={{
                    display: 'inline-block',
                    float: 'left',
                    margin: '16px 32px 16px 0',
                }}>
                    <Menu>
                        <br />
                        <MenuItem primaryText="Overview" />
                        <MenuItem primaryText="Privacy" />
                        <MenuItem primaryText="Notifications" />
                        <MenuItem primaryText="Playback" />
                    </Menu>
                </Paper>
            </div>
        )
    }
};
