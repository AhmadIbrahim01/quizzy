import React from "react";
import { sport_questions } from "../assets/data.js";
import QuizCard from "./QuizCard.jsx";


const SportQuiz = () =>{
    return(
        <div>
            <h1>SPORT QUIZ</h1>
            <QuizCard questions={sport_questions}/>
        </div>
    )
}

export default SportQuiz;