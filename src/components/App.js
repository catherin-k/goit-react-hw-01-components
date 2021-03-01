import React from 'react';
import user from './task-1/user.json';
import Profile from './task-1/Profile.js';

// console.log(Profile);

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
    </>
  );
};

export default App;
