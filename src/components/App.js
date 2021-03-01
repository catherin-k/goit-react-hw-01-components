import React from 'react';

import user from './task-1/user.json';
import Profile from './task-1/Profile.js';

import Statistics from './task-2/Statistics';
import statisticalData from './task-2/statistical-data.json';

import friends from './task-3/friends.json';
import FriendList from './task-3/FriendList';

import transactions from './task-4/transactions.json';
import TransactionHistory from './task-4/TransactionHistory';

console.log(transactions);

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
      <h2>Task-3</h2>
      <FriendList friends={friends} />
      <h2>Task-4</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
