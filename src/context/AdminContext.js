import { createContext, useState } from "react";
import { createData, deleteData, readData, readDataByParam, updateData } from "../helper/http";

export const AdminContext = createContext();

const AdminProvider = ({children}) => {
  //Lista de productos
  const [products, setProducts] = useState([]);

  //Petición POST para crear productos
  const createProducts = async (product) => {
    const {data} = await createData(product)
    setProducts([data.product, ...products]);
  };

  //Petición GET para obtener productos
  const readProducts = async () => {
    const {data} = await readData();
    setProducts(data.products);
  };

  //Petición GET para obtener productos por marca
  const readProductsByCat = async (marca) => {

    const ALL_PRODUCTS = "all";
    
    if(marca === ALL_PRODUCTS) {
      return readProducts();
    }

    const {data} = await readDataByParam(marca);
    setProducts(data.products);
  };

  //Petición PUT para actualizar productos
  const updateProducts = async (id, updatedProduct) => {
    const {data} = await updateData(id, updatedProduct);
    setProducts( products.map( product => product._id === id
      ?
      {...product, ...data.product}
      :
      product
    ));
  };

  //Petición DELETE para eliminar productos
  const deleteProducts = async (id) => {
    const {data} = await deleteData(id)
    setProducts(products.filter( product => product._id !== data.product._id));
  };

  return (
    <AdminContext.Provider value={{
        products,
        setProducts,
        createProducts,
        readProducts,
        readProductsByCat,
        updateProducts,
        deleteProducts
      }}>{children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
