import React, { useState } from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import NvkNavNar from './components/NvkNavNar'
import NvkHome from './components/NvkHome'
import NvkAbout from './components/NvkAbout'
import NvkContact from './components/NvkContact'
import NvkListUser from './components/NvkListUser'
import NvkFormUser from './components/NvkFormUser'
import './App.css';

export default function NvkApp() {

  const listUsers =   [
    {id:"SV001", NvkFullname:"Nguyen Van Khanh", NvkUsername:"KhanChinTuoi", NvkPass:"vjpvjp"},
    {id:"SV002", NvkFullname:"Nguyen Van Khan", NvkUsername:"Khan9Tuoi", NvkPass:"vjpvjp1"},
    {id:"SV003", NvkFullname:"Nguyen Van Kha", NvkUsername:"KhanNineTuoi", NvkPass:"vjpvjp2"}
  ]


  const[NvkUsers, setNvkUsers] = useState(listUsers)

  //Ham xu ly su kien them moi
  const NvkHandleAdd = (NvkParam)=>{
    console.log("NvkHandleAdd:", NvkParam)

    setNvkUsers(prev =>{ return [
      ...prev,
      NvkParam
    ]

      
    })
  }
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - Nguyen Van Khanh - K23CNT3</h1>
      <hr/>
      <Router>
        <NvkNavNar/>
        <Routes>
          <Route path='/' element = {<NvkHome/>}/>
          <Route path='/about' element = {<NvkAbout/>}/>
          <Route path='/contact' element = {<NvkContact/>}/>
          <Route path='/list-user' element = {<NvkListUser renderNvkUsers={NvkUsers}/>}/>
          <Route path='/create-user' element = {<NvkFormUser onNvkAddNew={NvkHandleAdd}/>}/>
        </Routes>
      </Router>
    </div>
  )
}
