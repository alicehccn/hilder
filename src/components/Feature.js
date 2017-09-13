import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ name }) => (
  <li>{name}</li>
);

Feature.PropTypes = {
  name: PropTypes.string.isRequired,
};

export default Feature;
