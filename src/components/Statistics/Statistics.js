import {
  StatsSection,
  Title,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={getRandomHexColor()}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage} %</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};
