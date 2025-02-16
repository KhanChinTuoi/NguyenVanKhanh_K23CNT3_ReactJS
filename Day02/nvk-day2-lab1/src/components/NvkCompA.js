import React, { Component } from 'react'

export default class NvkCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyen Khanh",
        };
    }

  render() {
    return (
      <div> 
        <h2>NvkCompA</h2>
        <p>Du lieu trong state: {this.state.name}</p>
        <h3>Hien thi du lieu tu props</h3>
        <p>Name: {this.props.nvkName}</p>
        <p>Address: {this.props.nvkAddress}</p>
      </div>
    )
  }
}
