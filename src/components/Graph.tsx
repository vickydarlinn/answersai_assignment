import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const aboveTarget = (((value as number) - 80000) / 80000) * 100;
    return (
      <div
        style={{
          backgroundColor: "#1E1E1E",
          color: "#C1F512",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px" }}>
          <strong>${((value as number) / 1000).toFixed(2)}k</strong>
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: aboveTarget >= 0 ? "#90EE90" : "#FF6F61",
          }}
        >
          {aboveTarget >= 0 ? "↑" : "↓"} {Math.abs(aboveTarget).toFixed(1)}%{" "}
          {aboveTarget >= 0 ? "above" : "below"} target
        </p>
      </div>
    );
  }
  return null;
};

interface ChartProps {
  data: { month: string; value: number }[];
}
const CustomChart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C1F512" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#C1F512" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#888" />
        <YAxis
          tickFormatter={(value) => `$${value / 1000}K`}
          stroke="#888"
          domain={[0, 100000]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "#C1F512", strokeDasharray: "3 3" }}
        />
        <Area
          dataKey="value"
          stroke="#C1F512"
          fill="url(#colorFill)"
          strokeWidth={2}
          dot={{ fill: "#C1F512", r: 5 }}
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
