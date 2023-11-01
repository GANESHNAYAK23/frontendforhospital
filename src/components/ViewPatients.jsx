import React, { useState, useEffect } from "react";
import Axios from "axios";

const ViewPatients = () => {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    const getTableItems = async () => {
      try {
        const response = await Axios.post("http://localhost:3000/findPatient");
        setTableItems(response.data.alluser);
        console.log("response.data");
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setTableItems([]);
      }
    };
    getTableItems();
  }, []);

  const handleDelete = (idx) => {
    const updatedTableItems = [...tableItems];
    updatedTableItems.splice(idx, 1);
    setTableItems(updatedTableItems);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="text-center">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Patients
        </h3>
        <p className="text-gray-600 mt-2">Total patients</p>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Salary</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => handleDelete(idx)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover-bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPatients;
