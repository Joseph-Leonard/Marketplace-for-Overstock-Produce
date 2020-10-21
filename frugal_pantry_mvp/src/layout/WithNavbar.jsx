import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const WithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default WithNavbar
