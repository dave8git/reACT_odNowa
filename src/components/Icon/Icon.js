import React from 'react';
//import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
