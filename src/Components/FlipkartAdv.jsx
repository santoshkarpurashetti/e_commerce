import React, { useState } from 'react';
import axios from 'axios';


const FlipkartAdv = () =>  {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/getUser'); // Your backend URL
            setUsers(response.data);
            console.log(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };


  return (
    
<>
    <div className="flexbox">
        <h3 className='clr_white'>Flipkart</h3>
        <div className="flipakart"></div>

       
    </div>
</>
  )
}

export default FlipkartAdv
