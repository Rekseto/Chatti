import React, {Component} from "react";
import {withRouter} from "react-router";
import Chat from "../../container/Chat";
import Header from "../Header";
import TypeForm from "../TypeForm";

import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <Chat />
        <TypeForm />
      </main>
    </div>
  );
}

export default withRouter(Home);
