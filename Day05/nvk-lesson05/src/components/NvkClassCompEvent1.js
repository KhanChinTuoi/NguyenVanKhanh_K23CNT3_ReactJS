import React, { Component } from 'react'

export default class NvkClassCompEvent1 extends Component {
    //ham xu ly su kien
    nvkEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }
    nvkEventHandleClick2 = (name)=>{
        alert("Button 2 clicked;name:" + name);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.nvkEventHandleClick1}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={()=>this.nvkEventHandleClick2("Nguyen Khanh")}>Button 2</button>
      </div>
    )
  }
}
