import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function EditUser() {
    const { userId } = useParams();
    let [editData,setEditData] = useState({name:'',contact:'',email:'',password:''});

    useEffect(()=>{
        (async()=>{
            try{
                let response = await axios.post(`http://localhost:8000/getData/${userId}`);
                setEditData(response.data);
            }
            catch(err){
                console.error('Error fetching users:', err);
            }
     
        })();
    },[]);

    //* update User:
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
     

      const updateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8000/updateuser/${userId}`, editData);
            console.log(res.data);
            if (res.data.status) {
                alert(res.data.msg);
                window.location.href = '/';
            }
        } catch (err) {
            console.log('Update Error', err);
        }
    };
    console.log(editData);
  return (
   <>
   <form action="" onSubmit={updateUser} method="post" className="border border-primary mt-5 p-5 rounded-4 py-4 mx-auto" style={{ maxWidth: '600px' }}>
    <h2 style={{color: '#E7521C' }}>Edit User</h2>
    <div className="row mb-3">
        <div className="col">
            <label htmlFor="name" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Enter Name</label>
            <input type="text" value={editData.name} onChange={handleChange}  placeholder="Enter Name" className="form-control border border-primary input-bg"  name="name" id="name" required />
        </div>
        <div className="col">
            <label htmlFor="contact" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Contact</label>
            <input type="number" value={editData.contact} onChange={handleChange} placeholder="Enter Mobile Number" className="input-bg form-control border border-primary" name="contact" id="contact" required />
        </div>
    </div>
    <div className="row mb-3">
        <div className="col">
            <label htmlFor="email" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Email</label>
            <input type="email" value={editData.email} onChange={handleChange} placeholder="Enter Email" className="input-bg form-control border border-primary" name="email" id="email" required />
        </div>
        <div className="col">
            <label htmlFor="password" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Password</label>
            <input type="password" value={editData.password} onChange={handleChange} placeholder="Enter Password" className="input-bg form-control border border-primary" name="password" id="password" required />
        </div>
    </div>
    <div className="text-center">
        <button type="submit" className="btn text-white" style={{ backgroundColor: '#E7521C' }}>Update</button>
    </div>
</form>
</>
  )
}

export default EditUser