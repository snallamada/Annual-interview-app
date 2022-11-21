import React from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Employee from './Employee'

const App = () => {
  return (

    <div>
      <Header />
      <Content />
      <center><Employee/></center>
      <Footer />
    </div>
  )
}

export default App