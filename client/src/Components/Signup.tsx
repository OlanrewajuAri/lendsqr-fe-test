import React, { useState } from 'react'
import "./Signup.scss"
import Logo from "../Images/LendSQRLogo.svg"
import LoginImage from "../Images/LendSQRLoginImage.svg"



// interface FormValues {
//     email: string;
//     password: string;
//     name: string;
// }

const Signup = (props: { onFormSwitch: (formName: string) => void }) => {
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    // const [formValues, setFormValues] = useState<FormValues>({
    //     email: '',
    //     password: '',
    //     name: '',
    // });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            email, pass, name
        }
        console.log(payload)
        fetch("http://localhost:3003/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {    
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (

        <div className="login-container">
            <div className="login-images ">
                <img src={Logo} alt="LendSQL" />
                <img src={LoginImage} alt="LendSQL" />
            </div>



            <div className="auth-form-container">

                <h2>Register</h2>

                <form className="login-form" onSubmit={handleSubmit}>


                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />


                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />


                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                    <button type="submit">Log In</button>

                </form>


                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>


        </div>
    );
}

export default Signup


