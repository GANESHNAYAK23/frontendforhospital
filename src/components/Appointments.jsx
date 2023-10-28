import React, { useState } from "react";

const Appointments = () => {
  const [tableItems, setTableItems] = useState([
    {
      name: "Solo learn app",
      date: "Oct 9, 2023",
      status: "Active",
      price: "$35.000",
      plan: "Monthly subscription",
    },
    // ... (other initial items)
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    date: "",
    status: "",
    price: "",
    plan: "",
  });

  const handleAddProduct = () => {
    setTableItems([...tableItems, newProduct]);
    setNewProduct({
      name: "",
      date: "",
      status: "",
      price: "",
      plan: "",
    });
  };

  const handleChange = (e, field) => {
    setNewProduct({ ...newProduct, [field]: e.target.value });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="flex items-start justify-between">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All products
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <div className="flex">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => handleChange(e, "name")}
              className="mr-2 px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            {/* Add other input fields for other product details */}
            <button
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              onClick={handleAddProduct}
            >
              Add product
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Name</th>
              <th className="py-3 pr-6">Date</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Purchase</th>
              <th className="py-3 pr-6">Price</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4">{item.name}</td>
                <td className="pr-6 py-4">{item.date}</td>
                <td className="pr-6 py-4">
                  <span
                    className={`px-3 py-2 rounded font-semibold text-xs ${
                      item.status === "Active"
                        ? "text-green-600 bg-green-50"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pr-6 py-4">{item.plan}</td>
                <td className="pr-6 py-4">{item.price}</td>
                <td className="text-right"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
