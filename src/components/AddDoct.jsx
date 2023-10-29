import React, { useState } from "react";

const AddDoct = () => {
  const [tableItems, setTableItems] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    gender: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMember = () => {
    console.log(formData);
    setTableItems([...tableItems, formData]);
    setFormData({
      name: "",
      email: "",
      department: "",
      password: "",
      gender: "",
      phone: "",
    });
  };

  const handleDelete = (idx) => {
    const updatedTableItems = [...tableItems];
    updatedTableItems.splice(idx, 1);
    setTableItems(updatedTableItems);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-8 pb-10 md:px-4 rounded-lg backdrop-blur-sm bg-black/30 ">
        <div className="text-center">
          <h3 className="text-yellow-100 text-xl font-bold sm:text-2xl">
            Doctors
          </h3>
          <p className="text-white mt-2">Add and view doctors</p>
        </div>
        <div className="flex justify-center mt-6">
          <form className="max-w-md w-full">
            {/* name */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="px-4 py-2 rounded-lg w-full bg-white bg-opacity-75"
                required
              />
            </div>
            {/* email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="px-4 py-2 rounded-lg w-full"
                required
              />
            </div>
            {/* department */}
            <div className="mb-4">
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="Department"
                className="px-4 py-2 rounded-lg w-full"
                required
              />
            </div>
            {/* phone */}
            <div className="mb-4">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="px-4 py-2 rounded-lg w-full bg-white bg-opacity-75"
                required
              />
            </div>
            {/* gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full p-2 border rounded focus:outline-none"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* password */}
            <div className="mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="px-4 py-2 rounded-lg w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-button"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="button"
              onClick={handleAddMember}
              className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-150"
            >
              Add member
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Password</th>
              <th className="py-3 px-6">department</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className=" bg-gray-50 text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.password}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.department}
                </td>
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

export default AddDoct;
