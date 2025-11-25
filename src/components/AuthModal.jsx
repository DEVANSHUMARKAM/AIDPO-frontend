import { useState } from "react";
import "./AuthModal.css";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ open, onClose, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();      // ✅ THIS WAS MISSING

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const payload = isLogin
      ? { email, password }
      : { firstName, lastName, email, password };

    const endpoint = isLogin
      ? "http://localhost:8080/api/auth/login"
      : "http://localhost:8080/api/auth/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Email already exists");
        return;
      }

      // LOGIN SUCCESS
      if (isLogin) {
        localStorage.setItem("token", data.token);
        onAuthSuccess(data);

        navigate("/dashboard");   // ✅ Redirect works now
        onClose();
      } else {
        setMessage("Signup successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="auth-box">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {message && <p className="msg">{message}</p>}

        <p className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
