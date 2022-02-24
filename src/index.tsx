import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './providers/intl';
import './providers/icons';

import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reportWebVitals from './utils/reportWebVitals';
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
