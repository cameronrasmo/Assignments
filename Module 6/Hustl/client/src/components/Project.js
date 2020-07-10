import React from "react";
import styled from "styled-components";

const Project = () => {
    return (
        <ProjectContainer>
            <Progress>
                <strong>30%</strong> complete
            </Progress>
            <Header>Project Title</Header>
            <DetailsContainer>
                <p>items in backlog</p>
                <p>items in progress</p>
                <p>items completed</p>
            </DetailsContainer>
        </ProjectContainer>
    );
};

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

    background: linear-gradient(135deg, #3a3648, #754d4d);

    transition: 0.4s;
    transition-timing-function: cubic-bezier(0, 0, 0.006, 1);

    cursor: pointer;

    &:hover {
        opacity: 0.9;
        box-shadow: 0px 5px 6px 0px #22222255;
        background: linear-gradient(-45deg, #3a3648, #754d4d);
    }

    &:active {
        background: linear-gradient(-45deg, #3a3648, #754d4d);
        opacity: 1;
        transition: 0s;
        bottom: -1px;
        box-shadow: 0px 2px 2px 0px #22222255;
    }
`;
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
