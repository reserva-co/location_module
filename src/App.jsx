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

const Moreplace = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0 auto;
`;

const MoreplaceText = styled.h2`
  text-align: left;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltheHouse: [],
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
        });
      })
      .catch((err) => (err));
  }

  render() {
    const { alltheHouse } = this.state;
    return (
      <AppCounter>
        {alltheHouse.length > 0 && (
        <div>
          <Moreplace>
            <MoreplaceText>More place to stay</MoreplaceText>
          </Moreplace>
          <Nearby alltheHouse={alltheHouse} />
          {/* <h3>Things to do nearby</h3> */}
          {/* <Activity activity={activity} /> */}
        </div>
        )}
      </AppCounter>
    );
  }
}

export default App;
