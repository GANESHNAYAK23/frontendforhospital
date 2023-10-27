import React, { useState } from "react";
import AddDoct from "../components/AddDoct";
import ViewPatients from "../components/ViewPatients.jsx";

const Admin = () => {
  const [showAddDoct, setShowAddDoct] = useState(false);
  const [showViewPatients, setShowViewPatients] = useState(false);

  const toggleAddDoct = () => {
    setShowAddDoct(!showAddDoct);
    if (!showAddDoct) {
      setShowViewPatients(false); // Hide the patients component
    }
  };

  const toggleViewPatients = () => {
    setShowViewPatients(!showViewPatients);
    if (!showViewPatients) {
      setShowAddDoct(false); // Hide the doctors component
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={toggleAddDoct}
        >
          {showAddDoct ? "View Doctors" : "Add Doctors"}
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleViewPatients}
        >
          {showViewPatients ? "Hide Patients" : "View Patients"}
        </button>
        {showAddDoct && <AddDoct />}
        {showViewPatients && <ViewPatients />}
      </div>
    </div>
  );
};

export default Admin;
