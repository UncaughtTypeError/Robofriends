import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CardMedia from '../components/CardMedia';

it('expect to render full CardMedia component tree', () => {

    //expect(shallow(<CardGrid />).length).toEqual(1);

    const mockProps = {
        mockName: 'robo',
        mockID: 1
    },
    { mockName, mockID } = mockProps;

    expect(render(<CardMedia name={mockName} id={mockID} />)).toMatchSnapshot();
});