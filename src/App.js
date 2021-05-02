import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MainComponent1 from './components/MainComponent1'
import MainComponent2 from './components/MainComponent2'
import MainComponent3 from './components/MainComponent3'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <MainComponent1/>
      <MainComponent2/>
      <MainComponent3/>
      <Footer/>
    </div>
  )
}

export default App
