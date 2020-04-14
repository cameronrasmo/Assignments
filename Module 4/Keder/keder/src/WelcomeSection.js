import React from "react";
import styled from "styled-components";
import Menu from "./Menu.js";
import { APICall } from "./APICall.js";
import Activity from "./Activity.js";

const Header = styled.div`
    width: 100%;
    line-height: 70px;
    margin-bottom: 25px;

    position: relative;
    text-align: center;

    background-color: #63ffe8;
    font-size: 50px;
    font-weight: 1000;
    color: #222222;

    @media (min-width: 1024px) {
        & {
            width: 520px;
            line-height: 159px;

            font-size: 120px;
        }
    }
`;
const Paragraph = styled.p`
    width: 70%;

    margin: auto;
    position: relative;

    font-size: 16px;
    font-weight: 200;
    color: #f2f2f2;
    opacity: 0.85;
    z-index: -1;

    @media (min-width: 1024px) {
        width: 500px;
        margin-left: 0px;
    }
`;
const Container = styled.div`
    @media (min-width: 1024px) {
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 125px;
        position: relative;
    }
`;
function WelcomeSection() {
    const API = React.useContext(APICall);
    return (
        <div>
            <Container>
                <div>
                    <Header>Keder?</Header>
                </div>
                <div>
                    <Paragraph>
                        Are you bored?? It happens to the best of us, the bane
                        of the human condition. This is a simple web app that
                        pulls from an API to give you a variety of things to do.
                        You can also choose which category is most important to
                        you, and get an activity from there.
                    </Paragraph>
                </div>
            </Container>
            <Menu request={API.request} />
            <Activity
                activity={API.activity}
                type={API.type}
                price={API.price}
                people={API.people}
                panel={API.panel}
                close={API.close}
            />
        </div>
    );
}

export default WelcomeSection;
