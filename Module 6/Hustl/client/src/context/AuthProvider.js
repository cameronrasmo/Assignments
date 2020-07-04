import React, { createContext, useState } from "react";
import Axios from "axios";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const initUserState = {
        user: "",
        token: "",
    };
    const [userState, setUserState] = useState(initUserState);

    const authorize = (type, body) => {
        console.log(type, body);
        Axios.post(`/auth/${type}`, body)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    return (
        <AuthContext.Provider value={{ authorize, userState }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
