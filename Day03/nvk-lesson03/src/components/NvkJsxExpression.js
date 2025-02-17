import React from 'react'

export default function NvkJsxExpression() {
    // bien
    const name="Nguyen Van Khanh";

    const user = {
        firstName:"Khanh",
        lastName:"Nguyen"
    }
    //ham
    const sayWelcome =(name) =>{
        if(name){
            return <h3>Welcome, {name}</h3>
        }else{
            return <h3>Welcome to KhanChinTuoi - K23CNT3</h3>
        }
    }
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName;
    }

    // element
    const element = (
        <div>
            {/* bieu thuc jsx */}
           <h2> {fullName(user)}</h2>
            <hr/>
            <h3> Welcome, {name}</h3>
        </div>
    )
  return (
    <div>
        <h1>NVK - JSXExpression</h1>
        {/*su dung bien element*/}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyen Van Khanh")}
    </div>
  )
}
