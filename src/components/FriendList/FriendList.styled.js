import styled from 'styled-components';

export const FriendsList = styled.ul`
  position: absolute;
  top: 20px;
  left: 500px;
  border-radius: 5px;
  max-width: 400px;
  background: #ffffff;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  max-height: 120px;
  gap: 20px;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 1px 1px 8px 0px #000000;
`;
export const FriendAvatar = styled.img`
  width: 60px;
  height: 60px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #0505057e;
`;

export const FriendStatus = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: block;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
