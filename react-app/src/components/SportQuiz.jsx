import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SportQuiz = () =>{

    const [score, setScore] = useState(0);

    const [userAnswers, setUserAnswers] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
    })

    const questions = [
    {
        id:1, 
        question:"Which nation have the most world cup trophies",
        answers: ["Argentina", "Germany", "Brazil", "Uruguay"],
        correctAnswer: "Brazil"
    },
    {
        id:2, 
        question:"Which player have the most Ballon'dor Trophies?",
        answers: ["Messi", "C. Ronaldo", "Platini", "Cruyff"],
        correctAnswer: "Messi"
    },
    {
        id:3, 
        question:"In tennis, who has won the most Grand Slam singles titles?",
        answers: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"],
        correctAnswer: "Novak Djokovic"
    },
    {
        id:4, 
        question:"Who won the FIFA World Cup in 2014?",
        answers: ["Netherlands", "Spain", "Germany", "Argentina"],
        correctAnswer: "Germany"
    },
]

    const handleSubmit = (event)=>{

        event.preventDefault()

        console.log(userAnswers)
        const userAnswersLength = Object.keys(userAnswers).length
        console.log(userAnswersLength);
        
        for (let i = 1; i < userAnswersLength + 1; i++) {      

            if (userAnswers[i] === questions[i-1].correctAnswer){
                setScore((prevState) => prevState + 1);
            }
            
        }

        console.log(score);
        
        setUserAnswers({
            1: "",
            2: "",
            3: "",
            4: "",
        })
    }
    

    const handleRadioChange = (e)=>{
        const {name, value} = e.target;
        setUserAnswers((prev)=>({...prev, [name]: value}));
    }

    return(
        <div>
            <h1>Sport Quiz</h1>
            
            <form onSubmit={handleSubmit}>
                {questions.map((q) => (
                    <div key={q.id} style={{ marginBottom: '20px' }}>

                        <h3>{q.question}</h3>
                        <div>
                            {q.answers.map((answer, index) => (
                                    <label htmlFor={answer} key={index}>
                                        {answer}
                                        <Input
                                         type={"radio"}
                                         value={answer}
                                         name={q.id}
                                         checked={userAnswers[q.id] === answer}
                                         onChange={handleRadioChange}
                                         />
                                    </label>
                            ))}
                        </div>
                    </div>  
                ))}
                <Button type="submit">{"Submit"}</Button>
            </form>

            <h1>My Score: {score}</h1>

        </div>
    )
}

export default SportQuiz;