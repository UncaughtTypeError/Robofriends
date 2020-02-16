import React from 'react';
import { shallow, mount, render } from 'enzyme';

import RoboCard from '../components/RoboCard';

it('expect to render full RoboCard component tree', () => {

    const mockProps = {
        mockID: 1,
        mockName: 'robo',
        mockEmail: 'robo@ro.bot',
        mockAbout: 'for this test, robo has no back story...'
    };

    expect(render(<RoboCard {...mockProps} />)).toMatchSnapshot();

});