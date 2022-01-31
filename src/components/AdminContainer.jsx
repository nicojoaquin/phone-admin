import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import Modal from "react-modal";
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

const AdminContainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { activeProduct, setActiveProduct } = useContext(AdminContext);

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

  return (
    <main className="container mx-auto">
      <div className="flex flex-wrap justify-evenly p-5 mt-5 border-b-blue border-b-2">
        <h1 className="text-5xl text-center mb-3">Panel de administración</h1>
        <div>
          <button className="rounded-full bg-blue hover:bg-blue-h text-white p-3 ml-3">
            Agregar producto
          </button>
          <button className="rounded-full bg-red hover:bg-red-h text-white p-3 ml-3">
            Salir
          </button>
        </div>
      </div>
      <section>
        <AdminTable />
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalForm {...activeProduct} activeProduct={activeProduct} />
      </Modal>
    </main>
  );
};

export default AdminContainer;
