import React from "react";
import "./button.css";

const Button = ()=>{
    return(
        <button className={className} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;