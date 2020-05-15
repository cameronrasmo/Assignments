import React from "react";
import styled from "styled-components";
import Post from "./Post.js";
import { PostContext } from "../../PostContext.js";

const HomeContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const Posts = (props) => {
    const { getAllPosts, getAuthorPosts, postState } = React.useContext(
        PostContext
    );
    const { type, id } = props;
    React.useEffect(() => {
        type === "home" ? getAllPosts() : getAuthorPosts(id);
        // eslint-disable-next-line
    }, [type]);

    return (
        <HomeContainer>
            {postState.posts.map((post) => {
                return <Post {...post} key={post._id} />;
            })}
        </HomeContainer>
    );
};

export default Posts;
