import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import List from 'material-ui/List/List';
import Message from './Message';
import MessageSender from './MessageSender';

/*
   you'll have to include this commponent in the user page under the message tab

   import Messages from '../components/Messages'
   <Messages
          baseURL='http://localhost:12345'
          currentUser={{ id: 1, userThumbnailUrl: 'http://4.bp.blogspot.com/-tHeo98SRwh8/Ty1Oo34l3WI/AAAAAAAAApc/oVp2j1MSWb0/s1600/391040_328514993844929_310603738969388_1179441_269979276_n.jpg' }}
          visitedUser={{ id: 2, userThumbnailUrl: 'https://pbs.twimg.com/profile_images/823214357031030784/7cnf_K2I_400x400.jpg'}}
      />
 */
export default class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    var url = this.props.baseURL +
      "/messages/message?sender_id=" +
      this.props.currentUser.id +
      "&receiver_id=" +
      this.props.visitedUser.id;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            messages: this.sanitizeMessages(result)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  sanitizeMessages(data) {
    var orderedMessages = []
    var messages = data.messages
    for (var i = messages.length - 1; i >= 0; i--) {
      var message = messages[i]
      if (
        message.sent_at &&
        message.sender_id &&
        message.receiver_id &&
        message.body
      ) {
        orderedMessages.push(message)
      }
    }
    orderedMessages.sort(function (a, b) {
      return (a.sent_at < b.sent_at) ? -1 : ((a.sent_at > b.sent_at) ? 1 : 0)
    })

    return orderedMessages
  }

  messageSender(message) {
    return this.props.currentUser.id === message.sender_id ? this.props.currentUser : this.props.visitedUser
  }

  render() {
    var messagesComponents = []
    for (var i = 0; i < this.state.messages.length; i++) {
      var message = this.state.messages[i]
      messagesComponents.push(
        <Message
          id={message.id}
          body={message.body}
          senderPicThumbnailUrl={this.messageSender(message).userThumbnailUrl}
          sentAt={moment(message.sent_at).fromNow()} />
      )
    }

    return (
      <div>
        <List style={styles.root}>
          {messagesComponents}
          <MessageSender
            sender={this.props.currentUser}
            receiver={this.props.visitedUser}
            baseURL={this.props.baseURL}
          />
        </List>
      </div>
    )
  }
};

Messages.propTypes = {
  baseURL: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  visitedUser: PropTypes.object
}

const styles = {
  root: {
    display: 'flow-root',
    paddingTop: 18
  }
};
