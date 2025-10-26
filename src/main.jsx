import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Aiassistantt from './Components/Aiassistantt.jsx'
import Loader from './Components/Loader.jsx'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Components/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Aiassistantt/>
    <Header/>
    <Menu/>
    <App />
    <Footer/>
    </BrowserRouter>


  </StrictMode>,
)
