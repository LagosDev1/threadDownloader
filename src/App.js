import './App.css';
import Nav from './navbar/Nav';
import Download from './downloadSection/Download';
import About from './AboutApp/About';
import Instructions from './Instruction&features/Instructions';
import Faq from './FAQ/Faq';
import HashLoader from "react-spinners/HashLoader";
import Footer from './footer/Footer';
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
    <Faq />
    <Footer />
      </>
    )}
  </div>
  );
}

export default App;
