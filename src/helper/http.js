import axios from "axios";

const url = "https://phone-storenyk.herokuapp.com/api/products/"

export const createData = async (newData) => {
  try {
    return await axios.post(url, newData)
  } catch (err) {
    console.warn(err.msg);
  }
}

export const readData = async () => {
  try {
    return await axios.get(url)
  } catch (err) {
    console.warn(err.msg);
  }
}

export const updateData = async (id, updatedProduct) => {
  try {
    return await axios.put(url + id, updatedProduct);
  } catch (err) {
    return console.warn(err.msg);
  }
}

export const deleteData = async (id) => {
  try {
    return await axios.delete(url + id);
  } catch (err) {
    return console.warn(err.msg);
  }
}