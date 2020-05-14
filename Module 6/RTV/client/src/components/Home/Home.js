import React from "react";
import styled from "styled-components";
import { PostContext } from "../../PostContext.js";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

const Home = (props) => {
    const postContext = React.useContext(PostContext);
    React.useEffect(() => {
        postContext.getAllPosts();
    }, [postContext]);
    return <HomeContainer></HomeContainer>;
};

export default Home;
