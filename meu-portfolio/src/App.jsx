import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import "./App.css";

const App = () => {
  return (
    <div className='body'>
    <div className='bg-custom-light'>
      <Header> </Header>
      <Home></Home>
      </div>
      <About></About>
   </div>
  )
}

export default App
