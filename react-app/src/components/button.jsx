import React from "react";
import "./Button.css";

const Button = ()=>{
    return(
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;