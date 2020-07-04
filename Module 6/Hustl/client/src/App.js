import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Welcome from "./components/Welcome.js";

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Container>
                    <Welcome />
                </Container>
            </Route>
            <Route path='/dashboard'>
                <Container>
                    <div>ya doss cunt</div>
                </Container>
            </Route>
        </Switch>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(#ffffff, #dbdbdb);
`;

export default App;
