import React from 'react';
import Container from './Container';
import {DCConsumer} from './DirectoryContext.js'
import Add from './Add.js';

function App(){
    return(
        <div>
            <h2>ugli</h2>
            <h1>welcome</h1>
            <div>
                <h1>+</h1>
            </div>
            <DCConsumer>
                {directory => {
                    return(
                        <React.Fragment>
                            <Container count={directory.count} list={directory.list} submitMethod={directory.submit}/>
                            <Add addMethod={directory.add}/>
                        </React.Fragment>
                    )
                }}
            </DCConsumer>
        </div>
    )
}

export default App;