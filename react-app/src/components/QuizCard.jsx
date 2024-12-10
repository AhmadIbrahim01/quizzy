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

    const next = () => {
        if (lock && questionNumber + 1 < length) {
            setQuestionNumber(questionNumber + 1);
            setLock(false);
            

            const answerElements = document.querySelectorAll('.flex');
            answerElements.forEach((element) => {
                element.classList.remove('correct', 'wrong');
            });
        } else if (lock && questionNumber + 1 >= length) {
            setResult(true);
            setLock(false);
            
        }
    }

    const handleAnswer = (e) => {
        if (!lock) {
            const selectedAnswer = e.target;
            const isCorrect = selectedAnswer.innerText === q.correctAnswer;

            if (isCorrect) {
                setScore((prev) => prev + 1);
            }

            if (!isCorrect) {
                selectedAnswer.classList.add('wrong');
            }

            const correctAnswerElement = Array.from(e.target.parentElement.children)
                .find((answer) => answer.innerText === q.correctAnswer);

            if (correctAnswerElement) {
                correctAnswerElement.classList.add('correct');
            }

            setLock(true);
        }
    }


    return (
        <>
            {result ? <div>My score: {score}</div> :
                <div className="flex column center card">
                    <h2>{q.id}.{q.question}</h2>
                    <ul className="flex column center">
                        {q.answers.map((answer, index) => (
                            <li
                                className="flex"
                                key={index}
                                onClick={handleAnswer}
                            >
                                {answer}
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
