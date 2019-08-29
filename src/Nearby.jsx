/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import NearbyEntry from './NearbyEntry.jsx';

const NearbyCounter = styled.div`
  text-align: center;
`;

const Slider = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0 auto;

  &:after {
    content:'';
    padding: 10px;
    diplay: block;
    width: 100%;
    height: 200px;
    outline: 5px solid black;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
`;


class Nearby extends React.Component {
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

  getOne() {
    axios.get('/api/location/1')
      .then((datas) => {
        console.log(datas);
        this.setState({
          alltheHouse: datas.data[0],
          showHouse: datas.data[0][0],
        });
      })
      .catch((err) => console.log(err));
  }

  next() {
    const { showHouse, alltheHouse } = this.state;
    const newIdx = showHouse.id + 1;
    this.setState({
      showHouse: alltheHouse[newIdx],
    });
  }

  prev() {
    const { showHouse, alltheHouse } = this.state;
    const preIdx = showHouse.id - 1;
    this.setState({
      showHouse: alltheHouse[preIdx],
    });
  }

  render() {
    const { showHouse, alltheHouse } = this.state;

    return (
      <div>
        {showHouse !== null
        && (
        <div>
          <button
            onClick={() => { this.next(); }}
            disabled={showHouse.id === alltheHouse.length - 3}
            type="button"
          >
Next

          </button>

          <button
            onClick={() => { this.prev(); }}
            disabled={showHouse.id === 0}
            type="button"
          >
Prev

          </button>
          <NearbyCounter>
            <Slider>
              <SliderWrapper
                style={{
                  transform: `translateX(-${showHouse.id * (100 / alltheHouse.length)}%)`,
                }}
              >
                {alltheHouse.map((n) => (
                  <NearbyEntry nearby={n} key={n.id} />
                ))}
              </SliderWrapper>
            </Slider>
          </NearbyCounter>
        </div>
        )}
      </div>
    );
  }
}

Nearby.propTypes = {
  alltheHouse: PropTypes.arrayOf.isRequired,
  showHouse: PropTypes.objectOf.isRequired,
};

export default Nearby;
