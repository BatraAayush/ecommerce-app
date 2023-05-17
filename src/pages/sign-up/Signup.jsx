import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";

export const Signup = () => {
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
                    type="text"
                />
            </p>{" "}
            <p>
                <label>Re-Enter your Password *</label>
                <br />
                <input
                    onChange={(e) => setConformPasswordInputHandler(e)}
                    placeholder="Conform Password"
                    type="text"
                />
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
