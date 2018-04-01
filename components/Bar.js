import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';

import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionSearch from 'material-ui/svg-icons/action/search';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

export default class Bar extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false };
    };

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>

                <div>
                    <Drawer open={false}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>

                <Toolbar style={{ backgroundColor: 'red' }}>

                    <ToolbarGroup>

                        <IconButton iconStyle={{ color: 'white' }} onClick={() => this.handleToggle()} >
                            <NavigationMenu />
                        </IconButton>

                        <ToolbarTitle text="YouTube" style={{ color: 'white', fontSize: 25, paddingLeft: 15 }} />
                    </ToolbarGroup>


                    {/* Search field */}
                    <ToolbarGroup style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 190 }}>

                        <TextField id="search" style={{ color: 'white' }} hintText="Search" />
                        <IconButton iconStyle={{ color: 'white' }}>
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

                        <IconButton iconStyle={{ color: 'white' }}>
                            <ActionAccountCircle />
                        </IconButton>

                    </ToolbarGroup>


                </Toolbar>

            </div>
        )
    }
};
