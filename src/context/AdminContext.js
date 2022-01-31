import { createContext, useState } from "react";
import { deleteData, getData } from "../helpers/http";

export const AdminContext = createContext();

const AdminProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const readProducts = async () => {
    const res = await getData();
    setProducts(res.data.products);
  };

  const deleteProducts = async (id) => {
    deleteData(id)
    setProducts(products.filter( product => product._id !== id));
  };

  return (
    <AdminContext.Provider value={{
        products,
        setProducts,
        activeProduct,
        setActiveProduct,
        readProducts,
        deleteProducts
      }}>{children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
