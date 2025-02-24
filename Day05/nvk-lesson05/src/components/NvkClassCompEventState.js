import React, { Component } from 'react'

class NvkClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkFullname:"Nguyen Van Khanh",
            nvkAge:19,
        }
    }

    //ham xu ly su kien
    nvkeventHandleClick1 =()=>{
        //lay du lieu trong state
        alert("Fullname:" + this.state.nvkFullname + "\n Age:" + this.state.nvkAge);
    }

  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={this.nvkeventHandleClick1}>Button 1 - Du lieu trong state</button>
      </div>
    )
  }
}
export default NvkClassCompEventState;
