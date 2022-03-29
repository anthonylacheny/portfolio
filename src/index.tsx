import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import './providers/intl';
import './providers/icons';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import App from './components/App';
import Loader from './components/layouts/Loader';

const rootElement = document.getElementById('root');

Modal.setAppElement('#root');

const element = (
    <React.StrictMode>
        <React.Suspense fallback={<Loader />}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.Suspense>
    </React.StrictMode>
);

if (rootElement && rootElement.hasChildNodes()) {
    hydrate(element, rootElement);
} else {
    render(element, rootElement);
}

reportWebVitals();
