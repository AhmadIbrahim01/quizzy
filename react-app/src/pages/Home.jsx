import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleQuiz = (data)=>{
        navigate("/quiz", { state: data });
    }

    return(
        <>
            <h1>Welcome To Quizzy. Your <br></br>Ultimate Quiz Companion!</h1>
            <h6>Dive into the world of knowledge with Quizzy, a sleek and interactive quiz app designed to make learning fun and engaging!<br></br> Whether you're a trivia enthusiast, a student sharpening your skills, or someone who loves a challenge, Quizzy has something for everyone.</h6>
            <h4>Choose a quiz</h4>
            <div className="flex center wrap buttons">
                <Button onClick={()=>{handleQuiz("general")}} children={"General Knowledge"} />
                <Button onClick={()=>{handleQuiz("sports")}} children={"Sports"} />
                <Button onClick={()=>{handleQuiz("tech")}} children={"Tech"} />
            </div>
            <div className="flex center wrap buttons">
                <Button onClick={""} children={"General Knowledge"} />
                <Button onClick={""} children={"Sports"} />
                <Button onClick={""} children={"Tech"} />
            </div>
        </>
    )
}

export default Home;