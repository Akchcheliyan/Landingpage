import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Page/Home'
import About from './Page/About'
import Projects from './Page/Project'
import Footer from './Page/Footer'
import Skills from './Page/Skil'





createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Home/>
  <About/>
  <Skills/>
<Projects/>
<Footer/>
  </StrictMode>
)