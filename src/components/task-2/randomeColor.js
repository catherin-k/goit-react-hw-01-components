import React from 'react';

const randomColor = () => {
  return '#' + Math.random().toString(16).substring(9);
};

export default randomColor;
