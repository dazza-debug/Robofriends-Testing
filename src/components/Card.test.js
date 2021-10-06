import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

// it('expect to render Card component', () => {
// 	expect(shallow(<Card />).length).toEqual(1);
// })
const card = shallow(<Card />);
it('expect to render Card component', () => {
	expect(card).toMatchSnapshot();
})

