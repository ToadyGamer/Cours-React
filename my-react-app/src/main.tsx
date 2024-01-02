import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import App from './App.tsx'
import Profile from './Profile.tsx'
import ModifyProfile from './ModifyProfile.tsx'
import Footer from './Footer.tsx'
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
    <ModifyProfile/>
    <br />
    <br />
    <Footer/>
  </React.StrictMode>,
)
