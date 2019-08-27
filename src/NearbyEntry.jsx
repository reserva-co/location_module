import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NearbyEntryCounter = styled.div`
  display: inline-block
  width: 400px;
  height: 300px;
`;

const Img = styled.img`
  padding: 10px;
  background: lightgray;
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
  </NearbyEntryCounter>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.objectOf.isRequired,
};

export default NearbyEntry;
