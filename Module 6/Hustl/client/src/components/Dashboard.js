import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import logo from "../img/logo/logo.svg";

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Sidebar />
            <div>Pick a project or make one!</div>
            <Logo>
                <img src={logo} alt='logo' />
            </Logo>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
`;

const Logo = styled.div`
    width: 60px;
    position: absolute;
    right: 0px;
    top: 0px;

    opacity: 1;

    margin-top: 25px;
    margin-right: 45px;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

    & > img {
        width: 100%;
        height: 100%;
    }
`;

export default Dashboard;
