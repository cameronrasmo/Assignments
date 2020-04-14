import React from "react";

function TypeSelect(props) {
    let [selection, setSelection] = React.useState("");

    function handleChange(e) {
        const { value } = e.target.childNodes[1];
        setSelection((selection = value));
    }

    const displayed = props.criteria.map((item) => {
        return (
            <label
                className='optionContainer'
                onClick={handleChange}
                for={item}
            >
                {item}
                <input
                    type='radio'
                    name={item}
                    value={item}
                    checked={selection === { item }}
                />
            </label>
        );
    });

    return (
        <div className='flex-form-container'>
            <div className='flex-form-header'>
                <h1>{selection !== "" ? selection : props.type}</h1>
            </div>
            <form className='form-container'>{displayed}</form>
            <input
                type='button'
                style={
                    selection === ""
                        ? { opacity: ".5", cursor: "auto" }
                        : { opacity: "1", cursor: "pointer" }
                }
                onClick={() => {
                    if (selection !== "") {
                        props.request(selection, props.type);
                        setSelection((selection = ""));
                    }
                }}
            />
        </div>
    );
}

export default TypeSelect;
