import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const Product = ({ _id: id, marca, img, nombre, desc, precio, stock }) => {
  const { deleteProducts } = useContext(AdminContext);

  const handleDelete = () => {
    deleteProducts(id);
  };

  return (
    <tr>
      <th className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{id}</div>
      </th>
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          className="h-10 w-10 rounded-full"
          src={`${process.env.PUBLIC_URL}/assets/productos/${img}.png`}
          alt={nombre}
        />
      </td>
      <th className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{marca}</div>
      </th>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-s leading-5  rounded-full bg-green-100 text-green-800">
          {nombre}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {desc}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${precio}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {stock}
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <i className="bi bi-pencil-square text-blue hover:text-blue-h"></i>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <i
          onClick={handleDelete}
          className="bi bi-trash-fill text-red hover:text-red-h"
        ></i>
      </td>
    </tr>
  );
};

export default Product;
