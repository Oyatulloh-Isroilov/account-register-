import React, { useRef, useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
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
                    document.cookie = `accessToken=${data.id}`;
                    navigate('/Home');
                } else {
                    setError("Noto'g'ri email yoki parol");
                }
            })
            .catch(error => {
                console.error(error);
                setError("Server bilan xatolik yuz berdi");
            });
    }

    return (
        <>
            <section>
                <div className="signin">
                    <div className="content">
                        <h2>Sign In</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input ref={emailRef} type="text" value={email} onChange={handleChangeEmail} required autoFocus /> <i>Email</i>
                            </div>
                            <div className="inputBox">
                                <input ref={passwordRef} type="password" value={password} onChange={handleChangePassword} required /> <i>Password</i>
                            </div>
                            <div className="links">
                                <p className='password'>Forgot Password</p>
                                <Link to={"/Register"}>Register</Link>
                            </div>
                            <div className="inputBox">
                                <button onClick={handleClick}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {error && <p>{error}</p>}
        </>
    );
}

export default Signin;
