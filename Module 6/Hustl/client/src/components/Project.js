import React, { useContext } from "react";
import styled from "styled-components";
import arrow from "../img/icons/arrow.svg";
import { ProjectContext } from "../context/ProjectProvider.js";
import { Link } from "react-router-dom";

const Project = ({ title, color, backlog, inProgress, completed, _id }) => {
    const { getProject } = useContext(ProjectContext);

    const lower = title.split(" ").join("").toLowerCase();

    const ProjectContainer = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;

        padding: 30px 20px;
        position: relative;
        bottom: 0px;

        margin-top: 30px;
        margin-bottom: 30px;

        border-radius: 5px;

        box-shadow: 0px 4px 7px 0px #22222275;

        background: linear-gradient(135deg, ${color[0]}, ${color[1]});

        transition: 0.4s;
        transition-timing-function: cubic-bezier(0, 0, 0.006, 1);

        cursor: pointer;

        & > img {
            position: absolute;

            margin: 20px 23px;

            width: 30px;
            height: 30px;

            bottom: 0px;
            right: 0px;

            transition: 0.2s;
            transition-timing-function: cubic-bezier(0, 0, 0.006, 1);
        }

        &:hover {
            opacity: 0.9;
            box-shadow: 0px 5px 6px 0px #22222255;
            background: linear-gradient(-45deg, ${color[0]}, ${color[1]});
            & > img {
                margin: 20px 20px;
            }
        }

        &:active {
            background: linear-gradient(-45deg, ${color[0]}, ${color[1]});
            opacity: 1;
            transition: 0s;
            bottom: -1px;
            box-shadow: 0px 2px 2px 0px #22222255;
            & > img {
                transition: 0s;
                opacity: .8;
                margin: 20px 25px;
            }
        }
        }
    `;
    return (
        <ProjectContainer
            onClick={() => {
                getProject(_id);
            }}
        >
            <Progress>
                <strong>30%</strong> complete
            </Progress>
            <Header>{title}</Header>
            <DetailsContainer>
                <p>items in backlog</p>
                <p>items in progress</p>
                <p>items completed</p>
            </DetailsContainer>
            <img src={arrow} alt='>' />
        </ProjectContainer>
    );
};

const Progress = styled.h4`
    font-weight: 300;
    opacity: 0.75;

    color: #f2f2f2;

    & > strong {
        font-weight: 600;
        color: #f2f2f2;
    }
`;
const Header = styled.h1`
    font-size: 30px;
    line-height: 1.3;
    color: #f2f2f2;
`;
const DetailsContainer = styled.div`
    margin-top: 15px;
    color: #f2f2f2;

    & > p {
        margin: 10px 0px;
        opacity: 0.75;
        font-weight: 500;
        color: #f2f2f2;
    }
`;

export default Project;
