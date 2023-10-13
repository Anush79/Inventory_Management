import { useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch, useSelector } from "react-redux";
import { SalesForm } from "../components/SalesInput";
import { deleteSales, getSalesData } from "../redux/actions";
export default function Sales() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state?.sales);
  const loading = useSelector((state) => state.loading)
  const deleteItem = (id) => {
    dispatch(deleteSales(id))
  }
  useEffect(() => {
    dispatch(getSalesData());
  }, [dispatch]);
  console.log({ sales });
  return (
    <>
      <h1>Sales<MonetizationOnIcon fontSize="large" /></h1>
      <SalesForm />
      <div className="container">
        <ul>

          {!loading && sales?.map((item) => (
            <li>
              <span>
                Name: <b>{item?.product?.name} </b>|| Quantity:{item.quantity} || Sale
                Price:₹ {item.price} || Total: ₹ {item.price * item.quantity}{" "}
              </span>
              <DeleteForeverIcon title = "Delete forever" onClick={() => { deleteItem(item._id) }} />
            </li>
          ))}
          {
            loading && <div className="loader"></div>
          }
        </ul>
      </div>
    </>
  );
}
