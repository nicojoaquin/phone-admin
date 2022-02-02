import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import Modal from "react-modal";
import Select from "./Select";
import AdminTable from "./AdminTable";
import ModalForm from "./ModalForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "65%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AdminContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const {
    setProducts,
    readProducts,
    readProductsByCat,
    createProducts,
    updateProducts,
    deleteProducts,
  } = useContext(AdminContext);

  useEffect(() => {
    readProducts();
  }, [setProducts]);

  //Abre el modal
  const openModal = () => {
    setIsOpen(true);
  };

  //Se cierra el modal y se depura el producto activo
  const closeModal = () => {
    setIsOpen(false);
    setActiveProduct(null);
  };

  //Se abre el modal al empezar a agregar
  const onAdd = () => {
    openModal();
  };

  //Se abre el modal al empezar a editar y se agrega el producto en activo
  const onEdit = (product) => {
    openModal();
    setActiveProduct(product);
  };

  //Se elimina el producto
  const onDelete = (id) => {
    deleteProducts(id);
  };

  //Si hay producto activo, se edita, y si no se agrega
  const handleSubmit = (product, id) => {
    if (activeProduct) {
      updateProducts(id, product);
    } else {
      createProducts(product);
    }
    closeModal();
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap justify-evenly p-5 mt-5 border-b-blue border-b-2">
        <h1 className="text-5xl text-center mb-3">Panel de administración</h1>
        <div>
          <Select readProductsByCat={readProductsByCat} />
          <button
            onClick={onAdd}
            className="rounded-full bg-blue hover:bg-blue-h text-white p-3 ml-3"
          >
            Agregar producto
          </button>
          <button className="rounded-full bg-red hover:bg-red-h text-white p-3 ml-3">
            Salir
          </button>
        </div>
      </div>
      <section>
        <AdminTable onEdit={onEdit} onDelete={onDelete} />
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalForm
          handleSubmit={handleSubmit}
          activeProduct={activeProduct}
          {...activeProduct}
        />
      </Modal>
    </main>
  );
};

export default AdminContainer;
