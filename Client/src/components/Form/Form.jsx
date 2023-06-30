import React from "react";
import { useState } from "react";
import { validationEmail, validationPass } from "./validation.js";
import style from "./Form.module.css";

const Form = (props) => {
    const [userData,setUserData]= useState({
        email:"",
        password:"",
    })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    if (property === "email") {
      validationEmail(
        { ...userData, [property]: value },
        errors,
        setErrors
      );
    }
    if (property === "password") {
      validationPass(
        { ...userData, [property]: value },
        errors,
        setErrors
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.container}>
      <h1 className={style.titulo}>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
          <label htmlFor="usuario">Email:</label>
          </div>
          <div>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          </div>
          <div>
          <span>{errors.email}</span>
          </div>
        </div>
        <div>
          <div>
          <label htmlFor="password">Password:</label>
          </div>
          <div>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          </div>
          <div>
          <span>{errors.password}</span>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
