const SummaryCards = ({ data }) => {
  const income = data.filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = data.filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>
      <h3>Balance: ₹{income - expense}</h3>
    </div>
  );
};

export default SummaryCards;