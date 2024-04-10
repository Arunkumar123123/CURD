import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Secondcontent2 = () => {
    
  return (
    <div>
       <div className="col mt-5 pe-5" >
            <div className="row " style={{borderBottom:"2px solid rgba(190, 185, 185, 0.838)"}}>
                <div className="d-flex justify-content-between align-item-center">
                    <h5 className="fw-bold "  >டெக்னாலஜி</h5> 
                    <p className="my-auto" style={{fontSize:"12px"}}>மேலும் படிக்க &nbsp;<i className="fa-solid fa-greater-than" style={{fontSize:"10px"}}></i></p>                 </div>
            </div>
            <div className="row  row-cols-3  row-cols-sm-3 row-cols-md-3 mt-2 row-cols-xl-3 row-cols-xxl-3 mx-auto" >
                <div className="col" >
                   {/* <p style={{fontSize:"12px",display:"inline"}}>தொழில்நுட்ப செய்திகள்</p> */}
                </div>
                <div className="col"></div>
                <div className="col" >
                    <div className="left-content">
                        {/* <i className="fa-solid fa-ellipsis ps-5 pointer" onMouseEnter="showOption(true)" onMouseLeave="showOption(false)"></i> */}
                    </div>
                </div>
            </div>
            {/* <div className="row option-content border-0" id="option1" >
                <ul className="list-group list-group-horizontal ">
                    <li className="list-group-item border-0 bg-hover" style={{fontSize:"10px"}}>இதர விளையாட்டுகள்</li>
                  </ul>
                  <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item border-0 bg-hover" style={{fontSize:"10px"}}>ஒலிம்பிக்ஸ்</li>

                  </ul>
                  <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item border-0 bg-hover" style={{fontSize:"10px"}}>வெப்ஸ்டோரி</li>

                  </ul>

            </div> */}
            <div className="row mt-3" >
                <div className="card  border-0"  >
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 g-0">
                        <div className="col-md-4 img-hover-zoom">
                            <img src="https://static.langimg.com/thumb/107540000/samayam-tamil-107540000.jpg?imgsize=86210&width=400&height=300&resizemode=75" className="img-fluid rounded" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <div className="ms-2">
                                <p className="" style={{marginTop:"-5px",fontSize:"13px"}}><Link to="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link>'இருந்தாலும், கடலமுத்து ரொம்ப ஸ்ட்ரிட்டு பா'.. ஓய்வுகேட்ட இந்திய</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link to="" className="text-decoration-none"> h1 கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'இவ்ளோ திமிரு'.. உடம்புக்கு ஆகாது ராசா.. டிராவிட் சொன்னதை செய்யாமல்.. கடுப்பேற்றும் இஷான் கிஷன்!</p>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link to="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'ஒத்த ரோசாவாக மாறிய பாகிஸ்தான் அணி'.. இப்டியா தோக்குறது? தாங்கமுடியாமல் அழுத பாக்கி. வீரர்கள்!</p>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link to="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'என்னப்பா இப்டி ஆகிடுச்சு'.. 14 கோடி வாங்கும் சிஎஸ்கே வீரருக்கு காயம்: 17ஆவது சீசனில் பங்கேற்க வாய்ப்பில்லையாம்!</p>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link to="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'என்னப்பா இப்டி ஆகிடுச்சு'.. 14 கோடி வாங்கும் சிஎஸ்கே வீரருக்கு காயம்: 17ஆவது சீசனில் பங்கேற்க வாய்ப்பில்லையாம்!</p>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link href="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'என்னப்பா இப்டி ஆகிடுச்சு'.. 14 கோடி வாங்கும் சிஎஸ்கே வீரருக்கு காயம்: 17ஆவது சீசனில் பங்கேற்க வாய்ப்பில்லையாம்!</p>
            </div> 
            <div className="row mt-2"  style={{borderBottom:"2px solid rgba(128, 128, 128, 0.788)"}}>
                <h6><Link to="" className="text-decoration-none">கிரிக்கெட் செய்திகள்</Link></h6>
                <p className="" style={{textAlign:"justify", fontSize:"13px"}}>'என்னப்பா இப்டி ஆகிடுச்சு'.. 14 கோடி வாங்கும் சிஎஸ்கே வீரருக்கு காயம்: 17ஆவது சீசனில் பங்கேற்க வாய்ப்பில்லையாம்!</p>
            </div> 

        </div>
       
    </div>
  )
}

export default Secondcontent2
