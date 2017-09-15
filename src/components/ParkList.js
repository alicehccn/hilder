import React from 'react';
import PropTypes from 'prop-types';
import Park from './Park';

const ParkList = ({ parks }) => (
  <ul>
    {parks && parks.map((park, i) => {
      return (
        <Park
          key={i}
          name={park.name}
          features={park.features}
          hours={park.hours} />
      )}
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
