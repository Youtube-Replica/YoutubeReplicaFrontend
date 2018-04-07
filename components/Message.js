import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import Avatar               from 'material-ui/Avatar';
import ListItem             from 'material-ui/List/ListItem';
import {Card, CardHeader}   from 'material-ui/Card';

export default class Message extends Component {
    render() {
        return (
          <Card expanded={true} >
            <CardHeader
              title={this.props.body}
              subtitle={this.props.sentAt}
              avatar={this.props.senderPicThumbnailUrl}
            />
          </Card>
        );
    }
}

const styles = {
    root: {
        display: 'flow-root',
        paddingTop: 18
    }
}

Message.propTypes = {
  id:                    PropTypes.string,
  body:                  PropTypes.string,
  senderPicThumbnailUrl: PropTypes.string,
  sentAt:                PropTypes.object
}
