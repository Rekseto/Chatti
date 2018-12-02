import React, {Component} from "react";
import {connect} from "react-redux";

import {chatActions} from "../../state/ducks/chat";

class TypeForm extends Component {
  constructor() {
    super();

    this.changeContent = this.changeContent.bind(this);
  }

  state = {
    content: ""
  };

  changeContent(val) {
    this.setState({
      content: val
    });
  }

  sendMessage(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.sendMessage(e)}>
        <input type="text" onChange={e => this.changeContent(e.target.value)} />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chatFetch: () => dispatch(chatActions.fetchChatRequest())
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeForm);
