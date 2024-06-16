import React from "react";
import { Line } from "react-chartjs-2";
import { getDataToChart } from "../../../services/orderService";
import YearsComboBox from "../../../components/YearsComboBox";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [dataTotalPrice, setDataTotalPrice] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024);

  const fetchData = async (year) => {
    let data = await getDataToChart(year);
    const totalPriceData = data.data.map((item) =>
      Number(item.totalPrice || 0)
    );

    setDataTotalPrice(totalPriceData);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]);
  // Sample data for demonstration
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Total Price",
        data: dataTotalPrice, // Replace with your actual data
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Monthly Total Prices</h2>
      <YearsComboBox onChange={handleYearChange} />
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;
