import React from 'react';
import { render } from '@testing-library/react';
import '../../providers/intl';
import '../../providers/icons';
import HomeSection from './HomeSection';

import { BrowserRouter } from 'react-router-dom';
import { ProjectType } from '../../providers/projects';

test('renders homepage', () => {
    render(
        <BrowserRouter>
            <HomeSection
                translate={(key: string, config?: any) => ''}
                onOpenModal={(project: ProjectType) => console.log(project)}
                projects={[]}
            />
        </BrowserRouter>,
    );
});
