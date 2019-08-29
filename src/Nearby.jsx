/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NearbyEntry from './NearbyEntry.jsx';

const NearbyCounter = styled.div`
  text-align: center;
`;

const Slider = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
`;

const ArrowRight = styled.div`
  position: absolute;
  top: 58%;
  width: 2vmin;
  height: 2vmin;
  background: transparent;
  border-top: 0.5vmin solid black;
  border-right: 0.5vmin solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  left: -25px;
  transform: translate3d(0,-50%,0) rotate(-135deg);
`;

const Arrowleft = styled.div`
  position: absolute;
  top: 54%;
  width: 2vmin;
  height: 2vmin;
  background: transparent;
  border-top: 0.5vmin solid black;
  border-right: 0.5vmin solid black;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  right: -7px;
  transform: translate3d(0,-50%,0) rotate(45deg);
`;

class Nearby extends React.Component {
  constructor(props) {
    super(props);
    const { alltheHouse } = this.props;
    this.state = {
      alltheHouse,
      showHouse: [],
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    const { alltheHouse } = this.state;
    if (alltheHouse.length > 0) {
      const arr = alltheHouse.slice(0, 3);
      this.setState({
        showHouse: arr,
      });
    }
  }

  next() {
    const { showHouse, alltheHouse } = this.state;
    const newIdx = showHouse[0].id + 1;
    const arr = alltheHouse.slice(newIdx, newIdx + 3);
    this.setState({
      showHouse: arr,
    });
  }

  prev() {
    const { showHouse, alltheHouse } = this.state;
    const preIdx = showHouse[showHouse.length - 1].id - 1;
    const arr = alltheHouse.slice(preIdx - 2, preIdx + 1);
    this.setState({
      showHouse: arr,
    });
  }

  render() {
    const { alltheHouse, showHouse } = this.state;
    return (
      <div>
        {showHouse.length > 0 && (
          <NearbyCounter>
            <Slider>
              <SliderWrapper>
                {showHouse[0].id !== alltheHouse.length - 3 && (
                <Arrowleft onClick={this.next} />
                )}
                {showHouse.map((n) => (
                  <NearbyEntry nearby={n} key={n.id} />
                ))}
                {showHouse[0].id - 1 >= 0 && (
                <ArrowRight onClick={this.prev} />
                )}
              </SliderWrapper>
            </Slider>
          </NearbyCounter>
        )}
      </div>
    );
  }
}

Nearby.propTypes = {
  alltheHouse: PropTypes.array.isRequired,
};

export default Nearby;
