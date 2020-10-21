import React from 'react';
import Home from './components/home'
import Saved from './components/saved'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import {SelectionProvider} from "./components/selection-context";

export default function App() {
    return (
        <SelectionProvider>
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
        </SelectionProvider>
    );
}
