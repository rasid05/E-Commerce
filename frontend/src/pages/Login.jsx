import { useState, useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState("email");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();

    const sendOtp = () => {
        if (!email) {
            alert("Enter email");
            return;
        }

        alert("OTP sent (mock: 1234)");
        setStep("otp");
    };

    const verifyOtp = () => {
        if (otp === "1234") {
            login(email);
            alert("Login successful");
            const redirectTo = location.state?.from || "/";
            navigate(redirectTo);
        } else {
            alert("Invalid OTP");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Login</h1>

            {step === "email" && (
                <>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <button onClick={sendOtp}>Send OTP</button>
                </>
            )}

            {step === "otp" && (
                <>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <br />
                    <button onClick={verifyOtp}>Verify OTP</button>
                </>
            )}
        </div>
    );
}

export default Login;