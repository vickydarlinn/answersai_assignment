import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";
import { GoQuestion } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const aboveTarget = (((value as number) - 80000) / 80000) * 100; // Example target comparison
    return (
      <div className="bg-card border border-border p-3 rounded shadow-lg">
        <p className="text-primary-foreground flex justify-between items-center">
          <strong>${((value as number) / 1000).toFixed(2)}k</strong>
          <GoQuestion />
        </p>
        <div className="mt-2 text-sm flex">
          <div
            className={` border  p-[2px] rounded-full ${
              aboveTarget >= 0
                ? "text-secondary-foreground border-secondary-foreground"
                : ""
            }`}
          >
            {aboveTarget >= 0 ? <FaArrowUp /> : <FaArrowDown />}
          </div>
          <span className="ml-2">
            {Math.abs(aboveTarget).toFixed(1)}%{" "}
            {aboveTarget >= 0 ? "above" : "below"} target
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const CustomChart = ({
  data,
}: {
  data: {
    month: string;
    value: number;
    isVisible: boolean;
  }[];
}) => {
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
        <CartesianGrid vertical={false} stroke="#343434" />
        <XAxis
          dataKey="month"
          stroke="#575757"
          strokeWidth={0.7}
          tickFormatter={(month, index) => (data[index].isVisible ? month : "")}
          tickSize={0}
          tickMargin={10}
          fontSize={12.5}
          fontWeight={500}
          color="#FFFFFF"
          padding={{ right: 30 }}
        />
        <YAxis
          ticks={[20000, 40000, 60000, 80000, 100000]}
          tickFormatter={(value) => `$${value / 1000}K`}
          stroke="#575757"
          strokeWidth={0.7}
          tickSize={0}
          tickMargin={10}
          fontSize={12.5}
          fontWeight={500}
          color="#FFFFFF"
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "#C8E972", strokeDasharray: "3 3", strokeWidth: 3 }}
        />
        <Area
          dataKey="value"
          stroke="#C8E972"
          fill="url(#colorFill)"
          strokeWidth={3}
          dot={({ cx, cy, payload }) => {
            if (payload.isVisible) {
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={8}
                  fill="white"
                  stroke="#C1F512"
                  strokeWidth={3}
                />
              );
            }
            return <circle cx={cx} cy={cy} r={0} strokeWidth={0} />;
          }}
          activeDot={{ r: 8 }}
        />
        {data.map((point, index) => {
          return (
            index > 0 && (
              <ReferenceLine
                segment={[
                  { x: point.month, y: 0 },
                  {
                    x: point.month,
                    y: point.value - (point.isVisible ? 2500 : 500),
                  },
                ]}
                stroke="#8AA14F"
                strokeWidth={3}
                strokeOpacity={0.3}
                isFront={false}
              />
            )
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
