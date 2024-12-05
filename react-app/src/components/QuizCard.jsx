import React, { useState } from "react";
import Button from "./Button";
import "./QuizCard.css"
import "../styles/base/base.css"
import "../styles/base/utilities.css"

const QuizCard = ({questions}) => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const q = questions[questionNumber];
    const length = questions.length;
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false)
    const [lock, setLock] = useState(false)


    const next = () =>{
        if (lock && questionNumber + 1 < length){
            setQuestionNumber(questionNumber+1)
            setLock(false)
        } else if(lock && questionNumber + 1 >= length){
            setResult(true)
            setLock(false)
        }
    }


    const handleAnswer = (e)=>{
        if(!lock && e.target.innerText == q.correctAnswer){
            setScore((prev)=>prev + 1)
        }
        e.target.classList.toggle(e.target.innerText == q.correctAnswer?'correct':'wrong')
        console.log(score)
        setLock(true)

    }


    return(
        <>
            {result ? <div>My score: {score}</div>: 
            <div className="flex column center card">   
                <h2>{q.id}.{q.question}</h2>
                <ul className="flex column center">
                    {q.answers.map((q, index)=>(
                        <li className="flex" key={index} onClick={handleAnswer}>
                            {q}
                        </li>
                    ))}
                </ul>

                <Button onClick={next}>{"Next"}</Button>
                <p>
                    {questionNumber + 1} / {length}
                </p>
            </div>     
            }
        </>
    )
};

export default QuizCard;