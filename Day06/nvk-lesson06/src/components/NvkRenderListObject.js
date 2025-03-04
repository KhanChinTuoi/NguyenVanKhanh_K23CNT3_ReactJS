import React, { Component } from 'react';

class NvkRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkStudents :[
                {NvkId:1,NvkName:"Trịnh Văn Chung", NvkAge:46},
                {NvkId:2,NvkName:"Nguyễn Quang A", NvkAge:20},
                {NvkId:3,NvkName:"Nguyễn Quang B", NvkAge:22},
                {NvkId:4,NvkName:"Nguyễn Quang C", NvkAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {NvkStudents} = this.state;
        let NvkElement = NvkStudents.map((NvkItem)=>{
            return (
                <li>{NvkItem.NvkId} - {NvkItem.NvkName}</li>
            );
        })

        let NvkRenderElement = NvkStudents.map((NvkItem,index)=>{
            return (
                <tr key={index}>
                    <td>{NvkItem.NvkId}</td>
                    <td>{NvkItem.NvkName}</td>
                    <td>{NvkItem.NvkAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {NvkElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>NvkID</th>
                            <th>NvkName</th>
                            <th>NvkAge</th>
                            <th>NvkAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {NvkRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NvkRenderListObject;