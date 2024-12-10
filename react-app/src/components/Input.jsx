import React from "react";
import "./Input.css"


const Input = ({ type, name, className = "input", placeholder, value, onChange , checked, required="false"}) => {

    return(
        <input type={type} name={name} className={className} placeholder={placeholder} value={value} onChange={onChange} checked={checked}/>
    );

};

export default Input;