import AdminProvider from "./context/AdminContext";
import AdminContainer from "./components/AdminContainer";

import "./App.css";

function App() {
  return (
    <AdminProvider>
      <AdminContainer />
    </AdminProvider>
  );
}

export default App;
