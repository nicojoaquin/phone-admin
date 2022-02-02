import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminProvider from "./context/AdminContext";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <AdminProvider>
        <Routes>
          <Route path = '/' element = {<Admin />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '*' element = {<Navigate to="/" />} />
        </Routes>
      </AdminProvider>
    </Router>
  );
}

export default App;
