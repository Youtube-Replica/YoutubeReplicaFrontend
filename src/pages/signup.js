import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

export default class Signup extends Component {

    componentDidMount = () => {
        document.title = 'Sign Up'
    }

    render() {
        return (
            <Paper zDepth={1} style={styles.root}>

                <h1 style={{ fontWeight: 100 }}>Sign Up</h1>

                <TextField style={styles.item}
                    floatingLabelText="Enter your first name"
                />

                <br /><br />

                <TextField style={styles.item}
                    floatingLabelText="Enter your last name"
                />

                <br /><br />

                <TextField style={styles.item}
                    floatingLabelText="Enter your email"
                />

                <br /><br />

                <TextField style={styles.item}
                    floatingLabelText="Enter your password"
                    type="password"
                />

                <br /><br />

                <TextField style={styles.item}
                    floatingLabelText="Confirm your password"
                    type="password"
                />

                <br /><br />

                <RaisedButton label="Sign up" backgroundColor='#2979FF' labelColor='#ffffff' style={styles.item} />

                <br /><br /><br />

                <p style={{ fontWeight: 100 }}>Already have an account?
                    <Link to="/login">Sign In</Link>
                </p>

            </Paper>
        )
    }
};

const styles = {
    root: {
        margin: '0 auto',
        marginTop: 50,
        width: '50%',
        padding: 60,
    },
    item: {
        margin: '40 40 40 40',
    }
}