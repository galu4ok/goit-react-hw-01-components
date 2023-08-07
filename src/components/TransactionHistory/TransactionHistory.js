import {
  TransactionTable,
  TableHeader,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id} $even={index % 2 === 0}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};
