import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Score from './Score';
import './Quiz.css';


const Quiz = () => {

    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;

        if (quiz[number].answer === userAnswer) setPts(pts + 1);
        setNumber(number + 1);
    }

    useEffect(() => {

        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(res => {
                setQuiz(res.data.results.map(item => (

                    {
                        question: item.question,
                        options: shuffle([...item.incorrect_answers, item.correct_answer]),
                        answer: item.correct_answer
                    }

                )));
            })
            .catch(err => console.error(err))

    }, []);


    return (
        <center>
        <div className='QuizWindow'>
            { quiz[number] &&

                <>
                    <div className='Question'  dangerouslySetInnerHTML={{ __html: quiz[number].question }}></div>

                    <div className='Options'>
                        {quiz[number].options.map((item, index) => (
                            <div className='Option'  key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></div>
                        ))}
                    </div>
                </>

            }
            {
                number === 10 && <Score pts={pts} />
            }
        </div>
        </center>
    )
}

export default Quiz
