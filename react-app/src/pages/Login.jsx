import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import Button from "../components/Button"
import axios from "axios";


const Login = ()=>{
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })

    const [status, setStatus] = useState(null)
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData((prevState)=>({
            ...prevState,
            [name]:value,
        }))

    }

    useEffect(() => {
        console.log(formData);
    }, [formData]); 

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://127.0.0.1:8080/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            
            const { token } = response.data;
            localStorage.setItem("authToken", token);
            
            setStatus({
                success: true,
                message: "Successfully logged in",
            });
            
            navigate("/home");
        } catch (error) {
            console.log(error.response)
            setStatus({
                success: false,
                message: "Invalid Credentials",
            });
        }
    }
    

    return(
        <div className="flex login">
            <div className="login-form">
                <form action="" className="flex center column">
                    <h1>Sign In</h1>
                    <Input placeholder={"Username"} type={"text"} name={"username"} value={formData.username} onChange={handleChange}></Input>
                    <Input placeholder={"Password"} type={"password"} name={"password"} value={formData.password} onChange={handleChange}></Input>
                    <Button type={"submit"} onClick={onSubmitHandler}>Login</Button>

                    {status && <h2 style={{color:"red"}}>{status.message}</h2>}
                </form>
            </div>
        </div>
    )
}

export default Login;