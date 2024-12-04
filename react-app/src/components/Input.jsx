import React from "react";
import "./Input.css"


const Input = ({ type, name, className = "input", placeholder, value, onChange , checked, required}) => {

    return(
        <input type={type} name={name} className={className} placeholder={placeholder} value={value} onChange={onChange} checked={checked} required={required}/>
    );

};

export default Input;