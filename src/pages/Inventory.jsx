import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InventoryIcon from '@mui/icons-material/Inventory';
import EditIcon from "@mui/icons-material/Edit";
import { InventoryForm } from "../components/InventoryInputForm";
import { useEffect, useState } from "react";
import { getInventoryData, deleteInventory } from "../redux/actions";
export default function Inventory() {
  const [inventToUpdate, setInventToUpdate] = useState();
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state?.inventoryItems);
  const loading = useSelector((state) => state?.loading);
  console.log("inventoryItems", inventToUpdate);

  useEffect(() => {
    dispatch(getInventoryData());
  }, []);
  useEffect(() => {
    setInventToUpdate(null);
  }, [inventoryItems]);
  useEffect(() => {}, [inventToUpdate]);
  return (
    <div>
      <h1>Inventory Management <InventoryIcon/></h1>
      {inventToUpdate && <InventoryForm toUpdate={inventToUpdate} />}
      {!inventToUpdate && <InventoryForm />}
      <div className="materials">
        <ul>
        {!loading && inventoryItems?.map((item) => (
          <li key={item._id}>
            <b>{item?.name} </b>|| Price ₹ {item?.price} || Quantity : {item.quantity}
            <span>
               <EditIcon title="Update this item"
              onClick={() => {
                setInventToUpdate(item);
              }}
            ></EditIcon>
            <DeleteForeverIcon title = "Delete forever"
              onClick={() => {
                dispatch(deleteInventory(item._id));
              }}
            ></DeleteForeverIcon>
            </span>
           
          </li>
        ))}
        {loading &&   <div className='loader'></div>}
        </ul>
      </div>
    </div>
  );
}