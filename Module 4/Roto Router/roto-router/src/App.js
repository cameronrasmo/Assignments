import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js';

function App(){
    return(
        <div>
            <div id="nav">
                <div id="logo"><h1>Plumbplumb</h1></div>
                <div id="spacer"></div>
                <Link className="link" to="/"><div className="text">Home<hr/></div></Link>
                <Link className="link" to="/About"><div className="text">About<hr/></div></Link>
                <Link className="link" to="/Services"><div className="text">Services<hr/></div></Link>
            </div>

            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/Services">
                    <Services/>
                </Route>

            </Switch>
        </div>
    )
}

export default App;