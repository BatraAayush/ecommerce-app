import { Link } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginProvider";

export const Login = () => {
    const {
        setEmailInputHandler,
        setPasswordInputHandler,
        loginHandler,
        login,
        logOutHandler
    } = useLoginContext();

    return (
        <div>
            {login ? (
                <>
                <h1>Logged In</h1>
                <button onClick={logOutHandler}>Log Out</button>
                </>
            ) : (
                <>
                    <h1>Login</h1>
                    <label>Email address</label>
                    <br />
                    <input
                        onChange={(e) => setEmailInputHandler(e)}
                        type="email"
                        placeholder="testuser@gmail.com"
                        required
                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        onChange={(e) => setPasswordInputHandler(e)}
                        type="password"
                        placeholder="testuser"
                        required
                    />
                    <p>
                        <input type="checkbox" />
                        Remember me <Link>Forgot your Password?</Link>
                    </p>
                    <button onClick={() => loginHandler("real")}>Log In</button>
                    <p>
                        Log in as a test user. <button onClick={() => loginHandler("test")}>Test Login</button>
                    </p>
                    <p>
                        Don't have an Account ?{" "}
                        <Link to={"/signup"}>Sign Up</Link>
                    </p>
                </>
            )}
        </div>
    );
};
