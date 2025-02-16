import React, { Component } from 'react'

export default class NvkCompInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyen Khanh",
        };
    }

  render() {
    return (
      <div> 
        <h2>NvkCompInfo</h2>
        <p>Du lieu trong state: {this.state.name}</p>
        <h3>Hien thi du lieu tu props</h3>
        <p>Name: {this.props.nvkName}</p>
        <p>Ma SV: {this.props.nvkMasv}</p>
        <p>Ngay sinh: {this.props.nvkNgaysinh}</p>
        <p>Dien thoai: {this.props.nvkDienthoai}</p>
        <p>Lop: {this.props.nvkLop}</p>
      </div>
    )
  }
}