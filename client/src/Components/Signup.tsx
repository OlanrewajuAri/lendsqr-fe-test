import React, { useState } from 'react'
import "./Login.scss"
import Logo from "../Images/LendSQRLogo.svg"
import LoginImage from "../Images/LendSQRLoginImage.svg"
import axios from 'axios'


interface FormValues {
    email: string;
    password: string;
    name: string;
}
const Signup = () => {

    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: '',
        name: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
   
        console.log(formValues, "Uche");


        fetch("http://localhost:3003/signup", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formValues)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    };

    return (
        <div className="login-container">
            <div className="login-images">
                <img src={Logo} alt="LendSQL" />
                <img src={LoginImage} alt="LendSQL" />
            </div>

            <div className="login-form">
                <h1>Sign up </h1>
                <h6>Enter details to signup.</h6>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            placeholder="Fullname"
                            value={formValues.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <div className="input-wrapper">
                            
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                required
                            />
                            <span
                                className={`password-toggle ${showPassword ? 'show' : 'hide'}`}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>

                        </div>



                    </div>

                    <button type="submit">sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup
