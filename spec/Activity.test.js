/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Activity from '../src/Activity.jsx';
import ActivityEntry from '../src/ActivityEntry.jsx';

describe('<Activity />', () => {
  const activities = [
    {
      id: 0,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/72.jpg',
      activity: 'in',
      price: 509,
      rate: '937',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 1,
      title: 'ea anim proident deserunt',
    },
    {
      id: 1,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/85.jpg',
      activity: 'Lorem',
      price: 291,
      rate: '616',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'cillum occaecat',
    },
    {
      id: 2,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/65.jpg',
      activity: 'duis',
      price: 796,
      rate: '220',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'adipisicing irure amet voluptate',
    },
    {
      id: 3,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/84.jpg',
      activity: 'elit',
      price: 148,
      rate: '128',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 2,
      title: 'occaecat pariatur culpa',
    },
    {
      id: 4,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/7.jpg',
      activity: 'dolor',
      price: 822,
      rate: '530',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 4,
      title: 'incididunt mollit fugiat',
    },
    {
      id: 5,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/54.jpg',
      activity: 'eiusmod',
      price: 579,
      rate: '709',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 0,
      title: 'consequat dolore',
    },
    {
      id: 6,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/84.jpg',
      activity: 'aliquip',
      price: 683,
      rate: '323',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 5,
      title: 'occaecat exercitation',
    },
    {
      id: 7,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/39.jpg',
      activity: 'mollit',
      price: 328,
      rate: '508',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 2,
      title: 'id irure',
    },
    {
      id: 8,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/49.jpg',
      activity: 'nulla',
      price: 347,
      rate: '470',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'est dolor tempor',
    },
    {
      id: 9,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/50.jpg',
      activity: 'ad',
      price: 64,
      rate: '590',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 1,
      title: 'officia do minim sint',
    },
    {
      id: 10,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/54.jpg',
      activity: 'irure',
      price: 947,
      rate: '373',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 4,
      title: 'sint eiusmod irure fugiat',
    },
    {
      id: 11,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/65.jpg',
      activity: 'incididunt',
      price: 793,
      rate: '720',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 1,
      title: 'proident et est',
    },
    {
      id: 12,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/30.jpg',
      activity: 'quis',
      price: 862,
      rate: '208',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 4,
      title: 'nostrud mollit deserunt',
    },
    {
      id: 13,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/27.jpg',
      activity: 'magna',
      price: 270,
      rate: '828',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 4,
      title: 'anim amet exercitation non',
    },
    {
      id: 14,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/29.jpg',
      activity: 'minim',
      price: 766,
      rate: '894',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'duis tempor amet elit',
    },
    {
      id: 15,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/82.jpg',
      activity: 'aute',
      price: 211,
      rate: '812',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 0,
      title: 'dolore velit aliquip',
    },
    {
      id: 16,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/64.jpg',
      activity: 'eiusmod',
      price: 414,
      rate: '255',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 1,
      title: 'mollit amet dolor dolore',
    },
    {
      id: 17,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/16.jpg',
      activity: 'labore',
      price: 414,
      rate: '785',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 2,
      title: 'ipsum adipisicing adipisicing',
    },
    {
      id: 18,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/38.jpg',
      activity: 'esse',
      price: 521,
      rate: '201',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'ex duis do laboris',
    },
    {
      id: 19,
      image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/23.jpg',
      activity: 'excepteur',
      price: 630,
      rate: '561',
      location_id: 1,
      created_at: '2019-08-29T22:20:09.000Z',
      updated_at: '2019-08-29T22:20:09.000Z',
      star: 3,
      title: 'ex veniam eiusmod dolore',
    },

  ];

  const showActivity = {
    id: 0,
    image: 'https://feclocation.s3-us-west-1.amazonaws.com/activity/72.jpg',
    activity: 'in',
    price: 509,
    rate: '937',
    location_id: 1,
    created_at: '2019-08-29T22:20:09.000Z',
    updated_at: '2019-08-29T22:20:09.000Z',
    star: 1,
    title: 'ea anim proident deserunt',
  };

  const wrapper = shallow(<Activity activities={activities} showActivity={showActivity} />);

  it('Nearby state should have alltheHouse and showHouse property', () => {
    expect(wrapper.state()).toHaveProperty('activities');
    expect(wrapper.state()).toHaveProperty('showActivity');
  });
  it('renders one <ActivityEntry /> components', () => {
    expect(wrapper.find(ActivityEntry).first()).toHaveLength(1);
  });
  it('Test `componentDidMount`', () => {
    const didMount = jest.fn();
    Activity.prototype.componentDidMount = didMount;
    mount(<Activity />);
    expect(didMount).toHaveBeenCalled();
  });
  it('should has props', () => {
    const instance = wrapper.instance();
    expect(instance.props).toBeDefined();
  });
  it('should change index on click', () => {
    wrapper.find('#left').simulate('click');
    expect(wrapper.state('showActivity')[0].id).toEqual(1);
    wrapper.find('#right').simulate('click');
    expect(wrapper.state('showActivity')[0].id).toEqual(0);
  });
});
