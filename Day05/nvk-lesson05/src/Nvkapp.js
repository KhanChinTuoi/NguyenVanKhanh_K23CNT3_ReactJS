import React, { Component } from 'react'
import NvkFuncEvent1 from './components/NvkFuncCompEvent1';
import NvkClassCompEvent1 from './components/NvkClassCompEvent1';
import NvkFuncCompEventProps1 from './components/NvkFuncCompEventProps1';
import NvkClassCompEventProps1 from './components/NvkClassCompEventProps1';
import NvkClassCompEventState from './components/NvkClassCompEventState';
import NvkClassCompEventPostData from './components/NvkClassCompEventPostData';

class Nvkapp extends Component {
  constructor(props){
    super(props);
    this.state ={
      nvkNoidung:"chua co j",
    }
  }
  //ham xu ly su kien khi components con chuyen du lieu len
  nvkHandleDatatoApp =(content)=>{
    alert(content);
    this.setState({
      nvkNoidung:content,
    })
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'> K23CNT3 - Nguyen Van Khanh - Event and Form</h1>
        <hr/>
        <div>
         <NvkFuncEvent1/>
        </div>
          <h2>Function Component - Event</h2>
          <hr/>
          <div>
            <h2>Class Component - Event</h2>
            <NvkClassCompEvent1/>
          </div>
          <hr/>
          <div>
            <h2>Function Component - Event; Props</h2>

            <NvkFuncCompEventProps1 nvkRenderName="Nguyen Van Khanh"/>
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event; Props</h2>

            <NvkClassCompEventProps1 nvkRenderTitle="Welcome to Troltrol"/>
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event; State</h2>

            <NvkClassCompEventState />
          </div>
          <div>
            <h1>{this.state.nvkNoidung}</h1>
            <h2>Class Component - Event; Post Data to App</h2>

            <NvkClassCompEventPostData onNvkDatatoApp={this.nvkHandleDatatoApp}/>
          </div>
      </div>      
    );
  }
}

export default Nvkapp;