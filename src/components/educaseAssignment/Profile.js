import React from 'react'
import pic from './pic.avif'
import cam from './camera-photo.svg'

function Profile() {
  return (  
    <div className='container'>
      <div className='accSettings'>Account Settings</div>
      <div className='imageContainer'>
        <img className='image' src={pic} alt="" />
        <img className='cam' src={cam} alt="" />
        <div>
          <div className='Name'>Sunny Gante</div>
          <div className='mail'>sunnygante@gmail.com</div>
        </div>
      </div>
      <div className='text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Khueo hoeihj oiheieokl Voluptatibus officiis fuga commodi, helo jehuk elijljok blanditiis qui,sed Diam
      </div>
      <div className='dotted-line'>

      </div>
    </div>
  )
}

export default Profile