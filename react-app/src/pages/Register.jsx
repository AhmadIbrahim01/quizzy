import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import Button from "../components/Button"
import axios from "axios";

const Register = ()=>{

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name:"",
        username:"",
        password:"",
    })

    const [status, setStatus] = useState(null);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData((prevState)=>({
            ...prevState,
            [name]:value,
        }));
    };

    const onSubmitHandler = async (e)=>{
        e.preventDefault();

        try {
            const response = await axios.post("", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            });

            setStatus({
                success: true,
                message: "Registiration Successful",
            })
            navigate("/login")

        } catch (error) {
            setStatus({
                success: false,
                message: "An Error Occured"
            })
        }
    }

    return(
        <div className="flex register">
            <div className="register-form">
                <form action="" className="flex center column">
                    <h1>Sign Up</h1>
                    <Input type={"text"} name={"name"} value={formData.name} onChange={handleChange} placeholder={"name"}/>
                    <Input type={"text"} name={"username"} value={formData.username} onChange={handleChange} placeholder={"username"} required={true} />
                    <Input type={"password"} name={"password"} value={formData.password} onChange={handleChange} placeholder={"password"}/>
                    <Button type={"submit"} onClick={onSubmitHandler}>Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Register;