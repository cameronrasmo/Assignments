import React from 'react';

class TextHeader extends React.Component{  
    componentDidUpdate(){
        this.primaryRef.current.style.transition = "0s"
        this.secondaryRef.current.style.transition = "0s"
        this.tertiaryRef.current.style.transition = "0s"

        this.primaryRef.current.style.left = "-10px"
        this.secondaryRef.current.style.left = "-10px"
        this.tertiaryRef.current.style.left = "-10px"
        setTimeout(() => {
            this.primaryRef.current.style.transition = ".4s"
            this.secondaryRef.current.style.transition = ".3s"
            this.tertiaryRef.current.style.transition = ".2s"

            this.primaryRef.current.style.left = "0px"
            this.secondaryRef.current.style.left = "10px"
            this.tertiaryRef.current.style.left = "20px"
        }, 50)
    }

    render(){    
        return(
            <div id="text-header-container">
                <h1 ref={this.primaryRef = React.createRef()} className={`header ${this.props.title}-color`} id="primary-header">{this.props.title === "light" ? "Light" : "Dark"}</h1>
    
                <h1 ref={this.secondaryRef = React.createRef()} className={`header`} id="secondary-header">{this.props.title === "light" ? "Light" : "Dark"}</h1>
    
                <h1 ref={this.tertiaryRef = React.createRef()} className={`header`} id="tertiary-header">{this.props.title === "light" ? "Light" : "Dark"}</h1>  
            </div>
        )
    }
}

export default TextHeader;