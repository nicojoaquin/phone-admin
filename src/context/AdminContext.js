import { createContext, useState } from "react";
import { createData, deleteData, readData, updateData } from "../helper/http";

export const AdminContext = createContext();

const AdminProvider = ({children}) => {
  //Lista de productos
  const [products, setProducts] = useState([]);
  //Producto activo para editar
  const [activeProduct, setActiveProduct] = useState(null);

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
        activeProduct,
        setProducts,
        setActiveProduct,
        createProducts,
        readProducts,
        updateProducts,
        deleteProducts
      }}>{children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
