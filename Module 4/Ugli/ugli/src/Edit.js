import React from 'react';


class Edit extends React.Component{
    capture = (e) => {
        e.preventDefault();
        this.props.submitMethod(this.props.count, e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value);
        e.target.parentNode[0].value = "";
        e.target.parentNode[1].value = "";
        e.target.parentNode[2].value = "";
    }

    deleteItem = (e) => {
        e.preventDefault();
        console.log("deleted")
    }

    render(){
        return(
            <div>
                <h1>edit</h1>
                <form>
                    <input placeholder="Title" defaultValue={this.props.title}/>
                    <input placeholder="Description" defaultValue={this.props.description}/>
                    <input placeholder="imgurl" defaultValue={this.props.imgUrl}/>
                    <button onClick={this.capture}>submit</button>
                </form>
            </div>
        )
    }
}

export default Edit;