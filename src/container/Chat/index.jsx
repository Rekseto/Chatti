import React, {Component} from "react";
import {connect} from "react-redux";

import {chatActions} from "../../state/ducks/chat";

import Message from "../../components/Message";

class Chat extends Component {
  componentDidMount() {
    this.props.chatFetch();
  }

  render() {
    const {messages} = this.props;
    return (
      <section>
        {messages.map(el => {
          return <Message message={el} />;
        })}
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chatFetch: () => dispatch(chatActions.fetchChatRequest())
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
