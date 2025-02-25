import React, { Component } from 'react'

export default class NvkEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkStudentName:'nguyen khanh'
        }
    }
    //ham xu ly su kien tren textbox thay doi
    nvkHandleChange =(event)=>{
        //cap nhat lai state
        this.setState({
            nvkStudentName:event.target.value,
        })
    }
    // khi submit form, lay du lieu va hien thi
    nvkHandleSubmit =(ev)=>{
        alert('xin chao:' + this.state.nvkStudentName);
        ev.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.nvkHandleSubmit}>
            <label htmlFor='nvkStudentName'>
                <input type='text' name='nvkStudentName' id='nvkStudentName'
                value={this.state.nvkStudentName}
                onChange={this.nvkHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click Here</button>
        </form>
      </div>
    )
  }
}
