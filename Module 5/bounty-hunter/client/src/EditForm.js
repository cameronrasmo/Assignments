import React from "react";

function EditForm(props) {
    const [input, setInput] = React.useState({
        firstName: props.firstName,
        lastName: props.lastName,
        living: props.living,
        bountyAmount: props.bountyAmount,
        type: props.type,
        _id: props._id,
    });

    function handleChange(e) {
        const { name, value, type } = e.target;
        type === "checkbox"
            ? setInput((prev) => {
                  return {
                      ...prev,
                      living: !prev.living,
                  };
              })
            : setInput((prev) => {
                  return {
                      ...prev,
                      [name]: value,
                  };
              });
    }

    return (
        <div>
            <h1>Edit</h1>
            <form>
                <input
                    name='firstName'
                    placeholder='firstName'
                    value={input.firstName}
                    onChange={handleChange}
                />
                <input
                    name='lastName'
                    placeholder='lastName'
                    value={input.lastName}
                    onChange={handleChange}
                />
                <input
                    type='checkbox'
                    name='living'
                    checked={input.living}
                    value={input.living}
                    onChange={handleChange}
                />
                <label htmlFor='checkbox'>Living?</label>
                <input
                    name='bountyAmount'
                    placeholder='bountyAmount'
                    value={input.bountyAmount}
                    onChange={handleChange}
                />
                <input
                    name='type'
                    placeholder='type'
                    value={input.type}
                    onChange={handleChange}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        props.edit(input);
                        props.toggler();
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EditForm;
