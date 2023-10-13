const addSalesService = async (inputData) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://inventorymanagement.anushkajaiswal7.repl.co/sales",
      requestOptions
    );
    if (response) {
      const result = await response.json();
      return result;
    } else console.log("No response found");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllSalesData = async () => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "https://inventorymanagement.anushkajaiswal7.repl.co/sales",
      requestOptions
    );
    if (response) {
      const result = await response.json();
      return result;
    } else console.log("No response found");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const updateSalesService = async (id, inputData) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `https://inventorymanagement.anushkajaiswal7.repl.co/sales/${id}`,
      requestOptions
    );
    if (response) {
      const result = await response.json();
      return result;
    } else console.log("No response found");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const deleteSalesService = async (id) => {
  try {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    const response = await fetch(
      `https://inventorymanagement.anushkajaiswal7.repl.co/sales/${id}`,
      requestOptions
    );
    if (response) {
      const result = await response.json();
      return result;
    } else console.log("No response found");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export {
  addSalesService,
  getAllSalesData,
  updateSalesService,
  deleteSalesService,
};
