import React, { useState } from 'react';
import axios from 'axios';

const ImageUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle the image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Handle image upload to the backend
  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    // Create a form data object to send the file
    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      setUploadStatus('Uploading...');
      
      // Send the image to the server using axios
      const response = await axios.post('http://localhost:8080/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus('Upload successful');
      console.log('Image uploaded:', response.data);
    } catch (error) {
      setUploadStatus('Upload failed');
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUp;
