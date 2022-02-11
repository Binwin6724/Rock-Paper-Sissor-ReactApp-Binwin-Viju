import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../css/Game.css'
import { Link } from 'react-router-dom'

import PaperImg from '../images/icon-paper.svg'
import SissorImg from '../images/icon-scissors.svg'
import RockImg from '../images/icon-rock.svg'

function Game({
  score, myChoice, setScore
}) {

  const [house, setHouse] = useState('')
  const [playerWin, setPlayerWin] = useState('')

  const newHousePick = () => {
    const choices = ["rock", "paper", "sissor"];
    setHouse(choices[Math.floor(Math.random() * 3)])
  }
  useEffect(() => {
    newHousePick();
  }, [])


  const Result = () => {
    if (myChoice === "rock" && house === "sissor") {
      setPlayerWin("win")
      setScore(score + 1)
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else if (myChoice === "sissor" && house === "rock") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else if (myChoice === "sissor" && house === "paper") {
      setPlayerWin("win")
      setScore(score + 1)
    } else if (myChoice === "paper" && house === "sissor") {
      setPlayerWin("lose")
      setScore(score - 1)
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win")
      setScore(score + 1)
    } else {
      setPlayerWin("draw")
    }
  }

  useEffect(() => {
    Result();
  }, [house])

  const btnPress = () => {
    window.location.reload();
  }






  return (
    <div className='game'>
      <Header score={score} />
      <br /><br />
      <div className='chooice'>
        <div className='my_choice'>
          {myChoice == "paper" && <img src={PaperImg}></img>}
          {myChoice == "sissor" && <img src={SissorImg}></img>}
          {myChoice == "rock" && <img src={RockImg}></img>}
        </div>

        <div className='house_choice'>
          {house == "paper" && <img src={PaperImg}></img>}
          {house == "sissor" && <img src={SissorImg}></img>}
          {house == "rock" && <img src={RockImg}></img>}
        </div>

      </div>

      <br />

      Result:
      {playerWin == "win" && <h2>You win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}

      <Link to='/play'><button className='btn_again'>Again</button></Link>
      <br />
      <button className='btn_restart' onClick={btnPress}><Link to='/play' className='link_restart'>Restart</Link></button>
      <Footer />

    </div >
  )
}

export default Game