import React from "react";
import styled from "styled-components";
import Menu from "./Menu.js";

const Header = styled.div`
    width: 100%;
    line-height: 70px;

    position: relative;
    top: 0px;
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
    border: 2px solid black;

    margin: auto;
    position: relative;
    top: 45px;

    font-size: 18px;
    font-weight: 200;
    color: #f2f2f2;
    opacity: 0.85;
`;
const Container = styled.div`
    border: 2px solid black;

    @media (min-width: 1024px) {
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 75px;
    }
`;
function WelcomeSection() {
    return (
        <div>
            <Container>
                <Header>Keder?</Header>
                <Paragraph>
                    Times are tough. Are you feeling bored? This simple web app
                    will find you something to do. Just select which category is
                    most important to you, and an activity will be shown for
                    you. Stay safe.
                </Paragraph>
            </Container>
            <Menu />
        </div>
    );
}

export default WelcomeSection;
