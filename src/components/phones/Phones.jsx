import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonewitFakedata = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonewitFakedata);
        console.log(phonewitFakedata);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl">Phones:{phones.length}</h1>
      <BarChart width={900} height={400} data={phones}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
        <Bar dataKey="price" fill="#8884d8"></Bar>
      </BarChart>
    </div>
  );
};

export default Phones;
