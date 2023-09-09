import React from 'react';
import './instructions.css';
import {AiOutlineCheck} from 'react-icons/ai'


const Instructions = () => {
  return (
    <section id='services'>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Our Features</h3>
          </div>
          <ul className="service__list">
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Easy-to-use Interface</p>
             </li>  
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Fast and Efficient Downloads</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>High-quality Video Downloads</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Compatibility.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Free and secure</p>
             </li> 
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
          <h3>How To Download Threads</h3>
          </div>
          <ul className="service__list">
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 1: Open the Instagram Threads app on your device and locate the video you want to download.</p>
             </li>  
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 2: Copy the “LINK” of the video.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 3: Visit GetThreadsVideos.com, your go-to destination for Threads video downloads.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 4: Paste the copied “LINK” into the designated field on our website.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 5: Click the "Download" button to initiate the video processing.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 6: Once the video is processed, click the "Download" button again to start the download.</p>
             </li> 
             <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Step 7: Enjoy!</p>
             </li> 
           
           
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Instructions;
