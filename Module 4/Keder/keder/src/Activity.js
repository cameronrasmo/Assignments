import React from "react";
import styled from "styled-components";

const ExitButton = styled.div`
    width: 70px;
    height: 70px;

    position: absolute;
    top: 0px;
    right: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f2f2f2;

    cursor: pointer;

    img {
        width: 30px;
    }

    &:hover {
        background-color: #e4e4e4;
    }
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: 130px;

    padding: 0px;

    display: flex;
    align-items: center;

    background-color: #63ffe8;

    transition: 0.2s;

    h1 {
        font-size: 40px;
        padding-left: 25px;
        line-height: 50px;
    }
`;

const Container = styled.div`
    margin: auto;
    width: 85%;
    padding-bottom: 10px;

    position: relative;
    top: 20px;

    background-color: #f2f2f2;

    z-index: 1;

    text-transform: capitalize;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    h4 {
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
    }

    @media (min-width: 1024px) {
        & {
            width: 55%;
        }
        & h4 {
            padding-left: 50px;
            padding-right: 50px;
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 30px;
        }
        ${HeaderContainer} {
            height: 180px;
        }
        ${HeaderContainer} h1 {
            font-size: 70px;
            padding: 50px;
            line-height: 70px;
        }
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    opacity: 0;

    background-color: #22222299;

    transition: all 0.2s, z-index 0s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    z-index: -1;
`;

function Activity(props) {
    return (
        <Overlay
            style={
                props.panel
                    ? {
                          opacity: 1,
                          zIndex: 1,
                          transition: "all 0.2s, z-index 0s",
                      }
                    : {
                          opacity: 0,
                          zIndex: -1,
                          transition: "all 0.2s, z-index 0.6s",
                      }
            }
        >
            <ExitButton onClick={props.close}>
                <img src='./img/exit.png' alt='' />
            </ExitButton>
            <Container style={props.panel ? { top: "0px" } : { top: "50px" }}>
                <HeaderContainer>
                    <h1>Here's something</h1>
                </HeaderContainer>
                <h4>
                    <strong>Activity:</strong> {props.activity}
                </h4>
                <h4>
                    <strong>Type:</strong> {props.type}
                </h4>
                <h4>
                    <strong>Price Range:</strong> {props.price}
                </h4>
                <h4>
                    <strong>People:</strong> {props.people}
                </h4>
            </Container>
        </Overlay>
    );
}

export default Activity;
