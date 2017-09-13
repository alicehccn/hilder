import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';

const ParkList = ({ parks }) => (
  <ul>
    {parks.map(park => 
      <Park
        key={park.id}
        {...park} />
    )}
  </ul>
);

ParkList.PropTypes = {
  parks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    hours: PropTypes.string,
    location: PropTypes.string
  })).isRequired,
};

export default ParkList;
