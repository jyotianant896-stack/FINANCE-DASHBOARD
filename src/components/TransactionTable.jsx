const TransactionTable = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map(t => (
          <tr key={t.id}>
            <td>{t.date}</td>
            <td>{t.amount}</td>
            <td>{t.category}</td>
            <td>{t.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;