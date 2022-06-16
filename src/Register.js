import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import login from "./login";
import { Link } from "react-router-dom";


const USER_REGEX = /^[A-z][A-z]{4,23}$/;
const PWD_REGEX = /^([a-zA-Z0-9@*#]{8,50})$/;
const F_L_Name = /^[A-z][A-z]{4,23}$/;
const Email_Regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const Mobile_Regex = /^[6-9]\d{9}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [FName, setFName] = useState('');
    const [validUser, SetValidUser] = useState(false);
    const [user1Focus, setUser1Focus] = useState(false);


    const [LName, setLName] = useState('');
    const [validLastName, SetValidLastName] = useState(false);
    const [user2Focus, setUser2Focus] = useState(false);

    const [Mobile, setMobile] = useState('');
    const [validMobile, SetValidMobile] = useState(false);
    const [user3Focus, setUser3Focus] = useState(false);

    const [Email, setEmail] = useState('');
    const [validEmail, SetValidEmail] = useState(false);
    const [user4Focus, setUser4Focus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [login, setLogin] = useState(true);



    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        SetValidUser(F_L_Name.test(FName));
    }, [FName])

    useEffect(() => {
        SetValidLastName(F_L_Name.test(LName));
    }, [LName])

    useEffect(() => {
        SetValidMobile(Mobile_Regex.test(Mobile));
    }, [Mobile])

    useEffect(() => {
        SetValidEmail(Email_Regex.test(Email));
    }, [Email])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])


  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = USER_REGEX.test(FName);
        const v3 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("Fname", JSON.stringify(FName));
        localStorage.setItem("Lname", JSON.stringify(LName));
        localStorage.setItem("Mobile", JSON.stringify(Mobile));
        localStorage.setItem("Email", JSON.stringify(Email));
      localStorage.setItem(
        "Password",
        JSON.stringify(pwd)
      );
      console.log("Saved in Local Storage");
        setSuccess(true);
        
       
        
    };
    
    const handleReset =  (e) =>{
        console.log("handlesubmit ran");
        setUser("");
        setEmail("");
        setPwd("");
        setFName("");
        setLName("");
        setMobile("");
    
  };

  

    return (
        <>
                
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{"color": "beige", "padding-left": "60px"}} className="register">Register</h1>
                    <form >
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>



                        <label htmlFor="FName">
                            FName:
                            <FontAwesomeIcon icon={faCheck} className={validUser ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validUser || !FName ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="FName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFName(e.target.value)}
                            value={FName}
                            required
                            aria-invalid={validUser ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUser1Focus(true)}
                            onBlur={() => setUser1Focus(false)}
                        />
                        <p id="uidnote" className={user1Focus && FName && !validUser ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                          <label htmlFor="LName">
                            LName:
                            <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validLastName || !LName ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="Lname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setLName(e.target.value)}
                            value={LName}
                            required
                            aria-invalid={validLastName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUser2Focus(true)}
                            onBlur={() => setUser2Focus(false)}
                        />
                        <p id="uidnote" className={user2Focus && LName && !validLastName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        
                        <label htmlFor="Mobile">
                            Mobile:
                            <FontAwesomeIcon icon={faCheck} className={validMobile ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMobile || !Mobile ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="Mobile"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setMobile(e.target.value)}
                            value={Mobile}
                            required
                            aria-invalid={validMobile ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUser3Focus(true)}
                            onBlur={() => setUser3Focus(false)}
                        />
                        <p id="uidnote" className={user3Focus && Mobile && !validMobile ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                         <label htmlFor="Email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !Email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="Email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUser4Focus(true)}
                            onBlur={() => setUser4Focus(false)}
                        />
                        <p id="uidnote" className={user4Focus && Email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Password should be at least 8 characters, minimum 1 digit and minimum 1 special character, Allowed
                            Special Characters:  <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        
                            <Link to= "/Home">
                            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                            </Link>
                            <p >
                        Already registered?
                        <span className="line">
                            <Link to= "/login">
                                <button>Login</button>
                            </Link>
                        </span>
                        
                        <span>
                        <Link to="/Home">
                            <button>go back</button>
                        </Link>
                        </span>
                        
                         
                         <span className="line">
                            <button onClick={handleReset}>clear value</button>
                         </span>
                    </p>
                            </form>
                        
                        
                        
                        
                        
                    
                    
                        
                </section>
                    
                
            
        </>
    );
}

    

export default Register
