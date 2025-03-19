import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvkReadMockApi() {
    // khởi tạo state 
    const [NvkListUser, setNvkListUser] = useState([])
    // api
    const NvkApiOnline = "https://67da2e4435c87309f52b4481.mockapi.io/k23cnt3_nguyenvankhanh/nvk_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(NvkApiOnline)
            .then((Nvk_response)=>{
                setNvkListUser(Nvk_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const NvkElementUser = NvkListUser.map((Nvk_item, index)=>{
        return(
            <tr>
                <td>{Nvk_item.NvkId}</td>
                <td>{Nvk_item.NvkFullName}</td>
                <td>{Nvk_item.NvkAge}</td>
                <td>{Nvk_item.NvkActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   NvkElementUser
                }
            </tbody>
        </table>
    </div>
  )
}