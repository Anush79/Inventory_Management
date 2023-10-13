import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJs } from 'chart.js/auto'

import 'chart.js';

export default function BarChart() {
  const inventoryItems = useSelector((state) => state?.inventoryItems);
  const sales = useSelector((state) => state?.sales);

  const [chartData, setChartData] = useState({
    labels: inventoryItems?.map(item => item.name),
    datasets: [
      {
        label: "Quantity of item",
        data: inventoryItems?.map(item => item.quantity),
        backgroundColor: [
          "#555"
        ],
        hoverOffset: 4,
      }

    ],
  })

  return <div className='chart'>
    <Bar data={chartData} ></Bar>
  </div >
}