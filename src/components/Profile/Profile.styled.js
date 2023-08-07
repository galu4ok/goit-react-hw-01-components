import styled from 'styled-components';

export const User = styled.div`
  width: 400px;
  min-height: 400px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 0px #000000;
  margin: 40px 40px 20px 40px;
  padding-top: 25px;
`;

export const UserDescription = styled.div``;
export const UserName = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 20px;
`;
export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  padding: 10px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset;
`;
export const UserTag = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #0505057e;
`;
export const UserLocation = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #0505057e;
`;
export const UserStatsList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  text-align: center;
  padding: 10px;
  background-color: #b4d6db;
`;
export const UserStatsLabel = styled.span`
  color: #0505057e;
  font-size: 18px;
  font-weight: 600;
  display: block;
`;
export const UserStatsQuantity = styled.span`
  margin-top: 6px;
  font-size: 18px;
  font-weight: 700;
`;
