import axios from 'axios';
import React, { useState } from 'react'

function Palindrome() {

  const [inString,setInString]=useState('');
  
  const [error,SetError]=useState(null);
  const [success,SetSuccess]=useState(false);

  const handlegetpalindrome =async(e)=>{
    e.preventDefault();
    const userdata={
      inString,
    };
    try
    {
      const responce=await axios.post('http://localhost:8080/ResisterUser',userdata);
      console.log(responce.data);
      SetSuccess(true);
      SetError(null);

    }
    catch(err){
      SetError(err.message);
      SetSuccess(false);
     

    }

  }

  return (
<>
        <div className="space-y-8 ">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg"></div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Check The String is Palindrome
              </h3>
              <form onSubmit={handlegetpalindrome}>
              <div className="display">
                <input value={inString}
                onChange={(e)=>setInString(e.target.value)}
                required
                  className="text_inut_box"
                  type="text"
                  placeholder="Enter the String "
                />
                
                
              </div>
              <button type='submit' className='btn-1'>Go</button>
              {error && <h1 style={{color:'red'}}>Error:{error}</h1>}
              {success && <h1 style={{color:'green'}}>Success</h1>}
            
              </form>
           
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Palindrome
