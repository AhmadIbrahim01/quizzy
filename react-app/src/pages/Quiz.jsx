import React from "react";
import { useLocation } from 'react-router-dom';
import GeneralQuiz from "../components/GeneralQuiz";
import SportQuiz from "../components/SportQuiz";
import TechQuiz from "../components/TechQuiz";

const Quiz = ()=>{

    const location = useLocation();
    const data = location.state;


    let path = "No Selected Path"
    if(data === "general"){
        path = <GeneralQuiz/>
    } else if (data === "sports"){
        path = <SportQuiz/>
    } else if (data === "tech"){
        path = <TechQuiz/>
    }

    return(
        <>
            <h1>Quiz Page</h1>
            {/* <p>{(data === "general" ? console.log("hello") : (data === "sports" ? console.log("hello 2") : console.log("hello 3")))}</p> */}
            {path}
        </>
    );
};

export default Quiz;