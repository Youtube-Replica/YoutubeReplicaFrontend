import { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

import Link from 'next/link'
import Head from 'next/head'
import OptionsWrapper from '../components/OptionsWrapper';
import { Divider } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// to generate fake data
let faker = require('faker')

export default class SettingsPage extends Component {
    render() {
        return (
            <MuiThemeProvider className="mainComponent">
                < OptionsWrapper >
                </OptionsWrapper >
                <div className="settings-card">
                    <Card>
                        <CardHeader
                            title="Settings"
                            actAsExpander={false}
                            showExpandableButton={false}
                        />
                        <h3>Overview</h3>
                        <Divider />
                        <h4>Account information</h4>
                        <div className="user-info">
                            <h5>Name</h5>
                            <div className="user-info">
                                <Avatar className="avatar-icon" size={80} src={faker.image.image()} style={{ borderRadius: 0 }} />
                                <label>
                                    <p>{faker.name.findName()}</p>
                                </label>
                            </div>
                        </div>
                        <div className="user-info">
                            <h5>Account type</h5>
                            <div style={{ marginLeft: "10em", marginTop: "1em" }}>
                                <p> Standard </p>
                            </div>
                        </div>

                        <div className="user-info">
                            <h5>Account Settings</h5>
                            <div style={{ marginLeft: "8.5em", marginTop: "1em" }}>
                                <a href="#">
                                    View or change your account settings
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
                <style JSX>{`
                    .settings-card {
                        padding: 16px;
                    
                    }

                    .avatar-icon {
                        margin-left: 5em;
                        margin-right: 10px;
                        vertical-align:middle;
                    }

                    .user-info {
                        align-align: center;
                        display: flex;
                        flex-wrap: no-wrap;
                    }
                `}</style>
            </MuiThemeProvider >

        )
    }
}