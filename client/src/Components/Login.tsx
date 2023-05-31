import React, { useState } from 'react'
import "./Login.scss"
import Logo from "../Images/LendSQRLogo.svg"
import LoginImage from "../Images/LendSQRLoginImage.svg"


interface FormValues {
  email: string;
  password: string;
}
const Login = () => {

  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
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
    // Perform form submission logic here
    console.log(formValues);
  };

  return (
    <div className="login-container">
      <div className="login-images">
        <img src={Logo} alt="LendSQL" />
        <img src={LoginImage} alt="LendSQL" />
      </div>

      <div className="login-form">
        <h1>Welcome!</h1>
        <h6>Enter details to login.</h6>
        <form onSubmit={handleSubmit}>
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

            <p>Forgot Password?</p>

          </div>

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}

export default Login
