import React, { Component } from 'react'

class NvkClassCompEventProps1 extends Component {

    //ham xu ly su kien
    nvkEventHandleClick1 =()=>{
        alert("Hello...." +this.props.nvkRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nvkEventHandleClick1}>Button 1</button>
      </div>
    );
  }
}
export default NvkClassCompEventProps1;