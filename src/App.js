import React from 'react';
import Home from './containers/home'
import Saved from './containers/saved'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

export default function App() {
    return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/saved">
                            <Saved/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    );
}
