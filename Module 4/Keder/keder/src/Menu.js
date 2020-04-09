import React from "react";
import styled from "styled-components";

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    cursor: pointer;
`;
const MenuText = styled.div`
    padding-left: 25px;
    padding-right: 25px;

    color: #f2f2f2;
    font-size: 35px;
    font-weight: 1000;
`;
const MenuHovered = styled.div`
    height: 52.5px;
    width: 0px;
    position: absolute;

    background-color: #63ffe8;
    color: #222222;
    overflow: hidden;

    border-left: 0px solid #222222;

    transition: 0.3s;
    transition-timing-function: ease-in-out;
    ${MenuItem}:hover & {
        width: 200px;
        border-left: 5px solid #222222;
    }
`;
const MenuTextHovered = styled.p`
    font-size: 35px;
    font-weight: 1000;

    position: absolute;
    top: 2px;
    right: 25px;
`;
const Container = styled.div`
    width: 225px;
    height: 210px;
    margin: 25px;

    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0px;
    right: 0px;

    border-right: 4px solid #63ffe8;

    @media (min-height: 812px) {
        & {
            height: 256px;
        }
        ${MenuHovered} {
            height: 64px;
        }
        ${MenuTextHovered} {
            top: 8px;
        }
    }

    @media (min-width: 1024px) {
        & {
            bottom: 35%;
            margin: 75px;
            margin-bottom: 0px;
        }
    }
`;

function Menu() {
    return (
        <div>
            <Container>
                <MenuItem>
                    <MenuText>Type</MenuText>
                    <MenuHovered>
                        <MenuTextHovered>Type</MenuTextHovered>
                    </MenuHovered>
                </MenuItem>
                <MenuItem>
                    <MenuText>Price</MenuText>
                    <MenuHovered>
                        <MenuTextHovered>Price</MenuTextHovered>
                    </MenuHovered>
                </MenuItem>
                <MenuItem>
                    <MenuText>People</MenuText>
                    <MenuHovered>
                        <MenuTextHovered>People</MenuTextHovered>
                    </MenuHovered>
                </MenuItem>
                <MenuItem>
                    <MenuText>Random</MenuText>
                    <MenuHovered>
                        <MenuTextHovered>Random</MenuTextHovered>
                    </MenuHovered>
                </MenuItem>
            </Container>
        </div>
    );
}

export default Menu;
