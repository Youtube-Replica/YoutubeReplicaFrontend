import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';

import { Link, Redirect } from 'react-router-dom'

export default class Bar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            searchTerm: '',
            redirect: false,
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    search = () => {
        let term = this.state.searchTerm

        if (term && term !== '') {
            this.setState({ redirect: true })
        }
    }

    updateTerm = (event, value) => {
        this.setState({ searchTerm: value.trim() })
    }
    render() {

        if (this.state.redirect) {
            return <Redirect to={"/search/" + this.state.searchTerm} />
        }

        return (
            <div>

                <Toolbar style={{ backgroundColor: 'red' }}>

                    <ToolbarGroup>

                        <IconButton iconStyle={{ color: 'white' }}>
                            <NavigationMenu />
                        </IconButton>

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <ToolbarTitle text="YouTube" style={{ color: 'white', fontSize: 25, paddingLeft: 15 }} />
                        </Link>

                    </ToolbarGroup>


                    {/* Search field */}
                    <ToolbarGroup style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 190 }}>

                        <TextField id="search" style={{ color: 'white' }} hintText="Search"
                            inputStyle={{ color: 'white' }} onChange={(e, v) => this.updateTerm(e, v)} />
                        <IconButton iconStyle={{ color: 'white' }} onClick={() => this.search()}>
                            <ActionSearch />
                        </IconButton>

                    </ToolbarGroup>

                    <ToolbarSeparator />

                    <ToolbarGroup>

                        <IconButton iconStyle={{ color: 'white' }}>
                            <FileUpload />
                        </IconButton>

                        <IconButton iconStyle={{ color: 'white' }}>
                            <SocialNotifications />
                        </IconButton>

                        <IconButton iconStyle={{ color: 'white' }} onClick={(e) => this.handleClick(e)}>
                            <ActionAccountCircle />
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                onRequestClose={this.handleRequestClose}
                            >
                                <Menu>
                                    <MenuItem primaryText="My Channel" />

                                    <MenuItem primaryText="Settings"
                                        containerElement={<Link to="/settings" />} />

                                    <MenuItem primaryText="Sign out" />
                                </Menu>
                            </Popover>
                        </IconButton>

                    </ToolbarGroup>


                </Toolbar>

            </div>
        )
    }
};
