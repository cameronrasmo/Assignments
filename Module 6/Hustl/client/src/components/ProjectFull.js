import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectProvider.js";
import Board from "./Board.js";

const ProjectFull = () => {
    const {
        selected,
        setProject,
        getProjects,
        updateProject,
        project,
        project: {
            title,
            description,
            color,
            backlog,
            inProgress,
            completed,
            _id,
        },
    } = useContext(ProjectContext);

    const [fieldState, setFieldState] = useState({
        title: "",
        description: "",
    });
    const [editState, setEditState] = useState(false);

    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const submitButtonRef = useRef(null);

    const onChangeFields = (e) => {
        const { name, value } = e.target;
        setFieldState((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const edit = () => {
        setEditState(true);
        submitButtonRef.current.style.height = "100px";
    };

    useEffect(() => {
        setFieldState({ title, description });
        containerRef.current.style.background = `linear-gradient(135deg, ${color[0]}, ${color[1]} )`;
        containerRef.current.style.opacity = 1;

        setTimeout(() => {
            headerRef.current.style.transition = "0.2s";
            headerRef.current.style.opacity = 1;
            headerRef.current.style.left = "0px";
        }, 50);

        return () => {
            headerRef.current.style.transition = "0s";
            headerRef.current.style.opacity = 0;
            headerRef.current.style.left = "-10px";
        };
    }, [project]);

    return (
        <Container ref={containerRef}>
            <Header ref={headerRef}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        updateProject(_id, fieldState);
                        getProjects();
                        setEditState(false);
                        submitButtonRef.current.style.height = "75px";
                    }}
                    onFocus={() => {
                        edit();
                    }}
                >
                    <TitleDesc>
                        <TitleInput
                            value={fieldState.title}
                            name='title'
                            onChange={onChangeFields}
                        />
                        <DescInput
                            value={fieldState.description}
                            name='description'
                            onChange={onChangeFields}
                        />
                    </TitleDesc>
                    <ButtonContainer>
                        <button type='submit' ref={submitButtonRef}>
                            {editState ? "Submit Edit" : "Complete!"}
                        </button>
                    </ButtonContainer>
                </form>
            </Header>
            <BoardContainer>
                <Board />
                <Board />
                <Board />
            </BoardContainer>
        </Container>
    );
};
const Container = styled.div`
    flex: 1;
    background: linear-gradient(135deg, #222, #fff);

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

    & > form {
        width: 100%;
        display: flex;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
    }
`;
const TitleDesc = styled.div`
    flex: 0;
    padding-bottom: 15px;

    line-height: 1.1;
    padding-bottom: 10px;

    @media (min-width: 1024px) {
        flex: 5;
        align-self: center;
        & > h1 > textarea {
            width: 75%;
        }
        & > h1 > input {
            width: 75%;
        }
        & > p {
            font-size: 17px;
            width: 45%;
        }
    }
`;
const TitleInput = styled.input`
    width: 100%;
    color: #f2f2f2;
    font-size: 39px;
    font-weight: 700;
    background: none;
    outline: none;
    border: 2px solid #f2f2f200;
    border-radius: 5px;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    &:hover {
        border: 2px solid #f2f2f230;
    }

    &:focus {
        border: 2px solid #f2f2f270;
    }
`;
const DescInput = styled.textarea`
    resize: none;
    color: #f2f2f2;
    background: none;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    height: 75px;
    line-height: 1.3;
    padding-bottom: 10px;

    outline: none;
    border: 2px solid #f2f2f200;
    border-radius: 5px;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    &:hover {
        border: 2px solid #f2f2f230;
    }

    &:focus {
        border: 2px solid #f2f2f270;
    }

    @media (min-width: 1024px) {
        width: 60%;
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
