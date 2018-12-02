import React, {Component} from "react";
import "./index.css";

export default ({message}) => {
  return (
    <div className="message">
      <span className="message__username">{message.username}:</span>
      <span className="message__content">{message.message}</span>
    </div>
  );
};
