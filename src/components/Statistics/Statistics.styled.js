import styled from 'styled-components';

export const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 400px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 8px 0px #000000;
  margin-left: 40px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #0505057e;
  margin: 15px;
`;

export const StatsList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  text-align: center;
  padding: 15px;

  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ color }) => color || 'transparent'};
`;

export const StatsLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  display: block;
`;
export const StatsPercentage = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  display: block;
`;
