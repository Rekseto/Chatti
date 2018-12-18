import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {chatActions} from "../../state/ducks/chat";

class TypeForm extends Component {
  constructor() {
    super();

    this.changeContent = this.changeContent.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
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

    this.props.addMessage(this.state.content);

    this.changeContent("");
  }

  render() {
    return (
      <form onSubmit={e => this.sendMessage(e)} className="typeForm">
        <input
          type="text"
          value={this.state.content}
          onChange={e => this.changeContent(e.target.value)}
          className="typeForm__text"
          placeholder="Wpisz wiadomość"
        />
        <input type="submit" className="typeForm__submit" />
      </form>
    );
  }
}

TypeForm.propTypes = {
  addMessage: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => dispatch(chatActions.addMessage(message))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeForm);
