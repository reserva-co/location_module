/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Nearby from '../src/Nearby.jsx';
import NearbyEntry from '../src/NearbyEntry.jsx';

describe('<Nearby />', () => {
  const alltheHouse = [
    {
      id: 0,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/97.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Santinoberg',
      title: 'Sunt laborum elit consequat fugiat dolor Lorem.',
      price: 911,
      rate: '42',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 1,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/27.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Natashamouth',
      title: 'Nisi aute ad eiusmod veniam.',
      price: 698,
      rate: '434',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 2,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/22.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Thaliastad',
      title: 'Nulla ullamco incididunt eiusmod amet non eiusmod.',
      price: 716,
      rate: '327',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 3,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/54.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Parisianburgh',
      title: 'Nostrud ex labore mollit.',
      price: 775,
      rate: '312',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 4,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/85.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'South Amparo',
      title: 'Excepteur duis pariatur nisi minim aute.',
      price: 484,
      rate: '290',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 5,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/81.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Idellburgh',
      title: 'In pariatur eiusmod duis esse aliqua.',
      price: 181,
      rate: '42',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 6,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/8.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'North Yazmin',
      title: 'Incididunt proident nostrud nulla tempor dolore cupidatat aliquip.',
      price: 736,
      rate: '85',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 7,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/70.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'East Corrinefort',
      title: 'Magna nostrud dolore nostrud aliquip.',
      price: 438,
      rate: '965',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 8,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/92.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Caryborough',
      title: 'Ex ipsum aute commodo ut fugiat id magna.',
      price: 993,
      rate: '786',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 9,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/56.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Hackettfurt',
      title: 'Velit id Lorem.',
      price: 340,
      rate: '87',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 10,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/59.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Trevorton',
      title: 'Duis non dolore consequat commodo magna ea.',
      price: 76,
      rate: '900',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
    {
      id: 11,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/32.jpg',
      house_type: 'ENTIRE HOUSE',
      location: 'Haileeland',
      title: 'Ut aliquip commodo laboris elit in cillum.',
      price: 185,
      rate: '842',
      location_id: 1,
      created_at: '2019-08-26T21:42:47.000Z',
      updated_at: '2019-08-26T21:42:47.000Z',
    },
  ];

  const showHouse = {
    id: 0,
    image: 'https://feclocation.s3-us-west-1.amazonaws.com/nearby/97.jpg',
    house_type: 'ENTIRE HOUSE',
    location: 'Santinoberg',
    title: 'Sunt laborum elit consequat fugiat dolor Lorem.',
    price: 911,
    rate: '42',
    location_id: 1,
    created_at: '2019-08-26T21:42:47.000Z',
    updated_at: '2019-08-26T21:42:47.000Z',
  };

  const wrapper = shallow(<Nearby alltheHouse={alltheHouse} showHouse={showHouse} />);

  it('Nearby state should have alltheHouse and showHouse property', () => {
    expect(wrapper.state()).toHaveProperty('alltheHouse');
    expect(wrapper.state()).toHaveProperty('showHouse');
  });
  it('renders one <NearbyEntry /> components', () => {
    expect(wrapper.find(NearbyEntry).first()).toHaveLength(1);
  });
  it('Test `componentDidMount`', () => {
    const didMount = jest.fn();
    Nearby.prototype.componentDidMount = didMount;
    mount(<Nearby />);
    expect(didMount).toHaveBeenCalled();
  });
  xit('renders 2 button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
  it('should has props', () => {
    const instance = wrapper.instance();
    expect(instance.props).toBeDefined();
  });
  it('should change index on click', () => {
    wrapper.find('#left').simulate('click');
    expect(wrapper.state('showHouse')[0].id).toEqual(1);
    wrapper.find('#right').simulate('click');
    expect(wrapper.state('showHouse')[0].id).toEqual(0);
  });
});
