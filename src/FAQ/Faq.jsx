import React from 'react';
// import { Data } from './Data';
// import styled from 'styled-components'
// import {IconContext} from 'react-icons'
// import {FiPlus, FiMinus} from 'react-icons/fi'

const showAnswer = () => {
  let answer = document.getElementById('answer');
  if (answer)  return;
  let div =document.createElement("div");
  let text= "This is the Answer";
}

const Faq = () => {
  return (
    <div className="faq" id='faq'>
        <h1 className="faqHeader" id="faqHeader">Faq</h1>
        <article className='question'>Is GetThreadsVideos.com free to use</article>
        <p className="answer" id="answer" onClick={showAnswer}>Yes, the Threads Video Downloader tool at GetThreadsVideos.com is completely free to use. We believe in providing a convenient and accessible solution for downloading Threads videos without any cost.</p>
    </div>
  )
}

export default Faq;
