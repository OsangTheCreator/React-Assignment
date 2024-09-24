import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Template(props) {
  return (


    <div>
     



{/* children */}



 <Header/>
 { props.children}
 <Footer/>




    </div>
  )
}
