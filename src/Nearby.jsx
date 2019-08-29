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
  transition: transform 300ms;
`;


class Nearby extends React.Component {
  constructor(props) {
    super(props);
    const { alltheHouse, showHouse } = this.props;
    this.state = {
      alltheHouse,
      showHouse,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
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
        {showHouse !== null && (
        <div>
          <button
            className="next"
            onClick={() => { this.next(); }}
            disabled={showHouse.id === alltheHouse.length - 3}
            type="button"
          >
Next

          </button>

          <button
            className="prev"
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
  alltheHouse: PropTypes.array.isRequired,
  showHouse: PropTypes.object.isRequired,
};

export default Nearby;
