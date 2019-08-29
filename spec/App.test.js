/* eslint-disable react/jsx-indent */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../src/App.jsx';
import Nearby from '../src/Nearby.jsx';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Test `componentDidMount`', () => {
    const didMount = jest.fn();
    App.prototype.componentDidMount = didMount;
    mount(<App />);
    expect(didMount).toHaveBeenCalled();
  });
  it('Nearby state should have alltheHouse and showHouse property', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toHaveProperty('alltheHouse');
    expect(wrapper.state()).toHaveProperty('showHouse');
  });
  it('has text More place to stay', () => {
    const wrapper = shallow(<div>
<h3>More place to stay</h3>
<Nearby />
                            </div>);
    expect(wrapper.text()).toEqual('More place to stay<Nearby />');
  });
});
