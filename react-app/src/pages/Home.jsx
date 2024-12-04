import React from "react";
import Button from "../components/Button";

const Home = () => {
    return(
        <>
            <h1>Welcome To Quizzy</h1>
            <h3>Your Ultimate Quiz Companion!</h3>
            <h6>Dive into the world of knowledge with Quizzy, a sleek and interactive quiz app designed to make learning fun and engaging! Whether you're a trivia enthusiast, a student sharpening your skills, or someone who loves a challenge, Quizzy has something for everyone.</h6>
            <h4>Choose a quiz</h4>
            <div className="flex center wrap buttons">
                <Button onClick={""} children={"General Knowledge"} />
                <Button onClick={""} children={"Sports"} />
                <Button onClick={""} children={"Tech"} />
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