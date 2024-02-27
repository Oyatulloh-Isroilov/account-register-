import { useRef, useState } from 'react';
import './Register.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  function handleClick(e) {
    e.preventDefault();

    const user = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://auth-rg69.onrender.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          localStorage.setItem('accessToken', data.id);
          navigate('/Home');
        } else {
          setError("Foydalanuvchi ro'yxatdan o'tmagan");
        }
      })
      .catch(error => {
        console.error(error);
        setError("Server bilan bog'liq xatolik yuz berdi");
      });
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
            <span>Already have an account? </span><Link to={"/"}>Sign In</Link>
          </div>
          <div className="form">
            <form action="/register" method="post">
              <input ref={nameRef} type="text" name="username" id="username" placeholder="Username" />
              <input ref={emailRef} type="email" name="email" placeholder="Email" id="email" />
              <input ref={passwordRef} type="password" name="password" placeholder="Password" id="password" />
              <button onClick={handleClick}>Sign Up</button>
            </form>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" />
            <span>I have read and agree to the <a href='#'>Terms of Service</a></span>
          </div>
        </div>
      </div>

      {error && <p>{error}</p>}
    </>
  );
}

export default Register;
