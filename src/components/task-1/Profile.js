import React from 'react';
import Stats from './Stats';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User-avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <Stats stats={stats} />
      </ul>
    </div>
  );
};

export default Profile;
