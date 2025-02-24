import React, { Component } from 'react'

class NvkClassCompEventPostData extends Component {
    constructor(props){
        super(props)
    }

    //ham xu ly su kien
    nvkEventHandleClick =()=>{
        //chuyen du lieu len app thong qua props
        this.props.onNvkDatatoApp("du lieu tu component con - NvkClassCompEventPostData")
    }
  render() {
    return (
      <div className='alert alert-success' onClick={this.nvkEventHandleClick}>
        <button className='btn btn-primary'>
            Button 1 - Chuyen du lieu len app</button>
      </div>
    )
  }
}
export default  NvkClassCompEventPostData;