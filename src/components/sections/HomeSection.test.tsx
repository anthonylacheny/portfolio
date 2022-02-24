import React from 'react';
import { render } from '@testing-library/react';
import HomeSection from './HomeSection';
import { BrowserRouter } from 'react-router-dom';

test('renders homepage', () => {
    render(
        <BrowserRouter>
            <HomeSection translate={(key: string, config?: any) => ''} />
        </BrowserRouter>,
    );
});
