import React, { useState } from 'react'
import axios from 'axios';


const AddAdvertiser =()=> {

    const [p_name, setp_name] = useState('');
    const [p_description, setp_descrition] = useState('');
    const [p_price, setp_price] = useState('');
    const [p_brand_name,setp_brand_name]=useState('');
    const [p_platform,setp_platform]=useState('');
    const [p_link,setp_link]=useState('');
    const [p_image,setp_image]=useState();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);  


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setp_image(file);
        }
    };


    const handleAddProduct = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData();
        formData.append('image', p_image);

        const userData = {
            p_name,
            p_description,
            p_price,
            p_brand_name,
            p_platform,
            p_link,
          

        };

        try {
            const response = await axios.post('http://localhost:8080/AddAdvertiserProduct', userData); // Your backend URL
            console.log(response.data);
            setSuccess(true);
            
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
            setSuccess(false);
        }
    };



  return (
<>
<div className='web_body'>
<div className="Description">

    <form className='form_add' onSubmit={handleAddProduct}>
        <ul>
            <li>Product Name</li>
            <input  value={p_name}
                        onChange={(e) => setp_name(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Product Description</li>
            <input  value={p_description}
                        onChange={(e) => setp_descrition(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Product Price</li>
            <input  value={p_price}
                        onChange={(e) => setp_price(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Brand Name</li>
            <input  value={p_brand_name}
                        onChange={(e) => setp_brand_name(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Platform</li>
            <input  value={p_platform}
                        onChange={(e) => setp_platform(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Product Link</li>
            <input  value={p_link}
                        onChange={(e) => setp_link(e.target.value)}
                        required type="text" className='text_inut_box'/>
            <li>Add Image</li>
            <input type="file" id="image" name="image" accept="image/*" required  value={p_image}
                        onChange={(e) => handleFileChange}></input>
                       
                

        </ul>
        <button className='btn-2'>Submit</button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {success && <p style={{ color: 'green' }}>Product Added successful!</p>}

    </form>
    </div>
    </div>
</>
  )
}

export default AddAdvertiser
