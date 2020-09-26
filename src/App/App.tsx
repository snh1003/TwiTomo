import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import FeedComponent from "./Component/FeedComponent";
import MainTitle from "./Component/MainTitle";
const App = () => {
    const fakedata = {
        date: "1990-90-90",
        title: "test",
        name: "name"
    };
    return (
        <>
            <BrowserRouter>
            <Switch>
                <Route path='/Feed' component={FeedComponent}/>
                <Route path='/' component={MainTitle}/>
            </Switch>
            </BrowserRouter>
        </>
    );
}
export default App;
