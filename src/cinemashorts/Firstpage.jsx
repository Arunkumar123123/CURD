import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstBody1 from "./FirstBody1"; 
import FirstBody2 from "./FirstBody2";
import Firstbody3 from "./Firstbody3";
function Navbar() {
  return (
    <div>
      <FirstBody1 />
      <div className="container mx-auto" style={{ maxWidth: "60rem" }}>
        <FirstBody2 />
        <Firstbody3 />
      </div>
    </div>
  );
}

export default Navbar;
