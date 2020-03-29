import React from 'react';

class Add extends React.Component{
    capture = (e) => {
        e.preventDefault();
        if(e.target.parentNode[0].value !== "" && e.target.parentNode[1].value !== "" && e.target.parentNode[2].value !== ""){
            this.props.addMethod(e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value);
            e.target.parentNode[0].value = "";
            e.target.parentNode[1].value = "";
            e.target.parentNode[2].value = "";

            e.target.parentNode[0].placeholder = "Title";
            e.target.parentNode[1].placeholder = "Description";
            e.target.parentNode[2].placeholder = "imgurl";
        }
        else{
            e.target.parentNode[0].placeholder = "Required";
            e.target.parentNode[1].placeholder = "Required";
            e.target.parentNode[2].placeholder = "Required";
        }
    }

    render(){
        return(
            <div>
                <h1>add</h1>
                <form>
                    <input name="title" placeholder="Title"/>
                    <input name="description" placeholder="Description"/>
                    <input name="imgurl" placeholder="imgurl"/>
                    <button onClick={this.capture}>submit</button>
                </form>
            </div>
        )
    }
}

export default Add;