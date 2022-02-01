import { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import Product from "./Product";

const AdminTable = ({ onEdit }) => {
  const { products, setProducts, readProducts } = useContext(AdminContext);

  useEffect(() => {
    readProducts();
  }, [setProducts]);

  return (
    <table className="table-auto min-w-full divide-y divide-gray-200 mt-3">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Imagen
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Marca
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nombre
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Editar
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <Product
            key={product._id}
            {...product}
            product={product}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
