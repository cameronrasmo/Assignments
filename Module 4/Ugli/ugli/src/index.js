import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {DCProvider} from './DirectoryContext.js';

ReactDOM.render(<DCProvider><App/></DCProvider>, document.getElementById('root'));