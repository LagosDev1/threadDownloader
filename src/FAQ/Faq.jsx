import React from 'react';
import './faq.css';
import {useState} from 'react';


 

const Faq = () => {
  const [selected, setSelected] = useState(null)
  
  const toggle = (i) => {
        if (selected == i){
            return setSelected(null)
        }

        setSelected(i)
  }



  return (
    <div className="wrapper" id='wrapper'>
        <div className="accordion">

            {data.map((item, i) => (
            <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected ==i?  "-" : "+"}</span>
                </div>
                <div className={selected ==i?  "content show" : "content"}>{item.answer}</div>
              </div>

            ))}
        </div>
    </div>
  )
}

 const data = [
  {
      question: " Is GetThreadsVideos.com free to use?",
      answer: "Yes, the Threads Video Downloader tool at GetThreadsVideos.com is completely free to use. We believe in providing a convenient and accessible solution for downloading Threads videos without any cost."
  },

  {
      question: "Can I download Threads videos from private accounts using this tool?",
      answer: "No, our Threads Video Downloader tool can only download videos from public Instagram Threads accounts. Private accounts have restricted access, and we respect the privacy settings set by the users."
  },

  {
      question: "Is it legal to download Threads videos using this tool?",
      answer: "Downloading Threads videos for personal use is generally considered acceptable under fair use policies. However, it's important to respect the copyrights of the content you download and use the videos responsibly. GetThreadsVideos.com does not endorse or encourage the unauthorized distribution or use of copyrighted material."
  },

  {
      question: " Can I download Threads videos on mobile devices using this tool?",
      answer: "Yes, you can use GetThreadsVideos.com on your mobile devices, including smartphones and tablets, to download Threads videos. Our website is designed to be compatible with various devices and operating systems, providing a seamless experience across different platforms."
  },

  {
      question: " Are there any limitations on the number of Threads videos I can download using this tool?",
      answer: "No, there are no specific limitations on the number of Threads videos you can download using our tool. You can use GetThreadsVideos.com to download as many videos as you like, depending on your needs and preferences."
  },

  {
      question: "  How long does it take to process and download a Threads video? ",
      answer: "The processing and download time for Threads videos may vary depending on factors such as video length, internet connection speed, and server load. In most cases, our tool processes and downloads videos quickly, allowing you to access them within a few seconds or minutes."
  },
]


export default Faq;
