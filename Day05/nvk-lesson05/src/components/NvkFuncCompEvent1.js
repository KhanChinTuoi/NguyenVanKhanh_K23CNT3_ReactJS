import React from 'react'

export default function NvkFuncCompEvent1() {

    //ham xu ly su kien
    const nvkEventButton1Click = ()=>{
        alert("Button 1 -Clicked");
    };
    const nvkEventButton2Click = ()=>{
        alert("Button 2 -Clicked");
    };
    const nvkEventButton3Click = (name)=>{
        alert("Name:"+ name);
    };
    
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={nvkEventButton1Click}>Button 1</button> */}
        <button className='btn btn-primary mx-1' onClick={nvkEventButton2Click}>Button 2</button>
        {/* <button className='btn btn-success' onClick={nvkEventButton3Click("Nguyen Khanh")}>Button 3</button> */}
        <button className='btn btn-success' onClick={()=>nvkEventButton3Click("Nguyen Khanh vjp")}>Button 4</button>
        {/* <button className='btn btn-success' onClick={(param)=>nvkEventButton3Click(param)}>Button 5</button> */}
    </div>
  );
}
