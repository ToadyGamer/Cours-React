import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './HeaderFooter/Header.tsx'
import App from './App.tsx'
import Profile from './Main/Profile.tsx'
import Footer from './HeaderFooter/Footer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <br />
    <br />
    <App />
    <br />
    <br />
    <Profile/>
    <br />
    <br />
    <Footer/>
  </React.StrictMode>,
)
