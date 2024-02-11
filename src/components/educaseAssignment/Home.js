    import React, { useEffect } from 'react'
    import { useState } from 'react'
    import './Home.css'
    import {Link} from 'react-router-dom'

    function Home() {
        const [animi,setAnimi]=useState(false)
        useEffect(()=>{
            const i=setTimeout(() => {
                setAnimi(false)
            }, 200);
        },[animi])
    return (
        <div  className='container' onClick={(e)=>setAnimi(true)}>
            <div className='inner-container'>
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipisicing elit,</p>
            <div >
                <Link to='/signup'><button className={animi?'btn1 transBtn':'btn1'}>Create Account</button></Link>
                <Link to='/login'><button className={animi?'btn2 transBtn':'btn2'}>Already Registered?Login</button></Link>
            </div>
            </div>
        </div>
    )
    }

    export default Home