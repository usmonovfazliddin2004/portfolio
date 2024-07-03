import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Case from './components/case.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Recent from './components/recent.jsx'
import Testimonals from './components/testimonals.jsx'
import Footerunderline from './components/footerunderline.jsx'
function App() {

  return (
    <>
      <Header/>
      <Case/>
      <Testimonals/>
      <Recent/>
      <Footer/>
      <Footerunderline/>
    </>
  )
}

export default App
