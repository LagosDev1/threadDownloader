import React from 'react';
import './download.css';
import { useState } from 'react'; 
import axios from 'axios';
import {ImArrowRight} from 'react-icons/im';



const Download = () => {
  const [url, setUrl] = useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired action with the URL, such as making an API request
    console.log('Submitted URL:', url);
    handleVideoDownload();
    // Clear the input field after submission
    setUrl('');
  };
  const handleVideoDownload = async () => {
    try {
      const response = await axios.get(url, { responseType: 'blob' });
  
      if (response.status === 200) {
        // Determine the video's file extension based on response content type
        const contentType = response.headers['content-type'];
        const fileExtension = contentType.split('/')[1];
  
        // Create a Blob from the response data
        const blob = new Blob([response.data], { type: contentType });
  
        // Create a download link and trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `downloaded_video.${fileExtension}`;
        downloadLink.click();
      }
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div className='downloadSection'>
      <h1>Download Videos from Threads</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste URL here"
            value={url}
            onChange={handleChange}
          />
          <button type="submit" className='submit_text'>Start<ImArrowRight /></button>
        </div>
        <p>
        By using our service you are to accept our{" "}
        <span>
          <a href="/terms-of-use" target='__blank'>Terms of Use.</a>
        </span>
      </p>
      </form>
    </div>
    
  )
}

export default Download;
