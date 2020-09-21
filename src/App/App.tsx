import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import FeedComponent from "./Component/FeedComponent";
const App = () => {
    const fakedata = {
        date: "1990-90-90",
        title: "test",
        name: "name"
    };
    return (
        <>
            <Switch>
                <Route path="/Feed" component={FeedComponent}></Route>
            </Switch>
        </>
    );
}
export default App;
