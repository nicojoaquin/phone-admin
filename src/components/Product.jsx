const Product = ({
  _id: id,
  marca,
  img,
  nombre,
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <tr>
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
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <i
          onClick={() => onEdit(product)}
          className="bi bi-pencil-square text-blue hover:text-blue-h"
        ></i>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <i
          onClick={() => onDelete(id)}
          className="bi bi-trash-fill text-red hover:text-red-h"
        ></i>
      </td>
    </tr>
  );
};

export default Product;
