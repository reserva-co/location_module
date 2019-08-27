import React from 'react';
import PropTypes from 'prop-types';

const NearbyEntry = ({ nearby }) => (
  <ul>
    <img src={nearby.image} height="200" width="200" alt="" />
    <li>
      {nearby.house_type}
      {' '}
            .
      {' '}
      {nearby.location}
    </li>
    <li>{nearby.title}</li>
    <li>
            $
      {nearby.price}
            /night
    </li>
    <li>{nearby.rate}</li>
  </ul>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.objectOf.isRequired,
};

export default NearbyEntry;
