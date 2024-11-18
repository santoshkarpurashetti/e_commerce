import React, { useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
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
        <div>
            <button onClick={fetchUsers}>Get User Details</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul className='just_once'>
                {users.map(user => (
                    <li key={user.id}><div className="temp1">{user.id} <div className="temp"> {user.name} </div> <div className="temp">{user.last_name}</div> <div className="temp">{user.contact} </div> <div className="temp">{user.email}</div> <div className="temp">{user.password}</div></div></li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;
