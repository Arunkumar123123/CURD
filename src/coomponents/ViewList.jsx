import React, { useState,useEffect } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';

export default  function ViewList() {
 let [view,setview]=useState([])
 let [d_value,setD_value]=useState()

 useEffect(() => {

  (async()=>{
    try{
    let response =   await axios.get("http://localhost:8000/getuser");
    setview(response.data);
    }catch(err){
      console.error('Error fetching users:', err);
    }
    
  })();
   
  }, []);

  
//  console.log(view)
     let bg_orange = {
        backgroundColor :'#E7521C',
        color: '#fff',
    }
async function deleteValue(para) {
  console.log(para._id);
  try{

    let res = await axios.delete(`http://localhost:8000/deleteuser/${para._id}`);
    if(res.data.type){
      alert(`${res.data.userName} deleted Successfully`);
      window. location. reload(true);
    }
     
     console.log();
  }
  catch(err){
 console.log(err);
  
}
}
console.log(view);
  return (
   <>
   <div className='p-5'>
    <div className="container d-flex justify-content-end">
        <Link to="/createUser" className="btn btn-success">create User</Link>
    </div>
     <table className="table table-hover mt-5 ">
    <thead className="rounded">
        <tr>
            <th scope="col" style={bg_orange} className="text-center"> #</th>
            <th scope="col" style={bg_orange}>User Name</th>
            <th scope="col" style={bg_orange}>Number</th>
            <th scope="col" style={bg_orange}>Email Id</th>
            {/* <th scope="col" style={bg_orange}>Address</th>
            <th scope="col" style={bg_orange}>District</th>
            <th scope="col" style={bg_orange}>State</th>
            <th scope="col" style={bg_orange}>Pincode</th> */}
            <th scope="col" style={bg_orange}>Edit</th>
            <th scope="col" style={bg_orange}>Delete</th>
        </tr>
    </thead>
    <tbody>
    {view.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                {/* <td>{user.address}</td>
                <td>{user.district}</td>
                <td>{user.state}</td>
                <td>{user.pincode}</td> */}
                <td><Link to={`/EditUser/${user._id}`} className="btn btn-primary">Edit User</Link></td>
                <td><button className="btn btn-danger" onClick={()=>{deleteValue(user)}}>Delete User</button></td>
              </tr>
            ))}
    </tbody>
     </table>
</div>

   </>
  )
}

