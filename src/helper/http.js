import axios from "axios";

const URL = process.env.REACT_APP__API_URL;

//POST
const createData = async (newData) => {
  try {
    return await axios.post(URL, newData)
  } catch (err) {
    return console.warn(err.msg);
  }
}

//GET
const readData = async () => {
  try {
    return await axios.get(URL)
  } catch (err) {
    return console.warn(err.msg);
  }
}

//GET
const readDataByParam = async (param) => {
  try { 
    return await axios.get(URL + param)
  } catch (err) {
    return console.warn(err.msg);
  }
};

//PUT
const updateData = async (id, updatedData) => {
  try {
    return await axios.put(URL + id, updatedData);
  } catch (err) {
    return console.warn(err.msg);
  }
}

//DELETE
const deleteData = async (id) => {
  try {
    return await axios.delete(URL + id);
  } catch (err) {
    return console.warn(err.msg);
  }
}

export {
  createData,
  readData,
  readDataByParam,
  updateData,
  deleteData
}