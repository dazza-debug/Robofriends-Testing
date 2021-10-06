import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

// it('expect to render Card component', () => {
// 	expect(shallow(<Card />).length).toEqual(1);
// })
it('expect to render Header component', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
})

