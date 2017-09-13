import React from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

const FeatureList = ({ features }) => (
  <ul>
    {features.map(feature => 
      <Feature
        key={feature.id}
        {...feature} />
    ))}
  </ul>
);

FeatureList.PropTypes = {
  parks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default FeatureList;
