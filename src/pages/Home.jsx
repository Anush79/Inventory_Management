import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryData, getSalesData } from "../redux/actions";
import BarChart from "../components/BarChart";
import BarChartSales from '../components/BarChartSale'
export default function Home() {
  const [toggleChart, setToggleChart] = useState("invent");
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state?.inventoryItems);
  const sales = useSelector((state) => state?.sales);
  const loading = useSelector((state) => state?.loading);
  useEffect(() => {
    dispatch(getInventoryData());
    dispatch(getSalesData());
  }, []);
  const calculateTotal = (arr) => {
    return arr?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };
  return (
    <div>
      <h1>DashBoard</h1>
      {!loading && (
        <div>Total Inventory cost = ₹ {calculateTotal(inventoryItems)}</div>
      )}
      <div>Total Revenue = ₹ {calculateTotal(sales)}</div>
      <hr/>
      <label htmlFor="invent">
        <input
        id="invent"
          type="radio"
          name="chart"
          checked={toggleChart === "invent"}
          onChange={() => {
            setToggleChart("invent");
          }}
        />
        Inventory Statistics
      </label>
      <label htmlFor="sales">
        <input
        id="sales"
          type="radio"
          name="chart"
          checked={toggleChart === "sales"}
          onChange={() => {
            setToggleChart("sales");
          }}
        />
        Sales Statistics
      </label>
      {toggleChart === 'invent' && inventoryItems[0] &&
        <BarChart />}
        {
          toggleChart === 'sales' && sales[0] &&
          <BarChartSales />
        }
    </div>
  );
}
