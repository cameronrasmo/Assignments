import React from "react";
import styled from "styled-components";
import EditForm from "./EditForm.js";

const Card = styled.div`
    width: 50%;
    margin: 20px auto;

    padding: 25px;

    border: 2px solid black;

    p {
        text-transform: capitalize;
    }
`;

function Bounty(props) {
    let [editToggle, setEditToggle] = React.useState(false);
    function toggler() {
        setEditToggle((prev) => (editToggle = !prev));
    }
    const { firstName, lastName, living, bountyAmount, type, _id } = props;
    return (
        <Card>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{`Living: ${living}`}</p>
            <h4>{`Amount: ${bountyAmount}`}</h4>
            <h4>{`Type: ${type}`}</h4>
            <p>{`ID: ${_id}`}</p>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.delete(_id);
                }}
            >
                delete
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(editToggle);
                    setEditToggle((prev) => (editToggle = !prev));
                }}
            >
                edit
            </button>
            <br />
            <br />

            {editToggle === true ? (
                <EditForm {...props} toggler={toggler} />
            ) : null}
        </Card>
    );
}

export default Bounty;
