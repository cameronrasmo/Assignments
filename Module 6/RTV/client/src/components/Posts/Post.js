import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    padding-top: 100px;

    position: absolute;
    top: 0px;

    background-color: #f5f5f5;

    & > h3 {
        position: relative;
        bottom: 10px;
        left: 30px;

        font-weight: 500;
    }

    & > h1 {
        position: relative;
        bottom: 10px;
        left: 30px;

        font-size: 40px;
        color: #222222;
    }

    & > hr {
        width: 130px;
        height: 10px;

        position: relative;
        left: 30px;

        border: none;
        background-color: #b1f0d2;
    }
`;
const PostContainer = styled.div`
    width: 60%;
    min-height: 80vh;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;

    position: relative;

    background-color: #222222;

    box-shadow: 10px 10px 0px 0px #22222280;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    &:hover {
        box-shadow: 5px 5px 0px 0px #22222280;
    }
`;

const Post = (props) => {
    const { title, postBody, imgSrc, upvotes, downvotes, author } = props;

    const ratePercentage = (downvotes / upvotes) * 100;

    return (
        <PostContainer>
            <HeaderContainer>
                <h3>from {author}</h3>
                <h1>{title}</h1>
                <hr />
            </HeaderContainer>
            <p>{postBody}</p>
            <img alt='' src={imgSrc} />
            {upvotes === 0 || downvotes === 0 ? null : (
                <p>{ratePercentage}% upvoted</p>
            )}
        </PostContainer>
    );
};

export default Post;
