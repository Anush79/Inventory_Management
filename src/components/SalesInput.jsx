import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSales, getInventoryData } from "../redux/actions";
export function SalesForm() {
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state?.inventoryItems);
  const [formData, setFormData] = useState(
    {
      product: "",
      price: "",
      quantity: "",
    }
  );

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(addSales(formData));

    setFormData({
      name: "",
      price: "",
      quantity: "",
    });
  };
  useEffect(() => {
    dispatch(getInventoryData());
  }, []);
  return (
    <div>
      <b>Add Sales Data</b>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">
          Name:
          <select
            name="product"
            id=""
            onChange={onChangeHandler}
            required
          >
          
{
  inventoryItems?.map(item=>{
    return <option value={item._id}>{item.name}</option>
  })
}
          </select>
        </label>
        <label htmlFor="">
          Price
          <input
            type="number"
            name="price"
            id=""
            min={1}
            onChange={onChangeHandler}
            value={formData.price}
            required
          />
        </label>
        <label htmlFor="">
          Quantity
          <input
            type="number"
            name="quantity"
            id=""
            min={1}
            max={100}
            onChange={onChangeHandler}
            value={formData.quantity}
            required
          />
        </label>
        <button>Add Data</button>
      </form>
    </div>
  );
}
