import React from "react";
import styled from "styled-components";

const Buttons = styled.div`
    width: 80%;

    /* border: 2px solid white; */
    flex: 1;
    display: flex;

    & > input {
        width: 100%;
        height: 100%;

        border: 2px solid #f5f5f5;
        flex: 0.25;

        border: 2px solid white;
    }

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

            background: linear-gradient(#b1f0d2, #a6fffa);
            border: none;

            font-size: 25px;
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
        font-size: 40px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    align-items: center;
    justify-content: center;
`;

function AuthForm(props) {
    const { type } = props;
    return (
        <Container>
            <Form>
                <Input>
                    <input placeholder='username' />
                    <hr />
                </Input>
                <Input>
                    <input placeholder='password' />
                    <hr />
                </Input>
                <Input>
                    <input placeholder='date of birth mm/dd/yyyy' type='date' />
                    <hr />
                </Input>

                <Buttons>
                    <input type='checkbox' />
                    <label for='checkbox'>
                        would you like to receive newsletters from rtv? this
                        button does nothing, do what you will
                    </label>
                    <div>
                        <button>sign up</button>
                    </div>
                </Buttons>
            </Form>
        </Container>
    );
}

export default AuthForm;
