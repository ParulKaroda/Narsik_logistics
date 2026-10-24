import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsappIcon from '../WhatsappIcon'
export default function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
      <WhatsappIcon/>
    </div>
  )
}
