import { useState } from "react";
import SummaryCards from "./components/SummaryCards";
import Chart from "./components/Chart";
import Insights from "./components/Insights";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import { transactions } from "./data/transactions";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div style={{ padding: "20px" }}>
      
      <RoleSwitcher role={role} setRole={setRole} />

      <SummaryCards data={transactions} />
      <Chart data={transactions} />
      <Insights data={transactions} />
      <TransactionTable data={transactions} />

      {role === "admin" && <button>Add Transaction</button>}
      
    </div>
  );
}

export default App;