import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';

export const App = () => {
  console.log(friends);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics label={data.label} percentage={data.percentage} data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
