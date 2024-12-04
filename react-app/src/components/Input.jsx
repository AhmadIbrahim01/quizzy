import React from "react";
import "./Input.css"


const Input = ({ type, name, className = "input", placeholder, value, onChange }) => {

    return(
        <input type={type} name={name} className={className} placeholder={placeholder} value={value} onChange={onChange}/>
    );

};

export default Input;