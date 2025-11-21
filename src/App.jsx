import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import KpiOverviewSection from "./components/dashboard/KpiOverviewSection";
import GlobalMapSection from "./components/dashboard/GlobalMapSection";
import "./chartjs-setup";


function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <KpiOverviewSection/>
      <GlobalMapSection/>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
