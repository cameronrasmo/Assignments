import React from "react";
import styled from "styled-components";
import Post from "./Post.js";
import { PostContext } from "../../PostContext.js";

const Overlay = styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    background-color: #222222;
    display: none;
    opacity: 0;
    z-index: 1;

    transition: 0.2s;
    transition-delay: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);
`;
const AddPost = styled.div`
    width: 125px;
    height: 125px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 0px;
    bottom: 0px;

    & > button {
        width: 75px;
        height: 75px;
        border-radius: 50%;

        outline: none;
        border: 1px solid white;

        font-size: 23px;
        font-weight: 400;

        background-color: #f2f2f2;

        box-shadow: 0px 20px 20px 0px #22222250;
        cursor: pointer;

        transition: 0.2s;
        transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

        &:hover {
            background-color: #e7e7e7;
            transition: 0.2s;
        }

        &:active {
            color: #f2f2f2;
            border: 1px solid black;
            background-color: #222222;
            box-shadow: 0px 10px 10px 0px #22222280;
            transition: 0s;
        }
    }
    @media (max-width: 990px) {
        margin: 0px;
        width: 100px;
        height: 100px;

        & > button {
            width: 60px;
            height: 60px;
        }
    }
`;
const HomeContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const Posts = (props) => {
    const { getAllPosts, getAuthorPosts, postState } = React.useContext(
        PostContext
    );
    const overlayRef = React.useRef(null);
    const addToggle = () => {
        overlayRef.current.style.display = "inline-block";
        setTimeout(() => {
            overlayRef.current.style.opacity = ".5";
        }, 25);
    };
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
            <AddPost>
                <button onClick={addToggle}>+</button>
            </AddPost>
            <Overlay ref={overlayRef} />
        </HomeContainer>
    );
};

export default Posts;
