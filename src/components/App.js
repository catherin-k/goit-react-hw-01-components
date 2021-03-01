import React from 'react';

import user from './task-1/user.json';
import Profile from './task-1/Profile.js';

import Statistics from './task-2/Statistics';
import statisticalData from './task-2/statistical-data.json';

// console.log(statisticalData);

const App = () => {
  return (
    <>
      <h2>Task-1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task-2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
