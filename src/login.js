
import { Alert } from "react-bootstrap";
import Home from "./Home";
import { Link } from "react-router-dom";



import { useRef, useState, useEffect, useContext } from 'react';


const LOGIN_URL = '/auth';

const Login = () => {
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setSuccess(true);
        let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    if(user != mail || pwd != pass){
      setSuccess(false);
      console.log("not found")
      alert("invalid details")
    }
    else{
      setSuccess(true);
    }

    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in! You are One step away. Click the button Below 
                      to find the answer
                    </h1>
                    <br />
                    <p>
                        <Link to ="/Result">
                        <button>click Me!</button>
                        </Link>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{"color" : "beige", "padding-left": "90px"}}>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p >
                        Need an Account?
                        <span className="line">
                            <Link to="/Register" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "16px"}}>
                SignUp!
            </span>
        </button>
    </Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login