import {
  User,
  UserDescription,
  UserName,
  Avatar,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <User>
      <UserDescription>
        <Avatar src={avatar} alt="user avatar" width="100" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>
      <UserStatsList>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStatsList>
    </User>
  );
};
