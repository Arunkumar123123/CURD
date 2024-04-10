import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstBody1 from "./FirstBody1";
import FirstBody2 from "./FirstBody2";
import Header from "./Header";
import Secondcontent1 from "./Secondcontent1";
import Secondcontent2 from "./Secondcontent2";
import Secondcontent3 from "./Secondcontent3";
import Cards from "./Cards";

const Secondpage = () => {
  return (
    <div className="container mx-auto" style={{ maxWidth: "60rem" }}>
      <Header />
      <FirstBody1 />
      <FirstBody2 />
      <Cards />
      <div className="container mt-5">
        <div
          className="row row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 mx-auto"
          style={{ maxWidth: "60rem" }}  >
          <Secondcontent1 />
          <Secondcontent2 />
          <Secondcontent3 />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
