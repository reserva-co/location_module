/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Nearby from './Nearby.jsx';
// import Activity from './Activity.jsx';

const AppCounter = styled.div`
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltheHouse: [],
      showHouse: null,
    };
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getOne();
  }

  getOne(id = 1) {
    axios.get(`/api/location/${id}`)
      .then((datas) => {
        this.setState({
          alltheHouse: datas.data[0],
          showHouse: datas.data[0][0],
        });
      })
      .catch((err) => (err));
  }

  render() {
    const { alltheHouse, showHouse } = this.state;
    return (
      <AppCounter>
        {showHouse !== null && (
        <div>
          <h3>More place to stay</h3>
          <Nearby alltheHouse={alltheHouse} showHouse={showHouse} />
          {/* <h3>Things to do nearby</h3> */}
          {/* <Activity activity={activity} /> */}
        </div>
        )}
      </AppCounter>
    );
  }
}

export default App;
