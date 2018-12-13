import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {chatActions} from "../../state/ducks/chat";

import Message from "../../components/Message";
import "./index.css";

class Chat extends Component {
  componentDidMount() {
    this.props.chatListen();
  }

  render() {
    const {messages} = this.props;
    return (
      <section className="chat__container">
        {messages.map(el => {
          return <Message message={el} />;
        })}
      </section>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array
};

const mapDispatchToProps = dispatch => {
  return {
    chatListen: () => dispatch(chatActions.listenChatRequest(dispatch))
  };
};

const mapStateToProps = state => {
  return {
    messages: state.chatStore.messages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
