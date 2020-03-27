import React from 'react';
const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends React.Component{
    state = {
        theme: "light",
    }

    toggle = () => {
        console.log(this.state.theme)
        this.setState(prev => {
            return{
                theme: prev.theme === "light" ? "dark" : "light"
            }
        })
    }

    render(){
        return(
            <Provider value={{theme: this.state.theme, toggle: this.toggle}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};