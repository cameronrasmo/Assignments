import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import ProjectFull from "../components/ProjectFull.js";
import { ProjectContext } from "../context/ProjectProvider.js";

const Dashboard = () => {
    const pRef = useRef(null);
    const { project, selected } = useContext(ProjectContext);

    useEffect(() => {
        setTimeout(() => {
            pRef.current.style.opacity = 1;
            pRef.current.style.top = "0px";
        }, 350);
    }, []);

    return (
        <DashboardContainer>
            <Sidebar />
            {selected ? (
                <ProjectFull />
            ) : (
                <PromptArea>
                    <p ref={pRef}>Pick a project or make one!</p>
                </PromptArea>
            )}
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;
const PromptArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    & > p {
        font-size: 22px;
        font-weight: 500;
        color: #22222275;
        display: none;

        position: relative;
        top: 15px;
        opacity: 0;

        transition: 0.4s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);
    }

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 2;

        & > p {
            display: flex;
        }
    }

    @media (min-width: 1480px) {
        flex: 3;
    }
`;

export default Dashboard;
