import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './providers/intl';
import './providers/icons';

import './components/fonts/Dongle-Light.ttf';
import './components/fonts/Dongle-Bold.ttf';

import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

reportWebVitals();
