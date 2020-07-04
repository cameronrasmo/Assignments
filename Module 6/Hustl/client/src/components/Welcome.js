import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.js";

const Welcome = () => {
    const { authorize } = useContext(AuthContext);

    const [authState, setAuthState] = useState("");
    const [authFields, setAuthFields] = useState({
        username: "",
        password: "",
    });

    const authRef = useRef(null);
    const authCTARef = useRef(null);
    const unRef = useRef(null);
    const pwRef = useRef(null);

    const triggerAuth = () => {
        authCTARef.current.style.display = "flex";
        setTimeout(() => {
            authCTARef.current.style.opacity = 1;
            authCTARef.current.style.height = "75px";
        }, 25);

        unRef.current.style.display = "flex";
        pwRef.current.style.display = "flex";
        setTimeout(() => {
            unRef.current.style.opacity = 1;
            unRef.current.style.height = "75px";
            pwRef.current.style.opacity = 1;
            pwRef.current.style.height = "75px";
        }, 25);
    };

    const submit = () => {
        const type = authState === "Sign Up" ? "signup" : "login";
        console.log(type, authFields);
        authorize(type, authFields);
        setAuthFields({
            username: "",
            password: "",
        });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setAuthFields((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return (
        <Container>
            <ContentContainer>
                <HeaderContainer>
                    <h4>Hustl</h4>
                </HeaderContainer>
                <GreetingContainer>
                    <h1>
                        Hi!{" "}
                        <span role='img' aria-label='greeting'>
                            👋
                        </span>
                    </h1>
                    <p>
                        Organize your work into projects, add to your backlog,
                        keep track of your progress, and hustle like you’ve
                        never hustled before.
                    </p>
                </GreetingContainer>
            </ContentContainer>
            <AuthContainer ref={authRef}>
                <AuthPanel>
                    <h2>{authState === "" ? `Get HUSTLIN` : authState}</h2>
                    <AuthFields
                        value={authFields.username}
                        name='username'
                        placeholder='Username'
                        ref={unRef}
                        onChange={onChange}
                        type='text'
                    />
                    {authState === "" ? (
                        <>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAuthState("Log In");
                                    triggerAuth();
                                }}
                            >
                                <p>Log In</p>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setAuthState("Sign Up");
                                    triggerAuth();
                                }}
                            >
                                <p>Sign Up</p>
                            </button>
                        </>
                    ) : null}
                    <AuthFields
                        value={authFields.password}
                        name='password'
                        placeholder='Password'
                        ref={pwRef}
                        onChange={onChange}
                        type='password'
                    />
                    <AuthCTA ref={authCTARef}>
                        <Link
                            to='/dashboard'
                            style={AuthCTAButton}
                            onClick={(e) => {
                                e.preventDefault();
                                submit();
                            }}
                        >
                            <p>Go</p>
                        </Link>
                    </AuthCTA>
                </AuthPanel>
            </AuthContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`;
const HeaderContainer = styled.div`
    padding: 30px;

    & > h4 {
        font-size: 15px;
    }

    @media (min-width: 1024px) {
        padding-top: 80px;
        padding-left: 80px;
    }
`;
const GreetingContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 30px;

    & > h1 {
        font-size: 50px;
    }

    & > p {
        font-size: 15px;
        font-weight: 400;
    }

    @media (min-width: 1024px) {
        padding-top: 0px;
        padding-left: 80px;
        & > p {
            width: 55%;
        }
    }
`;
const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0px;

    @media (min-width: 1024px) {
        padding: 80px;
        justify-content: center;
        flex: 1;
    }
`;
const AuthPanel = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 30px;

    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 4px 4px 0px #22222250;

    background: linear-gradient(75deg, #3a3648, #222222);

    transition: 0.3s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > h2 {
        color: #f2f2f2;
        margin-bottom: 5px;
    }

    & button {
        width: 100%;
        flex: 1;

        font-size: 20px;
        font-weight: 800;
        margin-top: 5px;
        margin-bottom: 5px;
        opacity: 1;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        border-radius: 5px;
        background-color: #f2f2f2;
        outline: none;
        border: 2px solid white;

        transition: 0.4s;
        cursor: pointer;

        & > p {
            padding: 10px 30px;
            transition: 0.3s;
            transition-timing-function: cubic-bezier(0, 0, 0.056, 1);
        }

        &:hover {
            background-color: white;
            border: 2px solid #f2f2f225;
            color: #222222;
            transition: 0.3s;
        }

        &:active {
            background-color: #f2f2f225;
            border: 2px solid #f2f2f225;
            color: #f2f2f250;
            transition: 0s;
        }
    }

    @media (min-width: 1024px) {
        border-radius: 5px;

        & button {
            & > p {
                padding: 10px 30px;
            }
        }
    }

    @media (min-width: 1920px) {
        max-width: 70%;
    }
`;
const AuthCTA = styled.div`
    width: 100%;
    height: 0px;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    opacity: 0;

    transition: 0.3s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);
`;
const AuthCTAButton = {
    width: "75px",
    height: "100%",

    fontSize: "20px",
    fontWeight: "800",
    marginTop: "5px",
    marginBottom: "5px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    outline: "none",
    border: "2px solid white",

    transition: "0.4s",
    cursor: "pointer",
};
const AuthFields = styled.input`
    width: 100%;
    padding: 20px 20px;

    font-size: 18px;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 5px;

    display: none;
    opacity: 0;
    align-items: center;
    justify-content: flex-start;

    border-radius: 5px;
    background: none;
    outline: none;
    border: 2px solid #f2f2f230;

    color: #f2f2f2;

    transition: 0.2s;

    &:hover {
        border: 2px solid #f2f2f270;
    }
    &:focus {
        border: 2px solid white;
    }
`;

export default Welcome;
