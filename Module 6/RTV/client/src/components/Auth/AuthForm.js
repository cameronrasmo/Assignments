import React from "react";
import styled from "styled-components";

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
    border: 2px solid white;
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

                <div>
                    <input type='checkbox' />
                    <label>
                        would you like to receive newsletters from rtv? this
                        button does nothing, do what you will
                    </label>
                    <button>sign up</button>
                </div>
            </Form>
        </Container>
    );
}

export default AuthForm;
