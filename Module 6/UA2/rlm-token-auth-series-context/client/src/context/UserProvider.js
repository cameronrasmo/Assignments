import React from "react";
import Axios from "axios";

const UserContext = React.createContext();
const userAxios = Axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        todos: [],
    };
    const [userState, setUserState] = React.useState(initState);

    function signup(credentials) {
        Axios.post("/auth/signup", credentials)
            .then((res) => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState((prev) => ({ ...prev, user, token }));
            })
            .catch((err) => console.log(err.response.data.errMsg));
    }

    function login(credentials) {
        Axios.post("/auth/login", credentials)
            .then((res) => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                getUserTodos();
                setUserState((prev) => ({ ...prev, user, token }));
            })
            .catch((err) => console.log(err));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUserState({
            user: {},
            token: "",
            todos: [],
        });
    }

    function getUserTodos() {
        userAxios
            .get("/api/todo/user")
            .then((res) =>
                setUserState((prev) => {
                    return {
                        ...prev,
                        todos: res.data,
                    };
                })
            )
            .catch((err) => console.log(err.response.data.errMsg));
    }

    function addTodo(newTodo) {
        userAxios
            .post("/api/todo", newTodo)
            .then((res) =>
                setUserState((prev) => {
                    return {
                        ...prev,
                        todos: [...prev.todos, res.data],
                    };
                })
            )
            .catch((err) => console.log(err.response.data.errMsg));
    }

    return (
        <UserContext.Provider
            value={{ ...userState, signup, login, logout, addTodo }}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
