import React from "react";
import WelcomeSection from "./WelcomeSection.js";
import TypeSection from "./TypeSection.js";
import PriceSection from "./PriceSection.js";
import PeopleSection from "./PeopleSection.js";
import styled from "styled-components";
import { APICallProvider } from "./APICall.js";
import { Route, Switch } from "react-router-dom";

const Credits = styled.p`
    position: absolute;
    bottom: 20px;
    right: 125px;

    color: #f2f2f2;
    opacity: 0.85;

    display: none;

    z-index: 0;
    a {
        color: #f2f2f2;
    }

    @media (min-width: 1024px) {
        display: initial;
    }
`;

function App() {
    return (
        <div>
            <Credits>
                Made by&nbsp;
                <a
                    href='https://cameronrasmo.now.sh/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Cameron Rasmussen
                </a>
                &emsp;&emsp;Hey thanks&nbsp;
                <a
                    href='https://www.boredapi.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Bored API
                </a>
                &nbsp;
                <span role='img' aria-label='Emoji'>
                    🙏
                </span>
            </Credits>
            <Switch>
                <Route exact path='/'>
                    <APICallProvider>
                        <WelcomeSection />
                    </APICallProvider>
                </Route>
                <Route exact path='/type'>
                    <APICallProvider>
                        <TypeSection />
                    </APICallProvider>
                </Route>
                <Route exact path='/price'>
                    <APICallProvider>
                        <PriceSection />
                    </APICallProvider>
                </Route>
                <Route exact path='/people'>
                    <APICallProvider>
                        <PeopleSection />
                    </APICallProvider>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
