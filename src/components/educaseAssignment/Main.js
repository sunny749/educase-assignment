import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import SignUp from './SignUp'

function Main() {
  return (
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                </Routes>
    </BrowserRouter>
  )
}

export default Main