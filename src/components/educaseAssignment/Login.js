import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import InputHelper from './InputHelper'
import {Link} from 'react-router-dom'

function Login() {
  const [animi,setAnimi]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setAnimi(false)
    },200)
  },[animi])
  const [state,setState]=useState([{name:'Email address',imp:false,placeholder:'Enter email address'},{name:'password',imp:false,placeholder:'Enter password'}])
  return (
    <div className='container' onClick={()=>setAnimi(true)}>
      <div className='headdingSection'>
            <h2 style={{margin:0,paddingBottom:'1vh'}}>Signin to your</h2>
            <h2 style={{margin:0,paddingBottom:'1.4vh'}}>PopX account</h2>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipisicing elit,</p>
        </div>
        <InputHelper state={state}/>
        <div >
          <Link to='/profile'><button className={animi?'loginBtn transBtn':'loginBtn'}>Login</button></Link>
        </div>
    </div>
  )
}

export default Login