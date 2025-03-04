import React from 'react'

export default function NvkRenderArray() {

    const NvkNumbers = [10,20,30,40,50];
    const NvkElement = NvkNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {NvkElement}
    </div>
  )
}