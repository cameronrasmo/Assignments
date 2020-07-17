import React from "react";
import styled from "styled-components";
import arrow from "../img/icons/arrow.svg";

const Task = () => {
    return (
        <Container>
            <textarea placeholder='What do you have to do?'>
                Ah yes haha very nice
            </textarea>
            <MoveButton>
                <img src={arrow} alt='>' />
            </MoveButton>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 30px 20px;

    display: flex;
    flex-direction: row;

    position: relative;
    bottom: 0px;

    background-color: #f2f2f2;
    border-radius: 5px;

    cursor: pointer;

    transition: 0.1s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > textarea {
        font-weight: 600;
        font-size: 17px;
        color: #222222;
        width: 75%;
        resize: none;
        border: none;
        background: none;
        outline: none;
    }

    &:hover {
        bottom: 1px;
        box-shadow: 0px 5px 5px 0px #22222225;
    }
`;

const MoveButton = styled.div`
    width: 75px;
    height: 100%;
    background-color: #222222;
    position: absolute;
    right: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px 5px 5px 0px;

    transition: 0.1s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > img {
        width: 35%;
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
