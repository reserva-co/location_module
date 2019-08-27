/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NearbyEntry from './NearbyEntry.jsx';

const NearbyCounter = styled.div`
  text-align: center;
`;

const Nearby = ({ nearby }) => (
  <NearbyCounter>
    {nearby.map((n) => (
      <NearbyEntry nearby={n} key={n.id} />
    ))}
  </NearbyCounter>
);

Nearby.propTypes = {
  nearby: PropTypes.arrayOf.isRequired,
};

export default Nearby;
