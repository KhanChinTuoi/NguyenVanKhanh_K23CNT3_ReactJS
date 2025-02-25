import React, { Component } from 'react'

export default class NvkEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            nvkGioitinh:'Nam'
        }
    }
    //ham xu ly su kien change
    nvkHandleChange =(event)=>{
        this.setState(
            {
                nvkGioitinh:event.target.value,
            }
        )
        
    }
    //ham xu ly su kien submit form
    nvkHandlesubmit=(event)=> {
        event.preventDefault();
        alert("Gioi tinh cua ban la:"+this.state.nvkGioitinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form Input - Radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh</label>
                <input type='radio' name='nvkGioitinh' id='nvkNam' className='mx-2'
                 value='Nam' checked={this.state.nvkGioitinh === 'Nam'}/>
                <label htmlFor=''>Nam</label>
                <input type='radio' name='nvkGioitinh' id='nvkNu' className='mx-2'
                value='Nu' checked={this.state.nvkGioitinh === 'Nu'}/>
                <label htmlFor=''>Nu</label>
                <input type='radio' name='nvkGioitinh' id='nvkKhac' className='mx-2'
                value='Khac' checked={this.state.nvkGioitinh === 'Khac'}/>
                <label htmlFor=''>Khac</label>
            </div>
            <button onClick={this.nvkHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
