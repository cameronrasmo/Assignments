import React from "react";
import Axios from "axios";

const PostContext = React.createContext();
const userAxios = Axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const PostContextProvider = (props) => {
    const getAllPosts = () => {
        userAxios
            .get("/api/posts")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    };
    return (
        <PostContext.Provider value={{ getAllPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};

export { PostContext, PostContextProvider };
