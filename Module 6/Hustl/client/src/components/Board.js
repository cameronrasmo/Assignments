import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import addIconLight from "../img/icons/addIconLight.svg";
import Task from "./Task.js";

const Board = ({ type, project }) => {
    const outlineContainerRef = useRef(null);
    const timeoutEval = (type) => {
        if (type === "Backlog") {
            return 50;
        }
        if (type === "In-Progress") {
            return 75;
        }
        if (type === "Completed") {
            return 100;
        }
    };

    useEffect(() => {
        setTimeout(() => {
            outlineContainerRef.current.style.transition = "0.2s";
            outlineContainerRef.current.style.left = "0px";
            outlineContainerRef.current.style.opacity = 1;
        }, timeoutEval(type));

        return () => {
            outlineContainerRef.current.style.transition = "0s";
            outlineContainerRef.current.style.left = "-10px";
            outlineContainerRef.current.style.opacity = 0;
        };
    }, [project]);

    return (
        <OutlineContainer ref={outlineContainerRef}>
            <Header>
                <h3>{type}</h3>
                {type === "Backlog" ? (
                    <button>
                        <img src={addIconLight} alt='+' />
                    </button>
                ) : null}
            </Header>
            <TaskContainer>
                <Task />
                <Task />
                <Task />
            </TaskContainer>
        </OutlineContainer>
    );
};

const OutlineContainer = styled.div`
    border: 2px solid #f2f2f2;
    border-radius: 5px;
    flex: 1;
    padding: 30px 20px;

    opacity: 0;
    position: relative;
    left: -10px;

    margin-top: 30px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    @media (min-width: 1024px) {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
`;
const Header = styled.div`
    /* height: 90px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 0.5;
    margin-bottom: 30px;

    & > h3 {
        color: #f2f2f2;
        font-weight: 600;
    }
    & > button {
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: none;

        outline: none;

        cursor: pointer;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

        &:hover {
            background-color: #f2f2f225;
        }

        &:active {
            transition: 0s;
            background-color: #f2f2f250;
        }
    }
`;
const TaskContainer = styled.div`
    flex: 6;
`;

export default Board;
