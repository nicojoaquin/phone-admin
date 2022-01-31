import React from "react";

const ModalForm = ({ activeProduct }) => {
  return (
    <div>
      <h2>{activeProduct ? "Editar producto" : "Agregar producto"}</h2>
      <form>
        {!activeProduct && (
          <div>
            <label htmlFor="img">Imágen</label>
            <input type="text" placeholder="Ingrese nombre de imágen" />
          </div>
        )}
        <di>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Ingrese el nombre" />
        </di>
        <div>
          <label htmlFor="marca">Marca</label>
          <input type="text" placeholder="Ingrese la marca" />
        </div>
        <di>
          <label htmlFor="precio">Precio</label>
          <input type="number" min={0} placeholder="Ingrese el precio" />
        </di>
        <div>
          <label htmlFor="desc">Descripción</label>
          <input type="text" placeholder="Ingrese la descripción" />
        </div>
        <button className="btn btn-outline-primary">Guardar cambios</button>
      </form>
    </div>
  );
};

export default ModalForm;
