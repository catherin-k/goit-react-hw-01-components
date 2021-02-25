import React from 'react';

const Stats = ({ stats }) => {
  return (
    <>
      {Object.entries(stats).map(stat => (
        <li>
          <p>{stat}</p>
        </li>
      ))}
    </>
  );
};

export default Stats;
