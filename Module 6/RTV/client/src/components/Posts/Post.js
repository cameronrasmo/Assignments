import React from "react";
import styled from "styled-components";
import comment from "../../img/comment.svg";
import upVote from "../../img/upVote.svg";
import downVote from "../../img/downVote.svg";
import exit from "../../img/exitButton.svg";
import Comment from "./Comment.js";
import { PostContext } from "../../PostContext.js";

const PostImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
`;
const PostBodyContainer = styled.div`
    color: #e2e2e2;
    font-size: 20px;
    font-weight: 400;
    flex: 1;
    padding: 30px;

    @media (max-width: 990px) {
        padding: 20px;
        font-size: 18px;
    }
`;
const PostContentContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    padding-top: 200px;
    padding-bottom: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    line-height: 1.5;

    @media (max-width: 990px) {
        min-height: 95vh;
        flex-direction: column;
        padding-top: 200px;
        padding-bottom: 50px;
    }
`;
const InputComponent = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;

    position: absolute;
    bottom: 0px;
    left: 0px;

    background-color: #2e2e2e;
    color: #f2f2f2;
    border: none;
    outline: none;
`;
const CommentPanel = styled.div`
    width: 0%;
    height: 100%;

    background-color: #222222;
    position: absolute;
    top: 0px;
    left: 100%;
    overflow: hidden;
    box-shadow: 10px 10px 0px 0px #22222280;
    border: none;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    & > button {
        width: 75px;
        height: 50px;
        background-color: #f2f2f2;
        border: none;

        position: absolute;
        right: 0px;
        outline: none;
        display: none;

        cursor: pointer;
    }

    & > button > img {
        width: 25px;
    }

    & > form > button {
        width: 50px;
        height: 50px;

        position: absolute;
        bottom: 0px;
        right: 0px;

        background-color: #f2f2f2;
        border-radius: 0px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    & > form > button > img {
        width: 25px;

        position: relative;
        top: 2px;
    }

    & > form > button:hover {
        background-color: #e5e5e5;
    }

    & > form > button:active {
        background-color: #222222;
        color: #f5f5f5;
        & > img {
            filter: invert(1);
        }
    }

    & > div {
        height: 100%;
        padding-bottom: 75px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 15px;
        padding-left: 30px;
        color: #f2f2f2;
    }

    & > form {
        width: 100%;
    }

    @media (max-width: 1500px) {
        left: 0%;
        right: 0%;
        box-shadow: none;
        & > button {
            display: inline-block;
        }

        & > form > button {
            width: 75px;
        }
    }
`;
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

    @media (max-width: 990px) {
        & > p {
            display: none;
        }
        & > img {
            margin: auto;
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

    @media (max-width: 990px) {
        font-size: 18px;
    }
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

    @media (max-width: 990px) {
        & > h3 {
            left: 20px;
        }
        & > h1 {
            font-size: 30px;
            left: 20px;
        }
        & > hr {
            left: 20px;
        }
    }
`;
const PostContainer = styled.div`
    width: 60%;
    min-height: 80vh;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;

    position: relative;
    left: 0%;

    background-color: #222222;

    box-shadow: 10px 10px 0px 0px #22222280;

    transition: 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.05, 1);

    @media (max-width: 1500px) {
        width: 80%;
    }

    @media (max-width: 990px) {
        width: 100%;
        min-height: 95vh;
        box-shadow: none;
    }
`;

const Post = (props) => {
    const {
        title,
        postBody,
        imgSrc,
        upvotes,
        downvotes,
        authorID,
        _id,
    } = props;
    const [authorName, setAuthorName] = React.useState("");
    const { userAxios, rate, postComment } = React.useContext(PostContext);
    const ratePercentage = Math.round((upvotes / (upvotes + downvotes)) * 100);
    const [ratedToggle, setRatedToggle] = React.useState(false);
    const [commentToggle, setCommentToggle] = React.useState(false);
    const commentRef = React.useRef(null);
    const postRef = React.useRef(null);
    const [commentState, setCommentState] = React.useState({ comment: "" });
    const [comments, setComments] = React.useState({ comments: [] });

    const getPostAuthor = (authorID) => {
        userAxios
            .get(`/api/posts/author/${authorID}`)
            .then((res) => {
                setAuthorName(res.data.username);
            })
            .catch((err) => console.log(err));
    };

    const commentPanel = () => {
        setCommentToggle((prev) => !prev);
        if (window.innerWidth > 1500)
            setTimeout(() => {
                if (!commentToggle) {
                    commentRef.current.style.width = "40%";
                    postRef.current.style.width = "50%";
                    postRef.current.style.left = "-10%";
                } else {
                    commentRef.current.style.width = "0%";
                    postRef.current.style.width = "60%";
                    postRef.current.style.left = "0%";
                }
            }, 150);
        else {
            if (!commentToggle) {
                commentRef.current.style.width = "100%";
            } else {
                commentRef.current.style.width = "0%";
            }
        }
    };

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setCommentState((prev) => {
            return {
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(commentState, _id);
        setCommentState((prev) => {
            return {
                comment: "",
            };
        });
        getPostComments(_id);
    };

    const getPostComments = (postID) => {
        userAxios
            .get(`/api/posts/${postID}/comment`)
            .then((res) =>
                setComments((prev) => {
                    return {
                        comments: res.data,
                    };
                })
            )
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        getPostAuthor(authorID);
        getPostComments(_id);
        // eslint-disable-next-line
    }, [ratedToggle]);
    console.log(imgSrc);
    return (
        <PostContainer ref={postRef}>
            <HeaderContainer>
                <h3>
                    from <strong>{authorName}</strong>
                </h3>
                <h1>{title}</h1>
                <hr />
            </HeaderContainer>
            <PostContentContainer>
                <PostBodyContainer>
                    <p>{postBody}</p>
                </PostBodyContainer>
                {imgSrc !== "" ? (
                    <PostImageContainer style={{ flex: 2 }}>
                        <img alt='' src={imgSrc} />
                    </PostImageContainer>
                ) : null}
            </PostContentContainer>
            <OptionsContainer>
                <RatingContainer>
                    {upvotes === 0 || downvotes === 0 ? null : (
                        <p>
                            <strong>{ratePercentage}%</strong> upvoted
                        </p>
                    )}
                </RatingContainer>
                <CTAContainer>
                    <CommentsContainer onClick={commentPanel}>
                        <img type='image/svg+xml' src={comment} alt='' />
                        <p>comments</p>
                    </CommentsContainer>
                    <ArrowsContainer>
                        <Vote
                            style={
                                ratedToggle
                                    ? { backgroundColor: "#e5e5e5" }
                                    : null
                            }
                            onClick={() => {
                                if (!ratedToggle) {
                                    rate("upvote", _id);
                                }
                                setRatedToggle((prev) => true);
                            }}
                        >
                            <img src={upVote} alt='upvote' />
                        </Vote>

                        <Vote
                            style={
                                ratedToggle
                                    ? { backgroundColor: "#e5e5e5" }
                                    : null
                            }
                            onClick={() => {
                                if (!ratedToggle) {
                                    rate("downvote", _id);
                                }
                                setRatedToggle((prev) => true);
                            }}
                        >
                            <img src={downVote} alt='downvote' />
                        </Vote>
                    </ArrowsContainer>
                </CTAContainer>
            </OptionsContainer>
            <CommentPanel
                ref={commentRef}
                style={
                    commentToggle
                        ? { borderLeft: "1px solid black" }
                        : { borderLeft: "none" }
                }
            >
                <button onClick={commentPanel}>
                    <img src={exit} alt='exit comments' />
                </button>
                <div>
                    {comments.comments.map((comment) => {
                        return (
                            <Comment
                                key={comment._id}
                                comment={comment.comment}
                                authorID={comment.authorID}
                            />
                        );
                    })}
                </div>
                <form onSubmit={handleSubmit}>
                    <InputComponent
                        type='text'
                        value={commentState.comment}
                        onChange={handleCommentChange}
                        name='comment'
                    />
                    <button>
                        <img src={upVote} alt='upvote' />
                    </button>
                </form>
            </CommentPanel>
        </PostContainer>
    );
};

export default Post;
