import React from "react";
import styled from "styled-components";
import comment from "../../img/comment.svg";
import upVote from "../../img/upVote.svg";
import downVote from "../../img/downVote.svg";
import { PostContext } from "../../PostContext.js";

const Vote = styled.div`
    background-color: #f5f5f5;

    cursor: pointer;

    &:hover {
        background-color: #e5e5e5;
    }

    &:active {
        background-color: #222222;
        color: #f5f5f5;
        & > img {
            filter: invert(1);
        }
    }
`;
const ArrowsContainer = styled.div`
    display: flex;
    height: 100%;

    & > div {
        width: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > div > img {
        width: 50%;
    }
`;
const CommentsContainer = styled.div`
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 500;
    color: #222222;

    background-color: #f5f5f5;

    cursor: pointer;

    & > img {
        height: 55%;
        margin-right: 17px;
        position: relative;
        top: 1px;
    }

    &:hover {
        background-color: #e5e5e5;
    }

    &:active {
        background-color: #222222;
        color: #f5f5f5;
        & > img {
            filter: invert(1);
        }
    }
`;
const CTAContainer = styled.div`
    height: 100%;

    display: flex;
`;
const RatingContainer = styled.div`
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 500;
    color: #222222;
`;
const OptionsContainer = styled.div`
    width: 100%;
    height: 50px;

    position: absolute;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #f5f5f5;
`;
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
        width: 50%;
        color: #222222;

        font-weight: 500;
    }

    & > h1 {
        position: relative;
        bottom: 10px;
        left: 30px;
        width: 50%;

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

    @media (max-width: 990px) {
        width: 100%;
        min-height: 95vh;
        box-shadow: none;
    }
`;

const Post = (props) => {
    const { title, postBody, imgSrc, upvotes, downvotes, authorID } = props;
    const [authorName, setAuthorName] = React.useState("");
    const { userAxios } = React.useContext(PostContext);
    const ratePercentage = Math.round((downvotes / upvotes) * 100);

    const getPostAuthor = (authorID) => {
        userAxios
            .get(`/api/posts/author/${authorID}`)
            .then((res) => {
                setAuthorName(res.data.username);
            })
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        getPostAuthor(authorID);
        // eslint-disable-next-line
    }, []);

    return (
        <PostContainer>
            <HeaderContainer>
                <h3>
                    from <strong>{authorName}</strong>
                </h3>
                <h1>{title}</h1>
                <hr />
            </HeaderContainer>

            <p>{postBody}</p>
            <img alt='' src={imgSrc} />
            <OptionsContainer>
                <RatingContainer>
                    {upvotes === 0 || downvotes === 0 ? null : (
                        <p>
                            <strong>{ratePercentage}%</strong> upvoted
                        </p>
                    )}
                </RatingContainer>
                <CTAContainer>
                    <CommentsContainer>
                        <img type='image/svg+xml' src={comment} alt='' />
                        <p>comments</p>
                    </CommentsContainer>
                    <ArrowsContainer>
                        <Vote>
                            <img src={upVote} alt='upvote' />
                        </Vote>

                        <Vote>
                            <img src={downVote} alt='downvote' />
                        </Vote>
                    </ArrowsContainer>
                </CTAContainer>
            </OptionsContainer>
        </PostContainer>
    );
};

export default Post;
