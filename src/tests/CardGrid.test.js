import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CardGrid from '../components/CardGrid';

it('expect to render full CardGrid component tree', () => {

    //expect(shallow(<CardGrid />).length).toEqual(1);

    const mockRobots = [
        {
            id: 1,
            name: 'robo',
            email: 'robo@ro.bot',
            about: 'for this test, robo has no back story...'
        }
    ];

    expect(render(<CardGrid robots={mockRobots} />)).toMatchSnapshot();

});