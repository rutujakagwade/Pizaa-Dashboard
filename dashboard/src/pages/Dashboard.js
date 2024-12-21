import React, { useState } from "react";
import AddPizza from "../components/AddPizza";
// import OrdersList from "../components/OrdersList";
import PizzaList from "../components/PizzaList";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("pizza-list");

  const renderContent = () => {
    switch (activeTab) {
      case "add-pizza":
        return <AddPizza />;
      // case "manage-orders":
      //   return <OrdersList />;
      case "pizza-list":
      default:
        return <PizzaList />;
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("pizza-list")}
          className={`px-4 py-2 rounded ${
            activeTab === "pizza-list" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Pizza List
        </button>
        <button
          onClick={() => setActiveTab("add-pizza")}
          className={`px-4 py-2 rounded ${
            activeTab === "add-pizza" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Add Pizza
        </button>
      </div>

      {/* Render the Active Component */}
      <div className="bg-white p-6 rounded shadow">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
