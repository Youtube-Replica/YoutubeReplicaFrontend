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
import RaisedButton from 'material-ui/RaisedButton';

// to generate fake data
let faker = require('faker')

export default class SettingsPage extends Component {
    state = {
        shown: false
    }

    toggleAdvanceSettings = event => {
        console.log("Toggled")
        event.preventDefault();
        this.setState({
            shown: !this.state.shown
        })
    }

    render() {
        let AdvancedSettings = () => {
            if (this.state.shown) {
                console.log("Shown");
                return (
                    <div>
                        <p>Youtube ID :{faker.random.uuid()}</p>
                        <p>Channel ID :{faker.random.uuid()}</p>
                        <RaisedButton label="Delete Channel" secondary={true} />
                    </div>
                );
            } else {
                console.log("Not shown");
                return null;
            }
        }
        return (
            <OptionsWrapper>
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
                                <Avatar className="avatar-icon" size={80} src={faker.image.image()} style={{ borderRadius: 0, marginLeft: '30px' }} />
                                <label>
                                    <p style={{ marginLeft: '30px' }}>{faker.name.findName()}</p>
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
                                <a href="" onClick={this.toggleAdvanceSettings}>
                                    View or change your account settings
                                </a>
                                <AdvancedSettings />
                            </div>
                        </div>
                    </Card>
                </div>
                <style jsx>{`
                    .settings-card {
                        padding: 16px;
                    
                    }

                    .user-info {
                        margin-left: 1em;
                        display: flex;
                        flex-wrap: no-wrap;
                    }
                `}</style>
            </OptionsWrapper >

        )
    }
}