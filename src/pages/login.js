import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component {

    componentDidMount = () => {
        document.title = 'Login'
    }

    render() {
        return (
            <Paper zDepth={2}>

                <TextField
                    floatingLabelText="Enter your email"
                />


                <TextField
                    floatingLabelText="Enter your password"
                    type="password"
                />

                <RaisedButton label="Sign In" primary={true} />

            </Paper>
        )
    }
};
