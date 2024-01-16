import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}