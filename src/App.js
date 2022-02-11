import './App.css';
import Play from './components/js/Play'
import Game from './components/js/Game'
import { Routes, Route } from 'react-router-dom'
import Cred from './components/js/Cred';
import React, { useState } from 'react'

function App() {

  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      
<Routes>
  <Route path='/' element={<Cred />}></Route>
  
  <Route path='/play' element={<Play setMyChoice={setMyChoice} score={score}/>}></Route>
  <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore} />}></Route>
</Routes>
    </div>
  );
}

export default App;
