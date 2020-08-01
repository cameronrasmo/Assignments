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
    const initTaskState = {
        backlog: [],
        inProgress: [],
        completed: [],
    };
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

    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const getProjects = () => {
        userAxios
            .get("/api/projects/all")
            .then((res) => {
                setProjectState(res.data);
            })
            .catch((err) => console.log(err));
    };

    const newProject = () => {
        userAxios
            .post("/api/projects")
            .then((res) => setProject(res.data))
            .catch((err) => console.log(err));
    };

    const getProject = (id) => {
        setSelected(true);
        userAxios.get(`/api/projects/${id}`).then((res) => {
            setProject(res.data);
        });
    };

    const updateProject = (id, data) => {
        userAxios
            .put(`/api/projects/${id}`, data)
            .then((res) => {
                setProject(res.data);
            })
            .catch((err) => console.log(err));
    };

    const addTask = (projectId, data) => {
        userAxios.post(`/api/task/add/${projectId}`, data).then(res => console.log(res));
    }

    return (
        <ProjectContext.Provider
            value={{
                projectState,
                getProjects,
                selected,
                setSelected,
                project,
                setProject,
                getProject,
                updateProject,
                newProject,
                darkTheme,
                addTask
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    );
};

export { ProjectContext, ProjectProvider };
