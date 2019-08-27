/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from '../src/App.jsx';

configure({ adapter: new Adapter() });

jest.mock('axios');

beforeEach(() => jest.resetModules());

it('should return datas', () => axios.get('/api/location/1', (data) => {
  expect(data).toBeDefined();
  expect(data.data).toEqual(2);
}));