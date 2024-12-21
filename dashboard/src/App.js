import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddPizza from "./components/AddPizza";
import EditPizza from "./components/EditPizza";
// import OrdersList from "./components/OrdersList";
import PizzaList from "./components/PizzaList"; // Import the PizzaList component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-pizza" element={<AddPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        {/* <Route path="/manage-orders" element={<OrdersList />} /> */}
        <Route path="/pizza-list" element={<PizzaList />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
