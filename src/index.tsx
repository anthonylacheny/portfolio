import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './providers/intl';
import './providers/icons';

import './components/fonts/Dongle-Light.ttf';
import './components/fonts/Dongle-Bold.ttf';

import './index.css';
//import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import RootPresenter from './components/presenters/RootPresenter';

ReactDOM.render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <BrowserRouter>
                <RootPresenter />
            </BrowserRouter>
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
