import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./chartjs-setup";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import KpiOverviewSection from "./components/dashboard/KpiOverviewSection";
import IndiaMapSection from "./components/india-map/IndiaMapSection";
import DashboardPage from "./components/dashboard/DashboardPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <KpiOverviewSection />
              <IndiaMapSection />
              <Footer />
            </>
          }
        />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Standalone India Map Page */}
        <Route
          path="/india-map"
          element={
            <>
              <IndiaMapSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
