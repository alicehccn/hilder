import React from 'react';
import PropTypes from 'prop-types';

const Park = ({ name, features, hours, location }) => (
  <li>
    <h4>{name}</h4>
    {features.map((feature, i) => <div key={i}>{feature}</div>)}
    <div>{hours}</div>
    <div>{location}</div>
  </li>
);

Park.PropTypes = {
  name: PropTypes.string.isRequired,
  features: PropTypes.string.isRequired,
  hours: PropTypes.string,
  location: PropTypes.string
};

export default Park;
