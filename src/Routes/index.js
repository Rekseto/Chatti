import React from "react";
import {Route, Switch} from "react-router-dom";
import Applied from "./AppliedRoute";

import Loadable from "../LoadableComponent";

const NotFound = Loadable({
  loader: () => import("../components/NotFound")
});

const Home = Loadable({
  loader: () => import("../components/Home")
});

const About = Loadable({
  loader: () => import("../components/About")
});

export default ({props}) => (
  <Switch>
    <Applied path="/" exact component={Home} props={props} />
    <Applied path="/about" exact component={About} props={props} />
    <Route component={NotFound} />
  </Switch>
);
