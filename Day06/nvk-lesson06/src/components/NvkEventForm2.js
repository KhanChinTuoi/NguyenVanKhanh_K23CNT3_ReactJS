import React, { Component } from 'react'

class NvkEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvkcourse:'css'
                    };
    }
    //ham xu ly su kien khi thay doi khoa hoc
    nvkHandleChange = (event) =>{
        this.setState(
            {
                nvkcourse: event.target.value
            }
        );
    }
    nvkHandleSubmit =(event)=>{
        alert('khoa hoc da chon khi submit:'+ this.state.nvkcourse);
        event.preventDefault();
    }
  render() {
    return (
    <form onSubmit={this.nvkHandleSubmit}>
        <label>
            chon khoa hoc:
            <select name='nvkcourse' id='nvkcourse' 
                    value={this.state.nvkcourse} 
                    onChange={this.nvkHandleChange}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">Javascript</option>
                <option value="reactjs">ReactJS</option>
            </select>
        </label>
        <input type="submit" value="submit" />
    </form>
    )
  }
}
export default NvkEventForm2;