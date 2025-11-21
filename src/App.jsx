import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./chartjs-setup";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import KpiOverviewSection from "./components/dashboard/KpiOverviewSection";
import IndiaMapSection from "./components/india-map/IndiaMapSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Landing Page */}
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

        {/* Standalone India Map (optional) */}
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
