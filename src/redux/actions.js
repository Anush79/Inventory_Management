import { toast } from "react-hot-toast";
import {
  addInventoryService,
  deleteInventoryService,
  getAllInventoryData,
  updateInventoryService,
} from "../services/inventoryServices";

import {
  addSalesService,
  deleteSalesService,
  getAllSalesData,
  updateSalesService,
} from "../services/salesServices";
import { actionTypes } from "../utils/constants";
const {
  ADD_INVENTORY_DATA_SUCCESS,
  DELETE_INVENTORY_DATA_SUCCESS,
  UPDATE_INVENTORY_DATA_SUCCESS,
  GET_INVENTORY_DATA_SUCCESS,
  ADD_INVENTORY_DATA_ERROR,
  DELETE_INVENTORY_DATA_ERROR,
  UPDATE_INVENTORY_DATA_ERROR,
  GET_INVENTORY_DATA_ERROR,
  ADD_SALES_DATA_SUCCESS,
  DELETE_SALES_DATA_SUCCESS,
  UPDATE_SALES_DATA_SUCCESS,
  GET_SALES_DATA_SUCCESS,
  ADD_SALES_DATA_ERROR,
  DELETE_SALES_DATA_ERROR,
  UPDATE_SALES_DATA_ERROR,
  GET_SALES_DATA_ERROR,
  DATA_LOADING,
} = actionTypes;
const addInventory = (inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await addInventoryService(inputData);
    dispatch({ type: ADD_INVENTORY_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: ADD_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
const getInventoryData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await getAllInventoryData();
    dispatch({ type: GET_INVENTORY_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
const deleteInventory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await deleteInventoryService(id);
    dispatch({ type: DELETE_INVENTORY_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: DELETE_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
const updateInventory = (id, inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await updateInventoryService(id, inputData);
    console.log(response);
    dispatch({ type: UPDATE_INVENTORY_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: UPDATE_INVENTORY_DATA_ERROR, payload: error.message });
  }
};

const addSales = (inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await addSalesService(inputData);
    console.log(response);
    dispatch({ type: ADD_SALES_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: ADD_SALES_DATA_ERROR, payload: error.message });
  }
};
const getSalesData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await getAllSalesData();
    dispatch({ type: GET_SALES_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_SALES_DATA_ERROR, payload: error.message });
  }
};
const deleteSales = (id) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await deleteSalesService(id);
    dispatch({ type: DELETE_SALES_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: DELETE_SALES_DATA_ERROR, payload: error.message });
  }
};
const updateSales = (id, inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await updateSalesService(id, inputData);
    console.log(response);
    dispatch({ type: UPDATE_SALES_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: UPDATE_SALES_DATA_ERROR, payload: error.message });
  }
};

export {
  addInventory,
  addSales,
  deleteInventory,
  deleteSales,
  getInventoryData,
  getSalesData,
  updateInventory,
  updateSales,
};
