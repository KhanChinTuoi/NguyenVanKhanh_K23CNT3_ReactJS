import React from 'react'

export default function NvkListUser({renderNvkUsers}) {



    const NvkElements = renderNvkUsers.map((NvkItem, index)=>{
        return ( 
                <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{NvkItem.id}</td>
                        <td>{NvkItem.NvkFullname}</td>
                        <td>{NvkItem.NvkUsername}</td>
                        <td>{NvkItem.NvkPass}</td>
                    </tr>
                </>)
    } ) 
  return (
    <div>
        <h2>Danh sach tai khoan</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID:</th>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {NvkElements}
            </tbody>
        </table>
    </div>
  )
}
