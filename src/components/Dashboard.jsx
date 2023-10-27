import React, { useState } from "react";

const Dashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
  const [showEditPatientForm, setShowEditPatientForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Add Doctor Form State
  const [doctorName, setDoctorName] = useState("");
  const [doctorAge, setDoctorAge] = useState("");
  const [doctorGender, setDoctorGender] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPassword, setDoctorPassword] = useState("");

  // Edit Patient Form State
  const [editedPatientName, setEditedPatientName] = useState("");
  const [editedPatientAge, setEditedPatientAge] = useState("");
  const [editedPatientGender, setEditedPatientGender] = useState("");
  const [editedPatientPhone, setEditedPatientPhone] = useState("");
  const [editedPatientEmail, setEditedPatientEmail] = useState("");

  const addDoctor = () => {
    const newDoctor = {
      name: doctorName,
      age: doctorAge,
      gender: doctorGender,
      phone: doctorPhone,
      email: doctorEmail,
      password: doctorPassword,
    };

    setDoctors([...doctors, newDoctor]);
    // Clear the form fields
    setDoctorName("");
    setDoctorAge("");
    setDoctorGender("");
    setDoctorPhone("");
    setDoctorEmail("");
    setDoctorPassword("");
    setShowAddDoctorForm(false);
  };

  const deleteDoctor = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors.splice(index, 1);
    setDoctors(updatedDoctors);
  };

  const editPatient = () => {
    // Implement logic to edit patient details
    // You can use the selectedPatient state to identify the patient to be edited
    // Update the patients state with the edited details
    // Clear the form fields and hide the form
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Administrator Dashboard</h1>

      <div className="mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setShowAddDoctorForm(true)}
        >
          Add Doctor
        </button>
      </div>

      <div className="mb-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover-bg-green-600"
          onClick={() => setShowEditPatientForm(true)}
        >
          Edit Patient Details
        </button>
      </div>

      {showAddDoctorForm && (
        <div className="p-4 bg-gray-100 rounded">
          <form onSubmit={addDoctor}>
            <h2 className="text-lg font-semibold mb-2">Add Doctor</h2>
            <div>
              <label>Name: </label>
              <input
                type="text"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
              />
              <label>Age: </label>
              <input
                type="text"
                value={doctorAge}
                onChange={(e) => setDoctorAge(e.target.value)}
                required
              />
              <label htmlFor="gender" className="">
                Gender
              </label>
              <select
                id="gender"
                className="w-auto p-2 border rounded focus:outline-none"
                value={doctorGender}
                onChange={(e) => setDoctorGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label>Phone: </label>
              <input
                type="tel"
                value={doctorPhone}
                onChange={(e) => setDoctorPhone(e.target.value)}
              />
              <label>Email: </label>
              <input
                type="email"
                value={doctorEmail}
                onChange={(e) => setDoctorEmail(e.target.value)}
                required
              />
              <label>Password: </label>
              <input
                type="password"
                value={doctorPassword}
                onChange={(e) => setDoctorPassword(e.target.value)}
                required
              />
            </div>

            {/* Add other input fields for doctor details here (age, gender, phone, email, password) */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Save Doctor
            </button>
          </form>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => {
              setShowAddDoctorForm(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {showEditPatientForm && selectedPatient && (
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Edit Patient Details</h2>
          {/* Input fields for editing a patient */}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={editPatient}
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Display List of Doctors */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Doctors</h3>
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index}>
              {doctor.name}
              {doctor.age}
              {doctor.gender}
              {doctor.phone}
              {doctor.email}
              {doctor.password}

              <button
                onClick={() => deleteDoctor(index)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Delete Doctor
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display List of Patients */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Patients</h3>
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>{patient.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
