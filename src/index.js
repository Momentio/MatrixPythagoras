import React from 'react';
import ReactDOM from 'react-dom';
import App from './view';
import store from "./model";
import "./view/styles/index.css";

ReactDOM.render(<App store={store}/>, document.getElementById('root'));