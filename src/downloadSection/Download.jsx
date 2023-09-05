import React from 'react';
import './download.css';
import { useState } from 'react'; 
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
    // handleVideoDownload();
    // Clear the input field after submission
    setUrl('');
  };
 

 

  return (
    <div className='downloadSection'>
      <h1>Download Your Videos from Threads</h1>
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
        By using our services you are to accept our{" "}
        <span>
          <a href="/terms-of-use" target='__blank'>Terms of Use.</a>
        </span>
      </p>
      </form>
    </div>
    
  )
}

export default Download;
