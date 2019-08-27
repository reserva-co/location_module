import React from 'react';
import PropTypes from 'prop-types';

const ActivityEntry = ({ activity }) => (
  <ul>
    <img src={activity.image} height="200" width="200" alt="" />
    <li>{activity.activity}</li>
    <li>
$
      {activity.price}
/day
    </li>
    <li>{activity.rate}</li>
  </ul>
);


ActivityEntry.propTypes = {
  activity: PropTypes.objectOf.isRequired,
};

export default ActivityEntry;
