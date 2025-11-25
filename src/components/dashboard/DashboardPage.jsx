import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./dashboard.css";

export default function DashboardPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);

      setUser({
        firstName: decoded.firstName || "",
        lastName: decoded.lastName || "",
      });
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }, []);

  return (
    <div className="dashboard">
      <h1>
        Welcome, {user.firstName} {user.lastName} 👋
      </h1>
      <p>This is your personal dashboard.</p>
    </div>
  );
}
