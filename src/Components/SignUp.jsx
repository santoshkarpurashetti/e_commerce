import React, { useState } from 'react'
import axios from 'axios';
import '../CssComponents/Navbar.css'

const SignUp =()=> {

    const [name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact,setContact]=useState('');
    const [password,setPassword]=useState('');
    const [con_password,setCon_Password]=useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const userData = {
            name,
            last_name,
            email,
            contact,
            password,
            con_password,
        };

        try {
            const response = await axios.post('http://localhost:8080/ResisterUser', userData); // Your backend URL
            console.log(response.data);
            setSuccess(true);
            
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };

  return (
    <div className='web_body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="signup max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow" >
      <form onSubmit={handleRegister} className='form_signup max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <title>SignUp</title>
        <h2 className=' text-3xl font-bold text-gray-900 mb-12 text-center' >SignUp Here</h2>
        <ul>
          <li >Enter Fisrt Name</li>
          <input   value={name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required type="text" className=' text_inut_box'/>
          <li>Enter Last Name</li>
          <input  value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        required type="text" className='text_inut_box'/>
          <li>Contact Number</li>
          <input   value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required type="text" className='text_inut_box'/>
          <li>Email</li>
          <input  value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required type="text" className='text_inut_box'/>
          <li>Password</li>
          <input  value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required type="text" className='text_inut_box' />
          <li>Confirm Password</li>
          <input  value={con_password}
                        onChange={(e) => setCon_Password(e.target.value)}
                        required type="text" className='text_inut_box'/>
        </ul>
        <button type='submit' className='btn1'>Submit</button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {success && <p style={{ color: 'green' }}>Registration successful!</p>}
      </form>
     
      </div>
    
    </div>
  )
}


export default SignUp;
