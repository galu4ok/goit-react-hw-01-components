import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 670px;
  text-align: center;
  margin: 20px 40px;

  td {
    border: 1px solid #808080;
    font-size: 20px;
    color: black;
    text-align: 'center';
  }
`;

export const TableHeader = styled.thead`
  background-color: teal;

  text-transform: uppercase;
  color: #ffffff;
  line-height: 40px;
`;
export const TableRow = styled.tr`
  background-color: #ffffff;
  line-height: 40px;
  text-transform: capitalize;
  color: #808080;
  background-color: ${props => (props.$even ? '#ffffff' : '#b4d6db')};
`;
