/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import ActivityEntry from './ActivityEntry.jsx';

const Activity = ({ activity }) => (
  <div>
    {activity.map((a) => (
      <ActivityEntry activity={a} key={a.id} />
    ))}
  </div>
);

Activity.propTypes = {
  activity: PropTypes.arrayOf.isRequired,
};

export default Activity;
