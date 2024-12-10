import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import Button from "../components/Button"


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

    const onSubmitHandler = async(e)=>{

        e.preventDefault();

        try {
            const response = await axios.post("", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            console.log("hello");
            

            setStatus({
                success: true,
                message: "Successfull Login",
            });

            navigate("/")
        } catch (error) {
            setStatus({
                success: false,
                message: "Invalid Credintials",
            })
        }
        console.log(status)

    }

    return(
        <div className="flex login">
            <div className="login-form">
                <form action="" className="flex center column">
                    <h1>Sign In</h1>
                    <Input placeholder={"Username"} type={"text"} name={"username"} value={formData.username} onChange={handleChange}></Input>
                    <Input placeholder={"Password"} type={"password"} name={"password"} value={formData.password} onChange={handleChange}></Input>
                    <Button type={"submit"} onClick={onSubmitHandler}>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;