import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import FeedComponent from "./Component/FeedComponent";
import MainTitle from "./Component/MainTitle";
import CreateForm from "./Component/CreateForm";
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
                <Route path='/' exact component={MainTitle}/>
                <Route path='/Form' component={CreateForm}/>
            </Switch>
            </BrowserRouter>
        </>
    );
}
export default App;
