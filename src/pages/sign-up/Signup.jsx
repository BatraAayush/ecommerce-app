import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";
import { useState } from "react";

export const Signup = () => {
    const [show, setShow] = useState(false);
    const [showConform, setShowConform] = useState(false);



    const {
        setSEmailInputHandler,
        setFNInputHandler,
        setLNInputHandler,
        setSPasswordInputHandler,
        setConformPasswordInputHandler,
        signUpHandler,
    } = useLoginContext();
    return (
        <div>
            <h1>Sign Up</h1>
            <p>
                <label>Enter your email *</label>
                <br />
                <input
                    onChange={(e) => {
                        setSEmailInputHandler(e);
                    }}
                    placeholder="Email"
                    type="text"
                />
            </p>
            <p>
                <label>Enter your First Name *</label>
                <br />
                <input
                    onChange={(e) => setFNInputHandler(e)}
                    placeholder="First Name"
                    type="text"
                />
            </p>{" "}
            <p>
                <label>Enter your Last Name *</label>
                <br />
                <input
                    onChange={(e) => setLNInputHandler(e)}
                    placeholder="Last Name"
                    type="text"
                />
            </p>{" "}
            <p>
                <label>Enter your Password *</label>
                <br />
                <input
                    onChange={(e) => setSPasswordInputHandler(e)}
                    placeholder="Password"
                    type={show ? "text" : "password"}
                />
                <button
                    onClick={() => {
                        show ? setShow(false) : setShow(true);
                    }}
                >
                    {show ? "Hide Password" : "Show Password"}
                </button>
            </p>{" "}
            <p>
                <label>Re-Enter your Password *</label>
                <br />
                <input
                    onChange={(e) => setConformPasswordInputHandler(e)}
                    placeholder="Conform Password"
                    type={showConform ? "text" : "password"}
                />
                <button
                    onClick={() => {
                        showConform ? setShowConform(false) : setShowConform(true);
                    }}
                >
                    {showConform ? "Hide Password" : "Show Password"}
                </button>
            </p>
            <button type="submit" onClick={signUpHandler}>
                Sign Up
            </button>
            <p>
                Already have an account? <Link to={"/login"}>Log In</Link>
            </p>
        </div>
    );
};
