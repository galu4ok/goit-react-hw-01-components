import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import userData from '../data/user.json';
import statsData from '../data/data.json';
import friendsData from '../data/friends.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
    </>
  );
};
