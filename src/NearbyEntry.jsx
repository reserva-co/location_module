/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Ratings from 'react-ratings-declarative';

const NearbyEntryCounter = styled.div`
  display: inline-block;
  text-align: left;
  flex: 1;
  min-width: 350px;
  height: 200px;
`;

const NearbyImg = styled.img`
`;

const NearbyFirstLine = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: bold;
`;

const NearbyTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const NearbyOther = styled.div`
  font-size: 12px;
  color: gray;
`;

const NearbyHeart = styled.span`
  position: absolute;
  font-size: 28px;
  color: white;
  margin-left: 300px;
`;

const NearbyEntry = ({ nearby }) => (
  <NearbyEntryCounter id={nearby.id}>
    <NearbyHeart>&#9825;</NearbyHeart>
    <NearbyImg src={nearby.image} height="95%" width="95%" alt="" />
    <NearbyFirstLine>
      {nearby.house_type}
      {' '}
              .
      {' '}
      {nearby.location}
    </NearbyFirstLine>
    <NearbyTitle>
      {nearby.title}
    </NearbyTitle>
    <NearbyOther>
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
    </NearbyOther>
  </NearbyEntryCounter>
);

NearbyEntry.propTypes = {
  nearby: PropTypes.object.isRequired,
};

export default NearbyEntry;
