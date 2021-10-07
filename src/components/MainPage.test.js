import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps} />)
});

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
}) 

it('filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2} />)

	// expect(wrapper.instance().filterRobots()).toEqual([]);
	expect(wrapper2.instance().filterRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]);
})
it('filters robots correctly 2', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false
	}
	const filteredRobots = [];
	const wrapper3 = shallow(<MainPage {...mockProps3} />)

	// expect(wrapper.instance().filterRobots()).toEqual([]);
	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

it('does pending correctly', () => {
	const mockProps4 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true
	}
	const wrapper4 = shallow(<MainPage {...mockProps4} />)

	// console.log(wrapper4.find('h1').exists());
	expect(wrapper4.find("[id='pendTrue']").exists()).toEqual(true);
})

// it('expect to render MainPage component', () => {
// 	const mockStore = {
// 		robots: [],
// 		searchField: ''
// 	}
// 	expect(shallow(<MainPage store={mockStore}/>)).toMatchSnapshot();
// })

