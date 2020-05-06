import React from "react";

function Signup() {
    return (
        <div>
            <form>
                <input placeholder='username' />
                <input placeholder='password' />
                <input placeholder='date of birth mm/dd/yyyy' />
                <div>
                    <input type='checkbox' />
                    <label>
                        would you like to receive newsletters from rtv? this
                        button does nothing, do what you will
                    </label>
                </div>
                <button>sign up</button>
            </form>
        </div>
    );
}

export default Signup;
