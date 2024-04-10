import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    let [status,setStatus] = useState({option1:false,option2:false});
    let [container,setContainer] = useState({data:false});

    function showContent(para) {
       setStatus((pv)=>({...pv,[para]:true}));
    }
    function hideContent(para) {
        if(container.data == false){
            setTimeout(()=>{
            setStatus((pv)=>({...pv,[para]:false}))
        },2000);
        } 
        else{
            console.log('false');
            setTimeout(()=>{
                setStatus((pv)=>({...pv,[para]:true}));
                console.log('true');
            },2000);
            
        }
    }

    //* main function:

    function mainShow(params) {
        setContainer((pv)=>({...pv,[params]:true}));
    }
    function mainHide(params) {
        setTimeout(()=>{
        setContainer((pv)=>({...pv,[params]:false}));
    },1000);
        
    }

    // console.log(status);
    // console.log(container);
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="#" style={{fontSize:"10px"}}>சினிமா ஷார்ட்ஸ்</Link>
                    <button className="navbar-toggler" type="button" id="toggleButton">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    
                    <div className="collapse navbar-collapse justify-content-between" id="navbarToggleExternalContent">
                        <ul className="navbar-nav">
                            <li className="nav-item hover-effect" id="London" >
                                <Link className="nav-link text-white" to="#" onMouseEnter={()=>{showContent('option1')}}
                                    onMouseLeave={()=>{hideContent('option1')}}>சினிமா ஷார்ட்ஸ்</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option2')"
                                    onmouseleave="hideContent('option2')">செய்தி</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option3')"
                                    onmouseleave="hideContent('option3')">வீடியோக்கள்</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option4')"
                                    onmouseleave="hideContent('option4')">பட்ஜெட்</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option5')"
                                    onmouseleave="hideContent('option5')">செருத்துளி</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option6')"
                                    onmouseleave="hideContent('option6')">சினிமா</Link>
                            </li>
                            <li className="nav-item hover-effect">
                                <Link className="nav-link text-white" to="#" onmouseenter="showContent('option7')"
                                    onmouseleave="hideContent('option7')">ஜூசியம்</Link>
                            </li>
                            {/* <!-- Add more navigation links here --> */}
                        </ul>
                    </div>
                </div>
            </nav>
                {/* hover content start */}
                 {status.option1  || container.data ?
                <div className="container my-3"  onMouseEnter={()=>{mainShow('data')}} onMouseLeave={()=>{mainHide('data')}}>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth:'60rem'}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" class="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" class="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் படு அப்செட்.. சூமோட்டோ வழக்கை விசாரிப்பது யார் தெரியுமா? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" class="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" class="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                           </div>  
                </div> : <div></div>
                 }

                {/* hover content end */}
            <div id="content-section" className="container mt-3" onMouseEnter={()=>{mainShow('data')}}
                onMouseLeave={()=>{mainHide('data')}}>
               
                <div id="option1-content" className="option-content bg-white border-0">
                  
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் படு அப்செட்.. சூமோட்டோ வழக்கை விசாரிப்பது யார் தெரியுமா? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            
                         
                        </div>  
                    </div>
                   
              
                </div>
               
                <div id="option2-content" className="option-content bg-white border-0">
                  
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                  
                    
                </div>
            
                <div id="option3-content" className="option-content bg-white border-0">
                   
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>  
                    </div>
                  
                    
                </div>
                <div id="option4-content" className="option-content bg-white border-0">
                   
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                </div>
                <div id="option5-content" className="option-content bg-white border-0">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>  
                    </div>
                   
                    
                </div>
                <div id="option6-content" className="option-content bg-white border-0">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107549946/samayam-tamil-107549946.jpg?imgsize=1531031&width=400&height=300&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            
                          
                        </div>  
                    </div>
                 
                    
                </div>
                <div id="option7-content" className="option-content bg-white border-0">
                 
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 mx-auto" style={{maxWidth: "60rem"}}>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107549946/samayam-tamil-107549946.jpg?imgsize=1531031&width=400&height=300&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107522685/samayam-tamil-107522685.jpg?imgsize=36488&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">திமுக அமைச்சர்கள் ? - வெளியான அதிரடி அறிவிப்பு!                </p>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 img-hover-zoom">
                                    <img src="https://static.langimg.com/thumb/107523510/samayam-tamil-107523510.jpg?imgsize=30340&width=540&height=405&resizemode=75" className="card-img-top" alt="..."/>
                                    <div className="card-body p-2">
                                        <p className="card-text m-0">தமிழ் வழிக்கல்வி இட ஒதுக்கீடு: திருத்தம் செய்ய ராமதாஸ் வலியுறுத்தல்!</p>
                                    </div>
                                </div>
                            </div>
                            
                    
                        </div>  
                    </div>
                 
                   
                </div>
            </div>
    </div>
  )
}

export default Header
