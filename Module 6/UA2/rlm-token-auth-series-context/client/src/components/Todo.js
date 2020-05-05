import React from "react";

export default function Todo(props) {
    const { title, description, _id } = props;
    return (
        <div className='todo'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h5>{_id}</h5>
        </div>
    );
}
