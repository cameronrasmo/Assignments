import React from "react";
import Auth from "./components/Auth/Auth.js";
import Home from "./components/Home/Home.js";
import styled from "styled-components";
import downarrow from "./img/downarrow.png";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext.js";

const Navbar = styled.div`
    width: 100%;
    height: 80px;

    position: absolute;

    background-color: #f5f5f5;
`;
const AccountOption = styled.button`
    width: 100%;
    flex: 1;

    display: flex;
    align-items: center;
    padding-left: 15px;

    color: #f5f5f5;
    background-color: #222222;
    border: none;
    font-size: 16px;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    cursor: pointer;
    z-index: 1;

    &:hover {
        background-color: #404040;
    }
`;
const AccountOptionsContainer = styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;

    position: relative;
    top: -2px;

    overflow: hidden;

    background-color: #222222;

    box-shadow: 5px 5px 0px 0px #22222280;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
`;
const AccountContainer = styled.div`
    position: absolute;

    top: 30px;
    right: 30px;

    font-size: 20px;

    cursor: pointer;

    & > hr {
        border: 1px solid #222222;
        width: 0%;
        visibility: hidden;

        margin: auto;

        margin-top: 5px;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    &:hover > hr {
        width: 100%;
        visibility: visible;
    }

    & > img {
        padding: 2px 2px 2px 2px;
        width: 29px;
        height: 12px;
        position: relative;
        top: 0px;

        object-fit: contain;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    &:hover > img {
        top: 1px;
    }
`;
const Logo = styled.h1`
    position: absolute;
    top: 30px;
    left: 50px;
    font-size: 50px;
    & {
        font-size: 40px;
        left: 30px;
        top: 15px;
    }
`;

const App = () => {
    const context = React.useContext(AuthContext);
    const { token, user } = context.userState;

    const [toggleState, setToggleState] = React.useState(false);

    const toggle = () => {
        setToggleState((prev) => !prev);
        console.log(toggleState);
    };

    return (
        <div>
            {token ? (
                <Navbar>
                    <Logo>rtv.</Logo>
                    <AccountContainer onClick={toggle}>
                        hello, {user.username}
                        <img src={downarrow} alt='' />
                        <hr />
                        <AccountOptionsContainer
                            style={
                                toggleState
                                    ? { height: "150px" }
                                    : {
                                          height: "0px",
                                          boxShadow:
                                              "0px 0px 0px 0px #22222280",
                                      }
                            }
                        >
                            <AccountOption>home</AccountOption>
                            <AccountOption>my posts</AccountOption>
                            <AccountOption
                                onClick={() => {
                                    context.logout();
                                    window.location.reload();
                                }}
                            >
                                logout
                            </AccountOption>
                        </AccountOptionsContainer>
                    </AccountContainer>
                </Navbar>
            ) : (
                <Logo>rtv.</Logo>
            )}

            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => (token ? <Redirect to='/home' /> : <Auth />)}
                />
                <Route
                    exact
                    path='/home'
                    render={() =>
                        token ? <Home user={user} /> : <Redirect to='/' />
                    }
                />
            </Switch>
        </div>
    );
};

export default App;