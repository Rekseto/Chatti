import React, {Component} from "react";

export default ({message}) => {
  return (
    <span>
      {message.username} {message.message}
    </span>
  );
};
