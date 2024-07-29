import React from 'react'
// import Navbar from '../navbar/Navbar'
// import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
     

      <div className="content min-h-screen">
        {children}
      </div>

      
    </div>
  )
}

export default Layout