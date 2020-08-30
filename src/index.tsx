import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';

import { App } from './App';
//import { store } from './store';

ReactDOM.render(
    <BrowserRouter>
       
            <App />
       
    </BrowserRouter>, document.getElementById('root'));

