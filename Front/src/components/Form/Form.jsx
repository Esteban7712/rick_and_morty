import React from "react";
import validation from "./validation.js";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";


export default function Form(props) {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [error, setErrors] = React.useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
            ...userData,
            [e.target.name]: e.target.value
            })
        )    
    }

    const handleSubmit = (e) => { 
    e.preventDefault();
    props.login(userData)
  }

    return (
      <div className={styles.loginBox}>
        <img className={styles.logTheme} src="r&m.jpg" alt="logo" />
        <h1 className={styles.logTitle}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={error.username && styles.warning}
          />
          <p className="danger">{error.username}</p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={error.password && styles.warning}
          />
          <p className="danger">{error.password}</p>
          <button className={styles.submit} type="submit">
            Enter
          </button>
        </form>
        <div className={styles.loginBox2}>
          <Link to={"/home"}>
          <button className={styles.submit2}>
            Guest
          </button>
        </Link>
          
        </div>
      </div>
      
    );
}