import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import {data} from './Data/data'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App data = {data} />
);