import React from "react";
import axios from "axios";
import Bounty from "./Bounty.js";
import AddForm from "./AddForm.js";
import styled from "styled-components";

const BountyContainer = styled.div`
    width: 50%;
    height: 100vh;

    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
`;
const FormContainer = styled.div`
    width: 50%;
    height: 100vh;

    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0px;
    right: 0px;
`;

function App() {
    const [bounties, setBounties] = React.useState([]);

    function getReq() {
        axios
            .get("/bounties")
            .then((res) => setBounties(res.data))
            .catch((err) => console.log(err));
    }

    function postReq(obj) {
        axios
            .post("/bounties", obj)
            .then((res) => setBounties((prev) => [...prev, res.data]))
            .catch((err) => console.log(err));
    }

    function putReq(obj) {
        axios
            .put(`/bounties/${obj._id}`, obj)
            .then((res) =>
                setBounties((prev) =>
                    prev.map((bounty) => {
                        if (bounty._id === obj._id) {
                            bounty = obj;
                        }
                        return bounty;
                    })
                )
            )
            .catch((err) => console.log(err));
    }

    function deleteReq(id) {
        axios
            .delete(`/bounties/${id}`)
            .then((res) =>
                setBounties((prev) =>
                    prev.filter((bounty) => bounty._id !== id)
                )
            )
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        getReq();
    }, []);

    return (
        <div>
            <BountyContainer>
                {bounties.map((bounty) => (
                    <Bounty
                        {...bounty}
                        key={bounty._id}
                        delete={deleteReq}
                        edit={putReq}
                    />
                ))}
            </BountyContainer>
            <FormContainer>
                <AddForm submit={postReq} />
            </FormContainer>
        </div>
    );
}

export default App;
