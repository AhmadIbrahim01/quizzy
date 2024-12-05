import React from "react";
import QuizCard from "./QuizCard";
import { general_questions } from "../assets/data.js"

const GeneralQuiz = () =>{
    return(
        <div>
            <h1>GENERAL QUIZ</h1>
            <QuizCard questions={general_questions} />
        </div>
    )
}

export default GeneralQuiz;