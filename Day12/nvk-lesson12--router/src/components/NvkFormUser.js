import React, { useState } from 'react'

export default function NvkFormUser({onNvkAddNew}) {

    const [id, setid] = useState('')
    const [NvkFullname, setNvkFullname] = useState('')
    const [NvkUsername, setNvkUsername] = useState('')
    const [NvkPass, setNvkPass] = useState('')


   

    const NvkHandleSubmit    = (event)=>{
        event.preventDefault();
        console.log(id, NvkFullname, NvkUsername, NvkPass)
        onNvkAddNew({id, NvkFullname, NvkUsername, NvkPass})
    }
  return (
    <div>
        <form>
            <p>Ma sinh vien:
                <input type='text' name='id' value={id} onChange={(ev)=>setid(ev.target.value)}/> </p>
            <p>Ho ten:
                <input type='text' name='NvkFullname' value={NvkFullname} onChange={(ev)=>setNvkFullname(ev.target.value)}/> </p>
            <p>Tai khoan:
                <input type='text' name='NvkUsername' value={NvkUsername} onChange={(ev)=>setNvkUsername(ev.target.value)}/> </p>
            <p>Mat khau:
                <input type='password' name='NvkPass' value={NvkPass} onChange={(ev)=>setNvkPass(ev.target.value)}/> </p>
            <p>
                <button name='NvkSave' onClick={NvkHandleSubmit}>Luu</button>
            </p>

            
        </form>
    </div>
  )
}
