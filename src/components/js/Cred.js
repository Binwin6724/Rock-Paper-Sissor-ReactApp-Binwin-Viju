import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cred.css'
function Cred() {
  return (
    <body className='body'>
            <Link className="cta" to='/play'>
  <span>Let's Play</span>
  <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg></Link>
        
        </body>
  )
}

export default Cred 