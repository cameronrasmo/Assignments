import React from "react";
import styled from "styled-components";

const Greeting = styled.h1`
    width: 80%;

    color: #f5f5f5;
    font-size: 60px;
    font-weight: 600;
    flex: 1;

    @media (max-width: 990px) {
        font-size: 35px;
    }
`;

const Buttons = styled.div`
    width: 80%;

    /* border: 2px solid white; */
    flex: 1.25;
    display: flex;

    & > label {
        flex: 0.75;
    }

    & > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        & > button {
            width: 150px;
            height: 65px;

            border: none;
            background: linear-gradient(#b1f0d2, #a6fffa);

            font-size: 25px;
            cursor: pointer;
            outline: none;

            transition: 0.2s;
        }

        & > button:hover {
            background: linear-gradient(0.25turn, #b1f0d2, #a6fffa);
        }

        & > button:active {
            opacity: 0.9;
            transition: 0s;
        }
    }
`;
const Input = styled.div`
    width: 80%;

    flex: 1;

    & > input {
        width: 100%;
        padding-bottom: 5px;

        color: #f5f5f5;
        background: none;
        border: none;
        border-radius: 0px;
        border-bottom: 3px solid #f5f5f540;
        font-size: 30px;
        font-weight: 300;

        outline: none;
    }

    & > hr {
        width: 0%;

        visibility: hidden;
        position: relative;
        bottom: 3px;

        border-color: #b1f0d2;

        transition: 0.3s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    }

    input:focus ~ hr {
        visibility: visible;
        width: 100%;
    }

    @media (max-width: 990px) {
        & {
            /* margin-top: 15px;
            margin-bottom: 15px; */
        }
        & > input {
            font-size: 25px;
        }
    }
`;
const Form = styled.form`
    /* border: 2px solid white; */
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    position: relative;
    left: -20px;
    right: 0px;

    opacity: 0;

    align-items: center;
    justify-content: center;

    transition: 0.3s, opacity 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
`;

function AuthForm(props) {
    const { type } = props;
    const containerRef = React.useRef(null);
    const [signupState, setSignupState] = React.useState({
        username: "",
        password: "",
        birthDate: "",
    });
    const [loginState, setLoginState] = React.useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        type === "signup"
            ? setSignupState((prev) => ({ ...prev, [name]: value }))
            : setLoginState((prev) => ({ ...prev, [name]: value }));
    };
    const submit = () => {
        type === "signup"
            ? console.log(type, signupState)
            : console.log(type, loginState);
    };

    React.useEffect(() => {
        const { style } = containerRef.current;

        style.left = "-20px";
        setTimeout(() => {
            style.transitionDuration = "0.3s";
            console.log("mount", type);
            style.opacity = 1;
            style.left = "0px";
        }, 225);
        style.transitionDuration = "0s";

        return () => {
            console.log("unmount", type);
            style.opacity = 0;
            style.left = "20px";
        };
    }, [type]);

    return (
        <Container ref={containerRef}>
            <Form>
                {type === "signup" ? (
                    <Greeting>nice to meet you.</Greeting>
                ) : (
                    <Greeting>hello again.</Greeting>
                )}
                <Input>
                    <input
                        onChange={handleChange}
                        name='username'
                        value={
                            type === "signup"
                                ? signupState.username
                                : loginState.username
                        }
                        placeholder='username'
                    />
                    <hr />
                </Input>
                <Input>
                    <input
                        onChange={handleChange}
                        name='password'
                        value={
                            type === "signup"
                                ? signupState.password
                                : loginState.password
                        }
                        placeholder='password'
                    />
                    <hr />
                </Input>
                {type === "signup" ? (
                    <Input>
                        <input
                            onChange={handleChange}
                            name='birthDate'
                            value={signupState.birthDate}
                            placeholder='date of birth mm/dd/yyyy'
                            type='text'
                        />
                        <hr />
                    </Input>
                ) : null}

                <Buttons>
                    <div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                submit();
                            }}
                        >
                            {type === "signup" ? "sign up" : "login"}
                        </button>
                    </div>
                </Buttons>
            </Form>
        </Container>
    );
}

export default AuthForm;
