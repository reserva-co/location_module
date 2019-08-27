/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import NearbyEntry from './NearbyEntry.jsx';

const Nearby = ({ nearby }) => (
  <div>
    {nearby.map((n) => (
      <NearbyEntry nearby={n} key={n.id} />
    ))}
  </div>
);

Nearby.propTypes = {
  nearby: PropTypes.arrayOf.isRequired,
};

export default Nearby;
