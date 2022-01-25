import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

test('renders homepage', () => {
    render(
        <BrowserRouter>
            <HomePage translate={(key: string, config?: any) => ''} />
        </BrowserRouter>,
    );
});
