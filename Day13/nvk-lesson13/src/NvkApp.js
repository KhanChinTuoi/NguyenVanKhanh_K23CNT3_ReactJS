import React from 'react'
import NvkReadApiLocal from './components/NvkReadApiLocal'
import NvkReadMockApi from './components/NvkReadMockApi'
import NvkCreateMockAPI from './components/NvkCreateMockApi'

export default function NvkApp() {
  return (
    <div className='container boerder my-3 p-3'>
        <h1>ReactJS - API - Nguyen Van Khanh</h1>
        <hr/>
        <NvkReadApiLocal/>  
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <NvkReadMockApi />
        <NvkCreateMockAPI/>
    </div>
  )
}
