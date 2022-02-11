import React, { useEffect } from 'react'
import '../css/Header.css'

const Header = ({ score }) => {

  return (
    <div className='header'>
      <h2 className='Heading_head'>Rock. Paper. Sissor.</h2>
      <h1 className='score_box'>Score: {score}</h1>

    </div>
  )
}

export default Header