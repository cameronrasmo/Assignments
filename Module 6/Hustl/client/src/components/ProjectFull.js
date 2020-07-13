import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectProvider.js";

const ProjectFull = () => {
    const {
        project,
        project: { title, color, backlog, inProgress, completed },
        selected,
    } = useContext(ProjectContext);

    const containerRef = useRef(null);

    const Container = styled.div`
        flex: 1;
        background: linear-gradient(135deg, ${color[0]}, ${color[1]});

        height: 100vh;

        cursor: pointer;

        position: relative;
        opacity: 0;
        z-index: -1;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

        @media (min-width: 1024px) {
            flex: 2;
        }

        @media (min-width: 2300px) {
            flex: 3;
        }
    `;

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.opacity = 1;
        }, 50);
    }, [project]);

    return <Container ref={containerRef}>yes</Container>;
};

export default ProjectFull;
