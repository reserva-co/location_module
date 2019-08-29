/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';

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

const Heart = styled.span`
  position: fixed;
  font-size: 28px;
  color: white;
  margin-left: 300px;
`;

const NearbyEntry = ({ nearby }) => (
  <NearbyEntryCounter id={nearby.id}>
    <Heart>&#9825;</Heart>
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
      <Ratings
        rating={nearby.star}
        widgetDimensions="12px"
        widgetSpacings="1px"
      >
        <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
        <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
        <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
        <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
        <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
      </Ratings>
      {' '}
      {nearby.rate}
    </Other>
  </NearbyEntryCounter>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.object.isRequired,
};

export default NearbyEntry;
