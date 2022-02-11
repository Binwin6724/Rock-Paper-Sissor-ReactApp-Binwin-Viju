import Game from './Game'
import Header from './Header'
import Play from './Play'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Footer from './Footer'


const Contents = () => {
    const [myChoice, setMyChoice] = useState('');
    const [score, setScore] = useState(0);

    return (
        <>
            <Header score={score} />

            <Routes>
                <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore} />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default Contents