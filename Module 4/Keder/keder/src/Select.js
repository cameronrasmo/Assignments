import React from "react";
import styled from "styled-components";

const OptionContainer = styled.label`
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;

    background-color: #222222;

    transition: 0.2s;

    cursor: pointer;

    text-transform: capitalize;

    &:hover {
        background-color: #424242;
        transition: 0s;
    }

    &:active {
        background-color: #63ffe8;
        color: #222222;
    }
`;
const FlexFormHeader = styled.div`
    width: 20vh;
    height: 15vh;

    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 25px;

    text-transform: capitalize;
`;
const FormContainer = styled.form`
    width: 100%;
    height: 35vh;
    overflow: scroll;

    display: flex;
    flex-direction: column;

    background-color: #222222;
    color: #f2f2f2;

    font-size: 20px;

    scrollbar-width: thin;
`;
const FlexFormContainer = styled.div`
    width: 100%;
    height: 50vh;

    position: absolute;
    bottom: 0%;

    display: flex;
    align-items: flex-end;

    background-color: #63ffe8;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    input {
        width: 15vh;
        height: 15vh;

        position: absolute;
        top: 0px;
        right: 0px;

        background: none;
        background-image: url("./img/check.png");
        border: none;
        border-radius: 0px;
        background-size: cover;
        opacity: 0.5;
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        & {
            width: 40%;
            bottom: 25%;
            margin-left: 125px;
        }
        ${FlexFormHeader} {
            padding-left: 50px;
            width: 100%;
        }
        ${FlexFormHeader} h1 {
            font-size: 50px;
            font-weight: 1000;
        }
        ${OptionContainer} {
            padding-top: 40px;
            padding-bottom: 40px;
            font-size: 30px;
        }
    }
`;

function TypeSelect(props) {
    let [selection, setSelection] = React.useState("");

    function handleChange(e) {
        const { value } = e.target.childNodes[1];
        setSelection((selection = value));
    }

    const displayed = props.criteria.map((item) => {
        return (
            <OptionContainer onClick={handleChange} for={item}>
                {item}
                <input
                    type='radio'
                    style={{ opacity: "0" }}
                    name={item}
                    value={item}
                    checked={selection === { item }}
                />
            </OptionContainer>
        );
    });

    return (
        <FlexFormContainer>
            <FlexFormHeader>
                <h1>{selection !== "" ? selection : props.type}</h1>
            </FlexFormHeader>
            <FormContainer>{displayed}</FormContainer>
            <input
                type='button'
                style={
                    selection === ""
                        ? { opacity: ".5", cursor: "auto" }
                        : { opacity: "1", cursor: "pointer" }
                }
                onClick={() => {
                    if (selection !== "") {
                        props.request(selection, props.type);
                        setSelection((selection = ""));
                    }
                }}
            />
        </FlexFormContainer>
    );
}

export default TypeSelect;
