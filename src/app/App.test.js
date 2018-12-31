import React from 'react';
import { shallow /* , mount, render */ } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.is('.App')).toBe(true);
});
