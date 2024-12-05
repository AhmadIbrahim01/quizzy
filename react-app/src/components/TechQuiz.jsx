import React from "react";
import QuizCard from "./QuizCard";
import { tech_questions } from "../assets/data";

const TechQuiz = () =>{
    return(
        <div>
            <h1>TECH QUIZ</h1>
            <QuizCard questions={tech_questions} />
        </div>
    )
}

export default TechQuiz;