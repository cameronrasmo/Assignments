import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';
import TextHeader from './TextHeader.js';

function App(){
    return(
        <ThemeContextConsumer>
            {context => 
                <div id="container" className={`${context.theme}-theme-container`}>
                    <TextHeader title={context.theme}/>
                    <button id="change-theme-button" className={`${context.theme}-theme-color`} onClick={context.toggle}>Clickity clack</button>
                </div>}  
        </ThemeContextConsumer>
    )
}

export default App;