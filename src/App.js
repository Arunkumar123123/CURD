// import './App.css';
// import ViewList from './coomponents/ViewList';
// import CreateUser from './coomponents/CreateUser';
// import EditUser from './coomponents/EditUser';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Demo from './Demo';
// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<ViewList />}/>
//         <Route path="/createUser" element={<CreateUser />} />
//         <Route path="/view" element={<ViewList />} />
//         <Route path="/EditUser/:userId" element={<EditUser />} />
//         {/* <Route path="blogs" element={<Blogs />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} /> */}
//         </Routes>
//     </>
   
//   );
// }

// export default App;

import React from 'react'
// import Firstpage from "./cinemashorts/Firstpage.jsx"
// import Secondpage from "./cinemashorts/Secondpage"
import Thirdpage from "./cinemashorts/Thirdpage"
const App = () => {
  return (
     <div>
      {/* <Firstpage/> */}
      {/* <Secondpage/> */}
      <Thirdpage/>
       </div>
        
  )
}

export default App
