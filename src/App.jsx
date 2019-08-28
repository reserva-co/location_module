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
  }

  render() {
    return (
      <AppCounter>
        <h3>More place to stay</h3>
        <Nearby />
        {/* <h3>Things to do nearby</h3> */}
        {/* <Activity activity={activity} /> */}
      </AppCounter>
    );
  }
}
