import './App.css';
import Nav from './navbar/Nav';
import Download from './downloadSection/Download';
import About from './AboutApp/About';
import Instructions from './Instruction&features/Instructions';
import Faq from './FAQ/Faq';
import HashLoader from "react-spinners/HashLoader";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [loading, setLoading]= useState(false);
  const [ active, setActive] =useState("Titles")
  useEffect(()=>{
    setLoading(true)
    setTimeout (()=>{
      setLoading(false)
    }, 4000)

  }, [])
  return (
    <div>
    {loading ? (
       <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'black',
          width:'100%',
          height: '100vh',
        }}
      >
      
     <HashLoader
      color={"#12f7ff"}
      loading={loading}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
    ) : (
      <>
    <Nav />
    <Download />
    <About />
    <Instructions />
    <Faq title="Is GetThreadsVideos.com free to use?"/>
    <Faq title=" Can I download Threads videos from private accounts using this tool?"/>
    <Faq title=" Is it legal to download Threads videos using this tool?"/>
    <Faq title="Can I download Threads videos on mobile devices using this tool?"/>
    <Faq title="Are there any limitations on the number of Threads videos I can download using this tool?"/>
    <Faq title="How long does it take to process and download a Threads video?"/>
      </>
    )}
  </div>
  );
}

export default App;
