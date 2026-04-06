const Insights = ({ data }) => {
  const expenses = data.filter(t => t.type === "expense");

  const highest = expenses.reduce((max, t) =>
    t.amount > max.amount ? t : max, expenses[0]);

  return (
    <div>
      <h3>Highest Spending: {highest.category} ₹{highest.amount}</h3>
    </div>
  );
};

export default Insights;