import React, { Component } from "react";
import NvkControl from "./components/NvkControl";
import NvkStudentList from "./components/NvkStudentList";
import NvkForm from "./components/NvkForm";

class NvkApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NvkStudents:[
        {NvkId:"SV001",NvkStudentName:"Nguyễn Văn Khánh",NvkAge:19,NvkGender:"Nam",NvkBirthday:"25/05/1979",NvkBirthPlace:"HN", NvkAddress:"28 Đại Linh"},
        {NvkId:"SV002",NvkStudentName:"Nguyễn Khánh Phong",NvkAge:19,NvkGender:"Nữ",NvkBirthday:"25/05/1179",NvkBirthPlace:"HP", NvkAddress:"Trung quốc"},
        {NvkId:"SV003",NvkStudentName:"Fujii Kaze",NvkAge:30,NvkGender:"Nam",NvkBirthday:"25/05/1994",NvkBirthPlace:"TpHCM", NvkAddress:"Nhật Bản"},
        {NvkId:"SV004",NvkStudentName:"Hoàng Thùy Linh",NvkAge:55,NvkGender:"Nam",NvkBirthday:"25/05/1999",NvkBirthPlace:"TpHCM", NvkAddress:"Hồ chí minh"},
      ],
      NvkStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  NvkHandleView = (NvkStudent)=>{
    this.setState({
      NvkStudent:NvkStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.NvkStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyễn Văn Khánh - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NvkControl  />
                {/* danh sách sinh vien  */}
                <NvkStudentList  renderNvkStudents={this.state.NvkStudents} onNvkHandleView={this.NvkHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NvkForm  renderNvkStudent = {this.state.NvkStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NvkApp;