import {
  FriendsList,
  FriendItem,
  FriendStatus,
  FriendAvatar,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <FriendStatus $isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" />
            <p>{name}</p>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};
