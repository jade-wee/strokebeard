import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

import { Main } from './Main';

configure({ adapter: new Adapter() });

describe('Main', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Main />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
