import React from "react";
import {
  Bar,
  BarChart as BChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const animalData = [
  { id: 1, name: "Lion", population: 1200, avgWeight: 190, lifespan: 14 },
  { id: 2, name: "Elephant", population: 3200, avgWeight: 5400, lifespan: 60 },
  { id: 3, name: "Tiger", population: 2500, avgWeight: 220, lifespan: 15 },
  { id: 4, name: "Zebra", population: 4500, avgWeight: 350, lifespan: 25 },
  { id: 5, name: "Giraffe", population: 1100, avgWeight: 800, lifespan: 26 },
  { id: 6, name: "Panda", population: 1800, avgWeight: 100, lifespan: 20 },
  { id: 7, name: "Kangaroo", population: 2700, avgWeight: 85, lifespan: 23 },
  { id: 8, name: "Wolf", population: 2000, avgWeight: 50, lifespan: 16 },
  { id: 9, name: "Rhino", population: 500, avgWeight: 2300, lifespan: 40 },
  { id: 10, name: "Bear", population: 900, avgWeight: 300, lifespan: 25 },
];

const BarChart = () => {
  return (
    <div>
      <BChart
        height={400}
        width={800}
        data={animalData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Tooltip></Tooltip>
        <Legend></Legend>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar type="monotone" stroke="green" dataKey="lifespan"></Bar>
      </BChart>
    </div>
  );
};

export default BarChart;
