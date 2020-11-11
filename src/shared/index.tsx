import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '@reducer/RootReducer';
import './../styles/style.scss'
import "antd/dist/antd.css";
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
 ,
  document.getElementById('root')
);
