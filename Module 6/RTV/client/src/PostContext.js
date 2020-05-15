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
    const [authorState, setAuthorState] = React.useState("");

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
    //FIND A WAY TO RETRIEVE THE USERNAME BY ID OR INCLUDE IN POST SCHEMA GOD FUCKING DAMMIT
    return (
        <PostContext.Provider
            value={{
                getAllPosts,
                getAuthorPosts,
                postState,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};

export { PostContext, PostContextProvider };
