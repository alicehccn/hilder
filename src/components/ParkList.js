import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';

const ParkList = ({ parks }) => {
  console.log(parks)
  return (
    <ul>
      {parks.map((park, i) => 
        <Park
          key={i}
          {...park} />
      )}
    </ul>
)};

ParkList.PropTypes = {
  parks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    hours: PropTypes.string,
    location: PropTypes.string
  })).isRequired,
};

export default ParkList;
