import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectProvider.js";
import Board from "./Board.js";

const ProjectFull = () => {
    const {
        project,
        project: { title, description, color, backlog, inProgress, completed },
        selected,
    } = useContext(ProjectContext);

    const containerRef = useRef(null);
    const headerRef = useRef(null);

    const Container = styled.div`
        flex: 1;
        background: linear-gradient(135deg, ${color[0]}, ${color[1]});

        height: 100vh;

        display: flex;
        align-items: center;
        flex-direction: column;

        padding-left: 40px;
        padding-right: 40px;
        padding-top: 20vh;
        padding-bottom: 5vh;
        position: relative;
        z-index: 0;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

        @media (min-width: 1024px) {
            flex: 2;
            padding-right: 40px;
            padding-left: 40px;
        }

        @media (min-width: 1480px) {
            flex: 2;
            padding-right: 120px;
            padding-left: 80px;
        }

        @media (min-width: 2300px) {
            flex: 3;
        }
    `;

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.opacity = 1;
            headerRef.current.style.left = "0px";
            headerRef.current.style.opacity = 1;
        }, 50);
    }, [project]);

    return (
        <Container ref={containerRef}>
            <Header ref={headerRef}>
                <TitleDesc>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </TitleDesc>
                <ButtonContainer>
                    <button>Complete!</button>
                </ButtonContainer>
            </Header>
            <BoardContainer>
                <Board />
                <Board />
                <Board />
            </BoardContainer>
        </Container>
    );
};

const Header = styled.div`
    flex: 1;
    padding-bottom: 40px;
    width: 100%;

    position: relative;
    left: -15px;

    display: flex;
    flex-direction: column;

    opacity: 0;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }
`;
const TitleDesc = styled.div`
    flex: 0;
    padding-bottom: 15px;

    & > h1 {
        color: #f2f2f2;
        font-size: 39px;
        width: 100%;
        line-height: 1.1;
        padding-bottom: 10px;
    }
    & > p {
        color: #f2f2f2;
        font-size: 15px;
        font-weight: 400;
        width: 90%;
        line-height: 1.3;
        padding-bottom: 10px;
    }

    @media (min-width: 1024px) {
        flex: 5;
        align-self: center;
        & > h1 {
            width: 75%;
        }
        & > p {
            font-size: 17px;
            width: 45%;
        }
    }
`;
const ButtonContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > button {
        width: 100%;
        height: 75px;

        background: none;
        border: 2px solid #f2f2f2;

        color: #f2f2f2;

        border-radius: 5px;

        font-size: 15px;
        font-weight: 800;

        cursor: pointer;

        outline: none;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

        &:hover {
            background-color: #f2f2f2;
            color: #222222;
        }

        &:active {
            background-color: #d2d2d2;
            transition: 0s;
        }
    }

    @media (min-width: 1024px) {
        justify-content: flex-end;

        & > button {
            width: 125px;
        }
    }
`;
const BoardContainer = styled.div`
    flex: 4;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 1480px) {
        flex-direction: row;
    }
`;

export default ProjectFull;
