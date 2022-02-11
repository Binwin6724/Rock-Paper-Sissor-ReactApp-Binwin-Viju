import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../css/Play.css'
import { Link } from 'react-router-dom'
import Triangle from '../images/bg-triangle.svg'
import PaperImg from '../images/icon-paper.svg'
import SissorImg from '../images/icon-scissors.svg'
import RockImg from '../images/icon-rock.svg'



const Play = ({ setMyChoice, score }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  }


  return (
    <div className='play'>
      <Header score={score} />
      <br /><br />
      <div className='items'>
        <Link to='/game'>
          <div className="icon paper--icon">
            
            <img data-id='paper' onClick={setChoice} src={PaperImg}></img>
          </div>
        </Link>

        <Link to='/game'>
          <div className="icon sissor--icon">
          <img data-id='sissor' onClick={setChoice} src={SissorImg}></img>
          </div>
        </Link>


        <Link to='/game'>
          <div className="icon rock--icon">
          <img data-id='rock' onClick={setChoice} src={RockImg}></img>
          </div>
        </Link>

      </div>
      <br />
      <br /><br /><br />
      <Footer />
    </div>
  )
}

export default Play