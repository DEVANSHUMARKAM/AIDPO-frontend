// src/components/Footer.jsx
import React from "react";
import "./footer.css";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">

        {/* Left Logo + Icons */}
        <div className="footer-left">
          <div className="footer-logo">X</div>

          <div className="footer-icons">
            <FaDiscord className="footer-icon" />
            <span className="footer-icon">X</span>
            <FaGithub className="footer-icon" />
          </div>

          <p className="footer-email">hi@minusx.ai</p>
          <p className="footer-copy">© 2025 MinusX, Inc. All rights reserved.</p>
        </div>

        {/* Right Columns */}
        <div className="footer-columns">

          <div className="footer-col">
            <h4>Product</h4>
            <a>Chrome Extension</a>
            <a>Playground</a>
            <a>Github</a>
            <a>Docs</a>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <a>Metabase AI</a>
            <a>MBQL AI Assistant</a>
            <a>Dashboard Q&A</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a>What We Do</a>
            <a>Pricing</a>
            <a>About</a>
            <a>Blog</a>
            <a>Demo</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Trust</a>
            <a>Support</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
