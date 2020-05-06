import React from "react";
import Signup from "./Signup.js";
import Login from "./Login.js";
import styled from "styled-components";

const TypeSelectSlider = styled.hr`
    width: 166px;
    margin-left: 32px;
    margin-bottom: 5px;

    border: 3px solid #b1f0d2;

    transition: 0.3s;
`;
const TypeSelect = styled.div`
    padding-bottom: 10px;
    margin-left: 32px;
    margin-right: 32px;

    display: inline-block;

    color: #222222;
    font-size: 50px;
    font-weight: 700;
    opacity: 0.5;
    border: none;
    background: none;

    transition: 0.3s;

    cursor: pointer;
`;
const TypeSelectContainer = styled.div`
    width: 100%;
    padding-top: 122px;
`;
const AuthContainer = styled.div`
    height: 100vh;
    width: 38%;

    position: absolute;
    top: 0px;
    right: 0px;

    background-color: #f5f5f5;
`;
const AuthSection = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    border: 2px solid red;
`;

function Auth() {
    const [authType, setAuthType] = React.useState("signup");

    function switchAuthType(type) {
        setAuthType(type);
    }

    return (
        <AuthSection>
            <AuthContainer>
                <TypeSelectContainer>
                    <TypeSelect
                        style={
                            authType === "signup"
                                ? {
                                      opacity: 1,
                                  }
                                : {
                                      opacity: 0.5,
                                  }
                        }
                        onClick={() => {
                            switchAuthType("signup");
                        }}
                    >
                        sign up
                    </TypeSelect>
                    <TypeSelect
                        style={
                            authType === "signup"
                                ? {
                                      opacity: 0.5,
                                  }
                                : {
                                      opacity: 1,
                                  }
                        }
                        onClick={() => {
                            switchAuthType("login");
                        }}
                    >
                        login
                    </TypeSelect>
                    <TypeSelectSlider
                        style={
                            authType === "signup"
                                ? { marginLeft: "32px", width: "166px" }
                                : { marginLeft: "263px", width: "113px" }
                        }
                    />
                </TypeSelectContainer>
                {authType === "signup" ? <Signup /> : <Login />}
            </AuthContainer>
        </AuthSection>
    );
}

export default Auth;
