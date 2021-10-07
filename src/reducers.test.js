import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers';

 describe('searchRobots', () => {
  const intialStateSearchMock = {
    searchField: ''
  }
  it('should return the intial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
  })
  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(intialStateSearchMock, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
 })

 describe('requestRobots', () => {
  const intialStateRobotsMock = {
    robots: [],
    isPending: false
  }
  it('should return the intial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(intialStateRobotsMock);
  })
  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(intialStateRobotsMock, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      robots: [],
      isPending: true
    });
  });
  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(intialStateRobotsMock, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }],
      isPending: false
    });
  }); 
  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(intialStateRobotsMock, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'NOOOOOO!!!!'
    })).toEqual({
      error: 'NOOOOOO!!!!',
      robots: [],
      isPending: false
    });
  });
 })