import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import styles from "./Login.module.css"; // Gunakan CSS Modules

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);

            // Simpan status login
            localStorage.setItem("isLoggedIn", "true");

            // Arahkan ke halaman /display
            navigate("/display");
        } catch (err) {
            console.error("Login error:", err.message);
            setError("Login gagal. Silakan cek email dan password.");
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Login;