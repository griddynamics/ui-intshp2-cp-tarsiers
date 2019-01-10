import React from 'react';
import { shallow /* , render, mount */ } from 'enzyme';
import App from './App';

it('should match its snapshot', () => {
  const shallowWrapper = shallow(<App />);

  expect(shallowWrapper).toMatchSnapshot();
});
