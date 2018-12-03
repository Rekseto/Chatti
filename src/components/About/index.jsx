import React, {Component} from "react";
import {withRouter} from "react-router";

import Header from "../Header";
import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <main className="about">
        <p className="about__paragraph">
          Projekt miał celu nauczenie się korzystania z bazy &nbsp;
          <a href="https://firebase.google.com/docs/firestore/">
            Firebase
          </a>&nbsp;od Google
        </p>
      </main>
    </div>
  );
}

export default withRouter(Home);
