import React, { createContext, useState } from "react";
import Axios from "axios";

const ProjectContext = createContext();
const userAxios = Axios.create();
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const ProjectProvider = (props) => {
    const [projectState, setProjectState] = useState([]);
    const [selected, setSelected] = useState(false);
    const [project, setProject] = useState({
        title: "",
        description: "",
        color: [],
        backlog: [],
        inProgress: [],
        completed: [],
    });

    const getProjects = () => {
        userAxios
            .get("/api/projects/all")
            .then((res) => {
                setProjectState(res.data);
            })
            .catch((err) => console.log(err));
    };

    const getProject = (id) => {
        setSelected(true);
        userAxios.get(`/api/projects/${id}`).then((res) => {
            setProject(res.data);
        });
    };

    return (
        <ProjectContext.Provider
            value={{ projectState, getProjects, selected, project, getProject }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export { ProjectContext, ProjectProvider };
