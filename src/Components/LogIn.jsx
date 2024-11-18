import React from 'react'
import UserDetails from './UserDetails'

function LogIn() {
  return (
    <div className="web_body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'">
      <div className="signup max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
        
      <form className='form_signup max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <title>LogIn</title>
        <h2 className=' text-3xl font-bold text-gray-900 mb-12 text-center' >LogIn Here</h2>
        <ul>
          <li>Email</li>
          <input type="text" className='text_inut_box' required/>
          <li>Password</li>
          <input type="text" className='text_inut_box' required/>
      
        </ul>
        
        <button className='btn1'>Submit</button>
        <ul>
          <li>Forgot Password</li>
        </ul>
      </form>
      <UserDetails/>
      </div>
     
      </div>
       
      
  
  )
}

export default LogIn
