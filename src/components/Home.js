import React from 'react'
import './Home.css';

const Home = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <center>
        <div className='Intro' >
        <div className='Text' >
            <h1>GENERAL KNOWLEDGE</h1>
            <h1>QUIZ</h1>
            <button  onClick={startQuiz}>Start</button>
        </div>
        </div>
        </center>
    )
}

export default Home
