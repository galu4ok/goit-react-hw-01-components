import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import userData from '../data/user.json';
import statsData from '../data/data.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={statsData} />
    </>
  );
};
