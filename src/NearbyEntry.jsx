/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NearbyEntryCounter = styled.div`
  display: inline-block;
  flex: 1;
  min-width: 300px;
  height: 200px;
`;

const Img = styled.img`
`;

const NearbyEntry = ({ nearby }) => (
  <NearbyEntryCounter id={nearby.id}>
    <Img src={nearby.image} height="100%" width="100%" alt="" />
    <br />
    {nearby.house_type}
    {' '}
            .
    {' '}
    {nearby.location}
    <br />
    {nearby.title}
    <br />
            $
    {nearby.price}
            /night
    <br />
    {nearby.rate}
    {' '}
    {nearby.star}
  </NearbyEntryCounter>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.object.isRequired,
};

export default NearbyEntry;
