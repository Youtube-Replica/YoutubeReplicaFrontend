import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import TextField            from 'material-ui/TextField';
import FlatButton           from 'material-ui/FlatButton';

export default class MessageSender extends Component {
    constructor(props) {
      super(props)
    }

    handleChange = function updateMessageText(_, newTextMessage) {
      this.setState({
        textMsg: newTextMessage
      });
    }.bind(this);

    sendMessage = function updateMessageText(_) {
      var url = this.props.baseURL + "/messages/message";

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          sender_id:   this.props.sender.id,
          receiver_id: this.props.receiver.id,
          body:        this.state.textMsg,
          sent_at:     (new Date()).toISOString()
        })
      });
    }.bind(this);

    render() {
        return (
          <div>
            <TextField
              hintText="here you can write your message!"
              onChange={this.handleChange}
              fullWidth={true}
            />
            <FlatButton label="Send!" onClick={this.sendMessage} fullWidth={true} />
          </div>
        );
    }
}

const styles = {
    root: {
        display: 'flow-root',
        paddingTop: 18
    }
}

MessageSender.propTypes = {
  sender:      PropTypes.object,
  baseURL:     PropTypes.string,
  messageText: PropTypes.string
}
