import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

function Chart({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Transaction Chart</h2>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
}

export default Chart;