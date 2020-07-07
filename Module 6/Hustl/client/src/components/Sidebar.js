import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthProvider.js";

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <SidebarContainer>
            <SidebarHeaderContainer>
                <h4>Hustl</h4>
                <button onClick={logout}>Log Out</button>
            </SidebarHeaderContainer>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;

    display: flex;
    flex-direction: column;

    background: linear-gradient(#ffffff, #dbdbdb);
`;
const SidebarHeaderContainer = styled.div`
    padding: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 5px 0px #22222275;

    & > h4 {
        font-size: 15px;
    }

    & > button {
        padding: 6px 13px;
        border-radius: 5px;

        color: #f2f2f2;
        font-size: 15px;
        font-weight: 500;

        background-color: #222222;
        border: 2px solid #00000020;

        cursor: pointer;
        outline: none;

        transition: 0.4s;
        transition-timing-function: cubic-bezier(0, 0, 0.056, 1);

        &:hover {
            background-color: #444444;
        }

        &:active {
            background-color: #22222275;
            transition: 0s;
        }
    }
`;

export default Sidebar;
