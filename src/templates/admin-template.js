import React from 'react'
import Footer from '../components/user/common/footer/footer'
import Header from '../components/user/common/header/header'

const AdminTemplate = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default AdminTemplate