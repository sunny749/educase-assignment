import React from 'react'
import {useState,useEffect} from 'react'
import InputHelper from './InputHelper'
import {Link} from 'react-router-dom'

function SignUp() {
    const [state,setState]=useState([{name:'First Name',imp:true,value:'Sunny Gante'},
    {name:'Phone number',value:'Sunny Gante',imp:true},
    {name:'Email address',value:'Sunny Gante',imp:true},
    {name:'Password',imp:true,value:'Sunny Gante'},
    {name:'Company name',imp:false,value:'Sunny Gante'}])
    const [animi,setAnimi]=useState(false)
        useEffect(()=>{
            const i=setTimeout(() => {
                setAnimi(false)
            }, 250);
        },[animi])
  return (
    <div className='container' onClick={()=>setAnimi(true)}>
        <div className='headdingSection'>
            <h2 style={{margin:0,paddingBottom:'1vh'}}>Create your</h2>
            <h2 style={{margin:0}}>PopX account</h2>
        </div>
        <InputHelper state={state}/>
       <div className='agencySection'>
        <p>Are you an Agency?<span style={{color:'red'}}>*</span></p>
        <div>
        <input style={{accentColor:'#612CE8'}} name='agency' defaultChecked type="radio"/>
        <label>Yes</label>
        <input style={{accentColor:'#612CE8'}} name='agency' type="radio"/>
        <label>No</label>
        </div>
        
        <div className='buttonSection'>
            <Link to='/profile' style={{textDecoration:'none',textAlign:'center'}} className={animi?'btn1 transBtn':'btn1'}>Create Account</Link>
        </div>
       </div>
    </div>
  )
}

export default SignUp