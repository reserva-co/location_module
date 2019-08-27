/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Nearby from './Nearby.jsx';
import Activity from './Activity.jsx';

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
      });
  }

  render() {
    const { nearby, activity } = this.state;
    return (
      <div>
        <h3>More place to stay</h3>
        <Nearby nearby={nearby} />
        <h3>Things to do nearby</h3>
        <Activity activity={activity} />
      </div>
    );
  }
}
