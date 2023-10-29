import React, { useState } from "react";

const Appointments = () => {
  
  const [tableItems, setTableItems] = useState([
    {
      name: "Jim Green",
      date: "2023-01-01",
      status: "Accepted",
      time: "9 am",
      phone: "9652315200",
      specialization: "Dermatologist",
    },
    {
      name: "Kim Green",
      date: "2023-10-01",
      status: "Rejected",
      time: "10 am",
      phone: "9652315520",
      specialization: "ENT",
    },
    {
      name: "Kim Green",
      date: "2023-10-01",
      status: "Pending",
      time: "10 am",
      phone: "9652315520",
      specialization: "ENT",
    },
    
  ]);

  

  const [newProduct, setNewAppointment] = useState({
    name: "",
    date: "",
    status: "Pending",
    time:"",
    phone: "",
    specialization: "",
  });

  const handleAddAppointment = () => {
    setTableItems([...tableItems, newProduct]);
    setNewAppointment({
      name: "",
      date: "",
      status: "",
      time:"",
      phone: "",
      specialization: "",
    });
  };

  const handleChange = (e, field) => {
    setNewAppointment({ ...newProduct, [field]: e.target.value });
  };

  const changeColor = (status) => {
    if (status === "Accepted") {
      return "text-green-600 bg-green-200";
    } else if (status === "Rejected") {
      return "text-red-600 bg-red-200";
    }else{
      return "text-black-600 bg-yellow-200"
    }
  }

  const handleClick = () => {
    handleAddAppointment();
  }

  return (
    <div className="max-w-screen-xl mx-auto  px-4 md:px-8">
      <div className="flex items-start justify-evenly p-4">
        <div className="mt-3 md:mt-0">
          
          <div className="flex justify-center text-l ">
          
              {/* Doctor Names */}
                <label htmlFor="doctors" className='mb-2 p-3'>Doctor:</label>
                <select onChange={(e) => handleChange(e, "name")} name="doctors" id="doctors" className='mb-4 p-2 border rounded-md items-center justify-center'>
                <option value="John Brown">John Brown</option>
                <option value="Jim Green">Jim Green</option>
                <option value="Joe Black">Joe Black</option>
                </select>
              {/* Date Of Appointment */}
                <label htmlFor="date" className='mb-2 p-4'>Date:</label>
                <input onChange={(e) => handleChange(e, "date")} type='date' className='mb-4 px-5 py-2 border rounded-md items-center justify-center' />
              {/* Specialization */}
                <label htmlFor="doctors" className='mb-2 p-4'>Specialization:</label>
                <select onChange={(e) => handleChange(e, "specialization")} name="doctors" id="doctors" className='mb-4 p-2 border rounded-md items-center justify-center' >
                <option value="ENT">ENT</option>
                <option value="Skin">Skin</option>
                <option value="Eyes">Eyes</option>
                </select>
              {/* Phone number */}

               {/* Time Of Appointment */}
                <label htmlFor="time" className='mb-2 p-4'>Time:</label>
                <input onChange={(e) => handleChange(e, "time")} type='time'  className='mb-4 px-5 py-2 border rounded-md items-center justify-center' />
            <button
              className="ml-4 px-2 py-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 flex items-center" 
              onClick={()=>handleClick(handleAddAppointment,alert("Appointment Booked"))}
            >
              Book Appointment
            </button>
          </div>
          
        </div>
      </div>
      <div className="mt-12 overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Doctor Name</th>
              <th className="py-3 pr-6">Date</th>
              <th className="py-3 pr-6">Status</th>
              <th className="py-3 pr-6">Time</th>
              <th className="py-3 pr-6">Phone Number</th>
              <th className="py-3 pr-6">Specialization</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4">{item.name}</td>
                <td className="pr-6 py-4">{item.date}</td>
                <td className="pr-6 py-4">
                  <span className={`px-3 py-2 rounded font-semibold text-xs ${changeColor(item.status)}`}>{item.status}</span>
                </td>

                <td className="pr-6 py-4">{item.time}</td>
                <td className="pr-6 py-4">{item.phone}</td>
                <td className="pr-6 py-4">{item.specialization}</td>
                <td className="text-right"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;







// export default () => {

//   const tableItems = [
//       {
//           name: "Kritarth",
//           date: "1-10-2023",
//           status: "Active",
//           specialization: "Monthly subscription"
// ,          phonenumber: "$35.000",
//      },
//       {
//           name: "Window wrapper",
//           date: "1-11-2023",
//           status: "Active",
//           specialization: "Monthly subscription"
// ,          phonenumber: "$12.000",
//      },
//       {
//           name: "Unity loroin",
//           date: "10-10-2023",
//           status: "Archived",
//           specialization: "Annually subscription",
//           phonenumber: "$20.000"
//       },
//       {
//           name: "Background remover",
//           date: "12-10-2023",
//           status: "Active",
//           specialization: "Monthly subscription"
// ,          phonenumber: "$5.000",
//      },
//       {
//           name: "Colon tiger",
//           date: "13-10-2023",
//           status: "Active",
//           specialization: "Annually subscription",
//           phonenumber: "$9.000"
//       },
//   ]

//   return (
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//           <div className="mt-12 relative h-max overflow-auto">
//               <table className="w-full table-auto text-sm text-left">
//                   <thead className="text-gray-600 font-medium border-b">
//                       <tr>
//                           <th className="py-3 pr-6">Doctor Name</th>
//                           <th className="py-3 pr-6">Appointment Date</th>
//                           <th className="py-3 pr-6">Appointment Status</th>
//                           <th className="py-3 pr-6">Specialization</th>
//                           <th className="py-3 pr-6">Phone Number</th>
                          
//                       </tr>
//                   </thead>
//                   <tbody className="text-gray-600 divide-y">
//                       {
//                           tableItems.map((item, idx) => (
//                               <tr key={idx}>
//                                   <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
//                                   <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
//                                   <td className="pr-6 py-4 whitespace-nowrap">
//                                       <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
//                                           {item.status}
//                                       </span>
//                                   </td>
//                                   <td className="pr-6 py-4 whitespace-nowrap">{item.specialization}</td>
//                                   <td className="pr-6 py-4 whitespace-nowrap">{item.phonenumber}</td>
                                  
//                               </tr>
//                           ))
//                       }
//                   </tbody>
//               </table>
//           </div>
//       </div>
//   )
// }






