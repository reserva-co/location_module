/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Nearby from './Nearby.jsx';
import Activity from './Activity.jsx';

const AppCounter = styled.div`
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nearby: [],
      activity: [],
    };
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getOne();
  }

  getOne() {
    axios.get('/api/location/1')
      .then((datas) => {
        // console.log(datas);
        this.setState({
          nearby: datas.data[0],
          activity: datas.data[1],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { nearby, activity } = this.state;
    return (
      <AppCounter>
        <h3>More place to stay</h3>
        <Nearby nearby={nearby} />
        <h3>Things to do nearby</h3>
        <Activity activity={activity} />
      </AppCounter>
    );
  }
}
