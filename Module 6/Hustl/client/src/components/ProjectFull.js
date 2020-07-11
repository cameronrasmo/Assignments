import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectContext } from "../context/ProjectProvider.js";

const ProjectFull = () => {
    const {
        project: { title, color, backlog, inProgress, completed },
    } = useContext(ProjectContext);

    const containerRef = useRef(null);

    const Container = styled.div`
        flex: 3;
        background: linear-gradient(135deg, ${color[0]}, ${color[1]});

        position: relative;
        opacity: 0;
        left: -15px;

        transition: 0.4s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);
    `;

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.style.left = "0px";
            containerRef.current.style.opacity = 1;
        }, 150);
    }, []);

    return <Container ref={containerRef}>yes</Container>;
};

export default ProjectFull;
