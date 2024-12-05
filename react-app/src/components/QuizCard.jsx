import React, { useState } from "react";
import Button from "./Button";

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
        if(!lock && e.target.innerText.slice(2) == q.correctAnswer){
            setScore((prev)=>prev + 1)
        }
        console.log(score)
        setLock(true)
    }


    return(
        <>
            {result ? <div>My score: {score}</div>: 
            <>   
                <h1>{q.id}.{q.question}</h1>
                <ul>
                    {q.answers.map((q, index)=>(
                        <li key={index} onClick={handleAnswer}>
                            {(index+1) + " " + q}
                        </li>
                    ))}
                </ul>

                <Button onClick={next}>{"Next"}</Button>
                <p>
                    {questionNumber + 1} / {length}
                </p>
            </>     
            }
        </>
    )
};

export default QuizCard;