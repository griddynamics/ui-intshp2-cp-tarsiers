import React from 'react';
import { mount /* , render, shallow */ } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper.is('App')).toBe(true);
});
