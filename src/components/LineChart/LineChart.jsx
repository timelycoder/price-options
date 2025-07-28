import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const studentsMarks = [
  { id: 1, name: "Alice", math: 78, english: 82, bangla: 75 },
  { id: 2, name: "Bob", math: 85, english: 79, bangla: 80 },
  { id: 3, name: "Charlie", math: 92, english: 88, bangla: 85 },
  { id: 4, name: "Diana", math: 66, english: 72, bangla: 70 },
  { id: 5, name: "Ethan", math: 74, english: 76, bangla: 73 },
  { id: 6, name: "Farah", math: 88, english: 84, bangla: 87 },
  { id: 7, name: "George", math: 95, english: 91, bangla: 89 },
  { id: 8, name: "Hannah", math: 80, english: 78, bangla: 77 },
  { id: 9, name: "Ian", math: 70, english: 69, bangla: 68 },
  { id: 10, name: "Julia", math: 90, english: 86, bangla: 84 },
];

const LineChart = () => {
  return (
    <div>
      <LChart width={800} height={400} data={studentsMarks}>
        <XAxis dataKey="name" />
        <YAxis />

        <Line type="monotone" dataKey="math" stroke="red"></Line>
        <Line type="monotone" dataKey="english" stroke="blue"></Line>
        <Line type="monotone" dataKey="bangla" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
