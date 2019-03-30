import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  let component = '';
  let search = '';

  beforeEach(() => {
    component = mount(<App />);
  });

  test('Should be App', () => {
    expect(component.is('App')).toBeTruthy();
  })

  test('searchString is set to state as an empty string', () => {
    expect(component.state().searchString).toEqual(search);
  });
});
