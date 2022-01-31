import axios from "axios";

const url = "https://phone-storenyk.herokuapp.com/api/products/"

export const getData = async () => {
  try {
    return await axios.get(url)
  } catch (err) {
    console.warn(err.msg);
  }
}

export const deleteData = async (id) => {
  try {
    await axios.delete(url + id);
  } catch (err) {
    return console.warn(err.msg);
  }
}