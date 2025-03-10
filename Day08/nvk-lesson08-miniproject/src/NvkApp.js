import React, { Component } from 'react';
import NvkControl from './components/NvkControl';
import NvkStudentList from './components/NvkStudentList';
import NvkForm from './components/NvkForm';
import NvkStudentDetail from './components/NvkStudentDetail';

class NvkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NvkStudents: [
        { NvkID: "SV001", NvkStudentName: "Nguyễn Văn Khánh", NvkAge: 19, NvkGender: "Nam", NvkBirthday: "29/05/2005", NvkBirthPlace: "HN", NvkAddress: "Hà Nội" },
        { NvkID: "SV002", NvkStudentName: "Nguyễn Khánh Phong", NvkAge: 19, NvkGender: "Nam", NvkBirthday: "31/07/2005", NvkBirthPlace: "QN", NvkAddress: "Yên Xá" },
        { NvkID: "SV003", NvkStudentName: "Nguyễn Hữu Tuấn", NvkAge: 19, NvkGender: "Nam", NvkBirthday: "04/09/2005", NvkBirthPlace: "HD", NvkAddress: "Hải Dương" },
        { NvkID: "SV004", NvkStudentName: "Fujii Kaze", NvkAge: 30, NvkGender: "Nam", NvkBirthday: "13/01/1995", NvkBirthPlace: "HD", NvkAddress: "Nhật Bản" },
        { NvkID: "SV005", NvkStudentName: "Hoàng Thùy Linh", NvkAge: 20, NvkGender: "Nữ", NvkBirthday: "10/01/2005", NvkBirthPlace: "HCM", NvkAddress: "Hồ Chí Minh" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false,
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.NvkStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onNvkHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { NvkStudents, searchKeyword } = this.state;
    const filtered = NvkStudents.filter(student =>
      student.NvkStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onNvkHandleView = (NvkStudent) => {
    this.setState({
      selectedStudent: NvkStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onNvkHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onNvkHandleEdit = (NvkStudent) => {
    this.setState({ selectedStudent: NvkStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onNvkHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.NvkStudents.filter(student => student.NvkID !== studentID);
      return { NvkStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onNvkHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.NvkStudents.map(student =>
        student.NvkID === updatedStudent.NvkID ? updatedStudent : student
      );
      return { NvkStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onNvkHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onNvkHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      NvkStudents: [...prevState.NvkStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Nguyen Van Khanh - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NvkControl
                  onNvkHandleAddNew={this.onNvkHandleAddNew}
                  onNvkHandleSearch={this.onNvkHandleSearch}
                />
                <NvkStudentList
                  renderNvkStudents={this.state.filteredStudents}
                  onNvkHandleView={this.onNvkHandleView}
                  onNvkHandleEdit={this.onNvkHandleEdit}
                  onNvkHandleDelete={this.onNvkHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <NvkStudentDetail
                  student={this.state.selectedStudent}
                  onClose={this.onNvkHandleCloseDetail}
                />
              ) : (
                <NvkForm
                  renderNvkStudent={this.state.selectedStudent}
                  onNvkHandleUpdate={this.onNvkHandleUpdate}
                  onNvkHandleSaveNew={this.onNvkHandleSaveNew}
                  isAddingNew={this.state.isAddingNew}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NvkApp;