import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJs } from 'chart.js/auto'

import 'chart.js';

export default function BarChartSales() {

  const sales = useSelector((state) => state?.sales);
  const salesBreakDown = sales?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr?.product?.name]:
        (acc[curr?.product?.name] || 0) + (curr?.price * curr?.quantity || 0),
    }),
    {}
  );

  const [chartData, setChartData] = useState({
    labels: Object.keys(salesBreakDown),
    datasets: [
      {
        label: "Total Sale price",
        data: Object.values(salesBreakDown),
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
