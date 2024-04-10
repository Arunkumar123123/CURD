import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const navigate = useNavigate()
    let [data,setData] = useState({name:"",contact:"",email:"",password:""});


async function sendValue(event) {
    event.preventDefault()
    try{
        console.log(data);
        const responce = await axios.post('http://localhost:8000/user',data);
        console.log(responce.data);
        if(responce.data.status){
            navigate('/view')
        }else{
            alert('data not stored in database!')
        }
    }
    catch(err){
        console.log('error',err);
    } 
}

function assignValue(e) {
    const { name, value } = e.target;
    setData(prevState => ({
            ...prevState,
            [name]: value
        }));
}
console.log(data);
  return (
    <>
    <form  method="post" onSubmit={sendValue}  className="border border-primary mt-5 p-5 rounded-4 py-4 mx-auto" style={{ maxWidth: '600px' }}>
    <h2 style={{color: '#E7521C' }}>Create User</h2>
    <div className="row mb-3">
        <div className="col">
            <label htmlFor="name" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Enter Name</label>
            <input type="text" onChange={(e)=>{assignValue(e)}} placeholder="Enter Name"  className="form-control border border-primary input-bg" name="name" id="name" required />
        </div>
        <div className="col">
            <label htmlFor="contact" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Contact</label>
            <input type="number" onChange={(e)=>{assignValue(e)}} placeholder="Enter Mobile Number" className="input-bg form-control border border-primary" name="contact" id="contact" required />
        </div>
    </div>
    <div className="row mb-3">
        <div className="col">
            <label htmlFor="email" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Email</label>
            <input type="email" onChange={(e)=>{assignValue(e)}} placeholder="Enter Email" className="input-bg form-control border border-primary" name="email" id="email" required />
        </div>
        <div className="col">
            <label htmlFor="password" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Password</label>
            <input type="password" onChange={(e)=>{assignValue(e)}} placeholder="Enter Password" className="input-bg form-control border border-primary" name="password" id="password" required />
        </div>
    </div>
    <div className="mb-3">
        {/* <h5>Permanent Address</h5> */}
    </div>
    {/* <div className="mb-3">
        <label htmlFor="address-1" className="form-label lable">Address Line-1</label>
        <input type="text" placeholder="Enter Address 1" className="input-bg form-control border border-primary" name="address-1" id="address-1"  />
    </div> */}
    {/* <div className="mb-3">
        <label htmlFor="remark" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Address Line-2</label>
        <input type="text" placeholder="Enter Remark" className="input-bg form-control border border-primary" name="remark" id="remark" />
    </div> */}
    {/* <div className="row mb-3">
        <div className="col">
            <label htmlFor="district" className="form-label lable">District</label>
            <input type="text" placeholder="Enter District" className="input-bg form-control border border-primary" name="district" id="district"  />
        </div>
        <div className="col">
            <label htmlFor="state" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>State</label>
            <input type="text" placeholder="Enter State" className="input-bg form-control border border-primary" name="state" id="state" />
        </div>
    </div> */}
    {/* <div className="row mb-3">
        <div className="col">
            <label htmlFor="pincode" className="form-label lable" style={{ color: 'rgba(49, 140, 255, 1)' }}>Pincode</label>
            <input type="number" placeholder="Enter Pincode" className="input-bg form-control border border-primary" name="pincode" id="pincode" />
        </div>
    </div> */}
    <div className="text-center">
        <button type="submit" className="btn text-white" style={{ backgroundColor: '#E7521C' }}>Create</button>
    </div>
</form>



    </>
  )
}

export default CreateUser