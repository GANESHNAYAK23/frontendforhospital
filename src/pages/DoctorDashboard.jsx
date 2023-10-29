import React from "react"
import { useState } from "react";
export default () => {

    const [tableItems,setTableItems] = useState([
        {
            
            name: "Liam James",
            time: "9 am",
            phone: "+91 9652315200",
           
        },
        {
            
            name: "Olivia Emma",
            time: "10 am",
            phone: "+91 9652315520",
           
        },
        {
            
            name: "William Benjamin",
            time: "11 am",
            phone: "+91 9652315520",
            
        },
    ]);





  const deleteAppointment = (index) => {
    const updatedAppointments = [...tableItems];
    updatedAppointments.splice(index,1);
    setTableItems(updatedAppointments);
  };

 
        
     





    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-md text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Patient</th>
                            <th className="py-3 px-6">Time</th>
                            <th className="py-3 px-6">Phone</th>
                            

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-3 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-3 py-4 whitespace-nowrap">{item.time}</td>
                                    <td className="px-3 py-4 whitespace-nowrap">{item.phone}</td>
                            
                                    <td className="text-justify px-2 whitespace-nowrap">
                                        <button className="py-2 leading-none px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-green-200 rounded-lg">
                                            Accept
                                        </button>

                                        <button  onClick={() => deleteAppointment(idx)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-red-200 rounded-lg">
                                                                            Reject
                                        </button>                            
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
