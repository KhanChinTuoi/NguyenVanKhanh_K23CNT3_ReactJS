import React from 'react'

export default function NvkFuncCompEventProps1(props) {
//ham xu ly su kien

    const nvkHandleButtonClick1 =()=>{
        alert("du lieu tu props:" + props.nvkRenderName);
        console.log("Xin chao:" + props.nvkRenderName);
    }
    const nvkHandleButtonClick2 =(param)=>{
       //lay du lieu tu props
       alert("du lieu tu props (Button 2 clicked):" + props.nvkRenderName);
       //du lieu tu tham so
       console.log('=========');
       console.log('Hi:',param);
       console.log('=========');
    }

  return (
    <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' onClick={nvkHandleButtonClick1}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={nvkHandleButtonClick2}>Button 2</button>
    </div>
  )
}
