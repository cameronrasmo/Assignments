import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../img/icons/arrow.svg";
import submitChanges from "../img/icons/submitChanges.svg";

const Task = () => {
    const textAreaRef = useRef(null);
    const formRef = useRef(null);
    const containerRef = useRef(null);

    const [editState, setEditState] = useState(false);

    const onTaskChange = (e) => {
        // textAreaRef.current.style.height = "25px";
        textAreaRef.current.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <Container
            ref={containerRef}
            onClick={() => {
                textAreaRef.current.focus();
            }}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setEditState(false);
                }}
                ref={formRef}
            >
                <textarea
                    ref={textAreaRef}
                    placeholder='Task'
                    onChange={onTaskChange}
                    onFocus={(e) => {
                        setEditState(true);
                        containerRef.current.style.backgroundColor = "#f2f2f2";
                        textAreaRef.current.style.height = `${e.target.scrollHeight}px`;
                        textAreaRef.current.style.cursor = "text";
                        containerRef.current.style.boxShadow =
                            "0px 5px 5px 0px #22222255";
                    }}
                    onBlur={(e) => {
                        setEditState(false);
                        containerRef.current.style.backgroundColor =
                            "#f2f2f2e6";
                        textAreaRef.current.style.height = "25px";

                        textAreaRef.current.style.height = `${e.target.scrollHeight}px`;

                        textAreaRef.current.style.cursor = "pointer";
                        containerRef.current.style.boxShadow = "none";
                    }}
                ></textarea>

                {editState ? (
                    <SubmitChangesButton type='submit'>
                        <img src={submitChanges} alt='Edit' />
                    </SubmitChangesButton>
                ) : (
                    <MoveButton type='submit'>
                        <img src={arrow} alt='>' />
                    </MoveButton>
                )}
            </form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 30px 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;

    position: relative;
    bottom: 0px;

    background-color: #f2f2f2e6;
    border-radius: 5px;

    cursor: pointer;

    transition: 0.1s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > form {
        width: 100%;

        transition: 0.3s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);
    }

    & > form > textarea {
        font-weight: 600;
        font-size: 17px;
        color: #222222;
        resize: none;
        border: none;
        height: 100%;
        width: 80%;
        height: 25px;
        background: none;
        outline: none;
        cursor: pointer;
    }

    &:hover {
        bottom: 1px;
        box-shadow: 0px 5px 5px 0px #22222255;
    }
`;
const MoveButton = styled.button`
    width: 75px;
    height: 100%;
    background-color: #222222;
    position: absolute;
    right: 0px;
    top: 0px;
    outline: none;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px 5px 5px 0px;

    transition: 0.1s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > img {
        width: 35%;
        transform: rotate(90deg);
    }

    &:hover {
        background-color: #333333;
    }

    &:active {
        transition: 0s;
        background-color: #111111;

        ${Container} {
            transition: 0s;
            bottom: -1px;
        }
    }

    @media (min-width: 1480px) {
        & > img {
            transform: rotate(0deg);
        }
    }
`;
const SubmitChangesButton = styled.button`
    width: 75px;
    height: 100%;
    background-color: #222222;
    position: absolute;
    right: 0px;
    top: 0px;
    outline: none;
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px 5px 5px 0px;

    transition: 0.1s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > img {
        width: 65%;
    }

    &:hover {
        background-color: #333333;
    }

    &:active {
        transition: 0s;
        background-color: #111111;

        ${Container} {
            transition: 0s;
            bottom: -1px;
        }
    }
`;
export default Task;
