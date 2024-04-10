import React, { useState } from 'react'

function Demo() {
    let [data,setData] = useState(['one','two','three']);

function callFun(ele) {
    console.log(ele);
}

  return (
    <>
    {
    data.map((ele) =>{
        return(
            <button id={ele}  onClick={()=>{callFun(ele)}}>Demo</button>
            <button id={ele}  onClick={()=>{callFun(ele)}}>Demo</button>

        )
    })}
    </>
  )
}

export default Demo
