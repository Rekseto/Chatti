import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./index.css";

export default ({}) => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__element">
            <Link className="navigation__link" to="/">
              Strona główna
            </Link>
          </li>
          <li className="navigation__element">
            <Link className="navigation__link" to="/about">
              O Projekcie
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
