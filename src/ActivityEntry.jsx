/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ratings from 'react-ratings-declarative';

const ActivityEntryCounter = styled.div`
  display: inline-block;
  text-align: left;
  flex: 1;
  min-width: 208px;
  height: 200px;
`;

const ActivityImg = styled.img`
  margin-left:5px;
`;

const ActivityFirstLine = styled.div`
  margin-left:5px;
  font-size: 12px;
  color: gray;
  font-weight: bold;
`;

const ActivityTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left:5px;
`;

const ActivityOther = styled.div`
  font-size: 12px;
  color: gray;
  margin-left:5px;
`;

const ActivityHeart = styled.span`
  position: absolute;
  font-size: 30px;
  color: white;
  margin-left: 172px;
`;

const ActivityEntry = ({ activity }) => (
  <ActivityEntryCounter id={activity.id}>
    <ActivityHeart>&#9825;</ActivityHeart>
    <ActivityImg src={activity.image} height="300px" width="95%" alt="" />
    <ActivityFirstLine>
      {activity.activity}
    </ActivityFirstLine>
    <ActivityTitle>
      {activity.title}
    </ActivityTitle>
    <ActivityOther>
$
      {activity.price}
      {' '}
      {' '}
per person
      <br />
      {activity.star > 0 && (
        <span>
          {activity.star}
          <Ratings
            rating={activity.star}
            widgetDimensions="12px"
            widgetSpacings="1px"
          >
            <Ratings.Widget widgetSpacings="1px" widgetRatedColor="#006c70" />
          </Ratings>
        </span>
      )}
    (
      {activity.rate}
)
    </ActivityOther>
  </ActivityEntryCounter>
);


ActivityEntry.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityEntry;
