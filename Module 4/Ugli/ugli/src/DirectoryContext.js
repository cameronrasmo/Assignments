import React from 'react';
const {Provider, Consumer} = React.createContext();

class DCProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            count: 0
        }
    }

    add = (title, description, imgUrl) => {
        let addArr = this.state.list.map(item => item);
        let newObject = {
            title: title,
            description: description,
            imgUrl: imgUrl,
            id: this.state.count
        }
        addArr.push(newObject);
        this.setState(prev => {
            return{
                list: addArr,
                count: prev.count + 1
            }
        });
        console.log(this.state.list)
    }

    submit = (count, title, description, imgUrl) => {
        let editArr = this.state.list.map(item => item);
        editArr[count - 1].title = title;
        editArr[count - 1].description = description;
        editArr[count - 1].imgUrl = imgUrl;
        console.log(editArr[count - 1]);
        this.setState(prev => {
            return{
                list: editArr,
            }
        });
    }

    render(){
        return(
            <Provider value={{list: this.state.list, add: this.add, submit: this.submit, count: this.state.count}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {DCProvider, Consumer as DCConsumer};