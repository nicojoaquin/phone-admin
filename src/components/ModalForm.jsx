import { useForm } from "../hooks/useForm";

const ModalForm = ({
  handleSubmit,
  activeProduct,
  _id: id,
  nombre,
  marca,
  precio,
  stock,
  desc,
}) => {
  //Custom hook para controlar los inputs
  const [productValue, handleValues] = useForm({
    imgValue: "",
    nombreValue: nombre ?? "",
    marcaValue: marca ?? "",
    precioValue: precio ?? "",
    stockValue: stock ?? "",
    descValue: desc ?? "",
  });

  //Values del form desestructurados
  const {
    imgValue,
    nombreValue,
    marcaValue,
    precioValue,
    stockValue,
    descValue,
  } = productValue;

  //Si estan los campos vacios hay error, y si no se manda a agregar/editar
  const onSubmit = (e) => {
    e.preventDefault();
    if ([nombreValue, marcaValue, precioValue, descValue].includes("")) return;
    handleSubmit(
      {
        nombre: nombreValue,
        marca: marcaValue.toLowerCase(),
        precio: precioValue,
        stock: stockValue,
        desc: descValue,
      },
      imgValue,
      id
    );
  };

  return (
    <div>
      <h2>{activeProduct ? "Editar producto" : "Agregar producto"}</h2>
      <form onSubmit={onSubmit}>
        {!activeProduct && (
          <div>
            <label htmlFor="img">Imágen</label>
            <input
              name="imgValue"
              value={imgValue}
              onChange={handleValues}
              type="text"
              placeholder="Ingrese nombre de imágen"
            />
          </div>
        )}
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            name="nombreValue"
            value={nombreValue}
            onChange={handleValues}
            type="text"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div>
          <label htmlFor="marca">Marca</label>
          <input
            name="marcaValue"
            value={marcaValue}
            onChange={handleValues}
            type="text"
            placeholder="Ingrese la marca"
          />
        </div>
        <div>
          <label htmlFor="precio">Precio</label>
          <input
            name="precioValue"
            value={precioValue}
            onChange={handleValues}
            type="number"
            min={0}
            placeholder="Ingrese el precio"
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            name="stockValue"
            value={stockValue}
            onChange={handleValues}
            type="number"
            min={0}
            placeholder="Ingrese el stock"
          />
        </div>
        <div>
          <label htmlFor="desc">Descripción</label>
          <input
            name="descValue"
            value={descValue}
            onChange={handleValues}
            type="text"
            placeholder="Ingrese la descripción"
          />
        </div>
        <button className="btn btn-outline-primary">Guardar cambios</button>
      </form>
    </div>
  );
};

export default ModalForm;
