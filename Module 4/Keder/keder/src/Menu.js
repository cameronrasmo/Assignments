import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

    transition: 0.2s;

    ${MenuItem}:hover & {
        padding-right: 45px;
    }
`;
const MenuHovered = styled.div`
    height: 52.5px;
    width: 0px;
    position: absolute;

    background-color: #63ffe8;
    color: #222222;
    overflow: hidden;

    border-left: 0px solid #222222;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    ${MenuItem}:hover & {
        width: 235px;
        border-left: 5px solid #222222;
    }
    ${MenuItem}:active & {
        background-color: #5df3dd;
        transition: 0s;
    }
    ${MenuItem}:checked & {
        width: 235px;
        border-left: 5px solid #222222;
    }
`;
const MenuSelected = styled.div`
    height: 52.5px;
    width: 235px;
    position: absolute;

    background-color: #63ffe8;
    color: #222222;
    overflow: hidden;

    border-left: 0px solid #222222;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
    ${MenuItem}:hover & {
        width: 235px;
        border-left: 5px solid #222222;
    }
    ${MenuItem}:active & {
        background-color: #5df3dd;
        transition: 0s;
    }
    ${MenuItem}:checked & {
        width: 235px;
        border-left: 5px solid #222222;
    }
`;
const MenuTextHovered = styled.p`
    font-size: 35px;
    font-weight: 1000;

    position: absolute;
    top: 2px;
    right: 25px;

    transition: 0.2s;

    ${MenuItem}:hover & {
        right: 45px;
    }
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
    a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-decoration: none;
        cursor: pointer;
    }

    @media (min-height: 812px) {
        & {
            height: 256px;
        }
        ${MenuHovered} {
            height: 64px;
        }
        ${MenuSelected} {
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
            margin-right: 125px;
            margin-bottom: 0px;
        }
    }
`;

function Menu(props) {
    return (
        <div>
            <Container
                style={
                    props.selected === undefined &&
                    window.matchMedia("(max-width: 1024px)").matches === true
                        ? { bottom: "0px" }
                        : window.matchMedia("(max-width: 1024px)").matches ===
                          true
                        ? { top: "0px" }
                        : { bottom: "35%" }
                }
            >
                <Link to='/type'>
                    <MenuItem>
                        <MenuText>Type</MenuText>
                        {props.selected === "type" ? (
                            <MenuSelected>
                                <MenuTextHovered>Type</MenuTextHovered>
                            </MenuSelected>
                        ) : (
                            <MenuHovered>
                                <MenuTextHovered>Type</MenuTextHovered>
                            </MenuHovered>
                        )}
                    </MenuItem>
                </Link>
                <Link to='/price'>
                    <MenuItem>
                        <MenuText>Price</MenuText>
                        {props.selected === "price" ? (
                            <MenuSelected>
                                <MenuTextHovered>Price</MenuTextHovered>
                            </MenuSelected>
                        ) : (
                            <MenuHovered>
                                <MenuTextHovered>Price</MenuTextHovered>
                            </MenuHovered>
                        )}
                    </MenuItem>
                </Link>
                <Link to='/people'>
                    <MenuItem>
                        <MenuText>People</MenuText>
                        {props.selected === "people" ? (
                            <MenuSelected>
                                <MenuTextHovered>People</MenuTextHovered>
                            </MenuSelected>
                        ) : (
                            <MenuHovered>
                                <MenuTextHovered>People</MenuTextHovered>
                            </MenuHovered>
                        )}
                    </MenuItem>
                </Link>
                <MenuItem onClick={props.request}>
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
