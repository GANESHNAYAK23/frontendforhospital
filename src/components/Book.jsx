import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Space } from 'antd';
import { Form } from 'react-router-dom';
import { useState } from 'react';
const Book = () => {
    return (
        <>
        <Card className='rounded-md p-8'>
            <div className='flex flex-col items-center'>
              <form action=''>
                <label htmlFor="doctors" className='mb-2'>Doctors:</label>
                <select name="doctors" id="doctors" className='mb-4 p-2 border rounded-md'>
                <option value="John Brown">John Brown</option>
                <option value="Jim Green">Jim Green</option>
                <option value="Joe Black">Joe Black</option>
                </select>

                <label htmlFor="date" className='mb-2'>Date:</label>
                <input type='date' className='mb-4 px-5 py-2 border rounded-md' />

                <label htmlFor="doctors" className='mb-2'>Specialization:</label>
                <select name="doctors" id="doctors" className='mb-4 p-2 border rounded-md'>
                <option value="John Brown">ENT</option>
                <option value="Jim Green">Skin</option>
                <option value="Joe Black">Eyes</option>
                </select>


                <Button type='submit' className='rounded-md bg-slate-400 ' onClick={alert} >Book Appointment</Button>
              </form>
            </div>
            </Card>
        </>
    )
}   
                
           


export default Book

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     key:'',
//     name: '',
//     age:'',
//     specialization: '',
//     date: '',
//     status:'',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Convert form data to JSON here
//     const jsonData = JSON.stringify(formData);
//     console.log('Form Data in JSON:', jsonData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="key">Appointment number:</label>
//       <input type="numric" id="key" name="key" value={formData.key} onChange={handleInputChange} /><br/><br/>
//       <label htmlFor="name">Docname:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} /><br/><br/>
      
//       <label htmlFor="age">Age:</label>
//       <input type="age" id="age"  name="age" value={formData.age} onChange={handleInputChange} /><br/><br/>
      
//       <label htmlFor="specialization">specialization:</label>
//       <input type="specialization" id="specialization" name="specialization" value={formData.specialization} onChange={handleInputChange} /><br/><br/>
      
//       <label htmlFor="date">Date:</label>
//       <input type="date(yyyy-mm-dd)" id="date" name="date" value={formData.date} onChange={handleInputChange} /><br/><br/>
      
//       <label htmlFor="status">Status:</label>
//       <input type="status" id="status" name="status" value={formData.status} onChange={handleInputChange} /><br/><br/>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
