import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import FeedComponent from "./Component/FeedComponent";
import MainTitle from "./Component/MainTitle";
import CreateForm from "./Component/CreateForm";
import FeedDetail from "./Component/FeedDetail";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Feed" component={FeedComponent} />
          <Route path="/" exact component={MainTitle} />
          <Route path="/Form" component={CreateForm} />
          <Route path="/FeedDetail/:id" component={FeedDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
