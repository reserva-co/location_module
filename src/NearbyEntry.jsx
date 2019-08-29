/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NearbyEntryCounter = styled.div`
  display: inline-block;
  text-align: left;
  flex: 1;
  min-width: 350px;
  height: 200px;
`;

const Img = styled.img`
`;

const FirstLine = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Other = styled.div`
  font-size: 12px;
  color: gray;
`;


const NearbyEntry = ({ nearby }) => (
  <NearbyEntryCounter id={nearby.id}>
    <Img src={nearby.image} height="95%" width="95%" alt="" />
    <FirstLine>
      {nearby.house_type}
      {' '}
              .
      {' '}
      {nearby.location}
    </FirstLine>
    <Title>
      {nearby.title}
    </Title>
    <Other>
              $
      {nearby.price}
              /night
      <br />
      {nearby.star}
      {' '}
      {nearby.rate}
    </Other>
  </NearbyEntryCounter>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.object.isRequired,
};

export default NearbyEntry;
