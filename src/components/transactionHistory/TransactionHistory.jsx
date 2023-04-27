import PT from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {    
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(({ type, amount, currency, id }) => (
        <tbody key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PT.string,
  amount: PT.number,
  currency: PT.string,
};

export default TransactionHistory;
