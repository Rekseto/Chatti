import React, {Component} from "react";
import Markdown from "react-markdown";

import CodeBlock from "../CodeBlock";
import "./index.css";

export default ({message}) => {
  return (
    <div className="message">
      <span className="message__username">{message.username}:</span>
      <span className="message__content">
        <Markdown source={message.message} renderers={{code: CodeBlock}} />
      </span>
    </div>
  );
};
