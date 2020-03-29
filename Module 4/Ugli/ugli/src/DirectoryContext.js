import React from 'react';
const {Provider, Consumer} = React.createContext();

class DCProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
        }
    }

    add = (title, description, imgUrl) => {
        let addArr = this.state.list.map(item => item);
        let newObject = {
            title: title,
            description: description,
            imgUrl: imgUrl
        }
        addArr.push(newObject);
        this.setState({list: addArr});
    }

    submit = (count, title, description, imgUrl) => {
        let editArr = this.state.list.map(item => item);
        editArr[count - 1].title = title;
        editArr[count - 1].description = description;
        editArr[count - 1].imgUrl = imgUrl;
        this.setState(prev => {
            return{
                list: editArr,
            }
        });
    }

    render(){
        return(
            <Provider value={{list: this.state.list, add: this.add, submit: this.submit, count: this.state.list.length}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {DCProvider, Consumer as DCConsumer};