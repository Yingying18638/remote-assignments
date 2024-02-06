import './App.css';
import React,{useState,memo} from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Fixed from './components/Fixed';
function App() {
  const [isVisible, setIsVisible]=useState(false)
  const handleSetIsVisible=()=>{
    setIsVisible( (prev)=> !prev  )
    // console.log(isVisible)
  }

  return (
    <>
    <Header
      setMenu={handleSetIsVisible}
    />   
    <Section/>
    <Fixed
      isMenuTriggered={isVisible}
    />
    </>
  );
}

export default memo(App);
