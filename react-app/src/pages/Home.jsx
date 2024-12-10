import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Home = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");

    const handleQuiz = (data) => {
        navigate("/quiz", { state: data });
    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            try {
                const decoded = jwtDecode(token);
                const userName = decoded.name;
                setUserName(userName);
                console.log("Username:", userName);
            } catch (error) {
                console.log("Error decoding token", error);
            }
        } else {
            console.log("No token");
        }
    }, []);

    return (
        <>
            <h1>Welcome To Quizzy. Your <br />Ultimate Quiz Companion!</h1>
            <h6>
                Dive into the world of knowledge with Quizzy, a sleek and interactive quiz app designed to make learning fun and engaging!
                <br /> Whether you're a trivia enthusiast, a student sharpening your skills, or someone who loves a challenge, Quizzy has something for everyone.
            </h6>
            {userName && <h2>Welcome, {userName}!</h2>}

            <h4>Choose a quiz</h4>
            <div className="flex center wrap buttons">
                <Button onClick={() => { handleQuiz("general") }} children={"General Knowledge"} />
                <Button onClick={() => { handleQuiz("sports") }} children={"Sports"} />
                <Button onClick={() => { handleQuiz("tech") }} children={"Tech"} />
            </div>
        </>
    );
};

export default Home;
