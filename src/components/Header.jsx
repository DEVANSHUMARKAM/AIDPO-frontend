import { useState } from "react";
import AuthModal from "./AuthModal";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [showAuth, setShowAuth] = useState(false);

  const handleAuthSuccess = (data) => {
    console.log("Auth Success", data);
    setShowAuth(false);
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="left-section">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <nav className="right-section">
            <a href="#about">About us</a>
            <a href="#help">Help</a>
            <a href="#services">Services</a>

            <button className="github-btn">Star</button>

            <button className="demo-btn" onClick={() => setShowAuth(true)}>
              Login / Sign Up
            </button>
          </nav>
        </div>
      </header>

      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}
