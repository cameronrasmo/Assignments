import React from "react";
import Axios from "axios";

const PostContext = React.createContext();
const userAxios = Axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const initPostState = {
    posts: [],
};

const PostContextProvider = (props) => {
    const [postState, setPostState] = React.useState(initPostState);

    const getAllPosts = () => {
        userAxios
            .get("/api/posts")
            .then((res) => {
                setPostState((prev) => {
                    return {
                        posts: res.data,
                    };
                });
            })
            .catch((err) => {
                console.dir(err);
            });
    };

    const getAuthorPosts = (authorID) => {
        userAxios
            .get(`/api/posts/${authorID}`)
            .then((res) => {
                setPostState((prev) => {
                    return {
                        posts: res.data,
                    };
                });
            })
            .catch((err) => console.dir(err));
    };

    const rate = (type, postID) => {
        userAxios
            .put(`/api/posts/${type}/${postID}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const postComment = (inputs, postID) => {
        userAxios
            .post(`/api/posts/${postID}/comment`, inputs)
            .then((res) => console.log(res))
            .catch((err) => console.dir(err));
    };

    return (
        <PostContext.Provider
            value={{
                getAllPosts,
                getAuthorPosts,
                postState,
                userAxios,
                rate,
                postComment,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};

export { PostContext, PostContextProvider };