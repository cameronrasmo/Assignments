import React from "react";
import Auth from "./components/Auth/Auth.js";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Auth />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
