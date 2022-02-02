import { marcas } from "../data/data";

const Select = ({ readProductsByCat }) => {
  return (
    <select
      onChange={({ target }) => readProductsByCat(target.value)}
      name="cat"
    >
      <option value="all">TODOS LOS PRODUCTOS</option>
      {marcas.map(({ id, nombre }) => (
        <option key={id} value={nombre}>
          {nombre.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default Select;
