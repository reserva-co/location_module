/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Nearby from './Nearby.jsx';
import Activity from './Activity.jsx';

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

const MoreActivities = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0 auto;
`;

const MoreActivitiestext = styled.h2`
  text-align: left;
  margin-top: 350px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltheHouse: [],
      activities: [],
    };
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getOne(id);
  }

  getOne(id = 1) {
    axios.get(`http://localhost:3002/api/location/${id}`)
      .then((datas) => {
        console.log(datas);
        this.setState({
          alltheHouse: datas.data[0],
          activities: datas.data[1],
        });
      })
      .catch((err) => (err));
  }

  render() {
    const { alltheHouse, activities } = this.state;
    return (
      <AppCounter>
        {alltheHouse.length > 0 && (
        <div>
          <Moreplace>
            <MoreplaceText>More place to stay</MoreplaceText>
          </Moreplace>
          <Nearby alltheHouse={alltheHouse} />
          <MoreActivities>
            <MoreActivitiestext>Things to do nearby</MoreActivitiestext>
          </MoreActivities>
          <Activity activities={activities} />
        </div>
        )}
      </AppCounter>
    );
  }
}

export default App;
