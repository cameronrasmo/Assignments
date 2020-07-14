import React from "react";
import styled from "styled-components";

const Board = () => {
    return (
        <OutlineContainer>
            <Header></Header>
        </OutlineContainer>
    );
};

const OutlineContainer = styled.div`
    border: 2px solid #f2f2f2;
    border-radius: 5px;
    flex: 1;

    margin-top: 30px;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
`;
const Header = styled.div``;

export default Board;
