import "./App.css";
import BarChart from "./components/barChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar";
import Phones from "./components/phones/Phones";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <Phones></Phones>
    </>
  );
}

export default App;
