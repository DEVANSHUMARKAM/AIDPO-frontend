import React from "react";
import TotalOrdersCard from "./TotalOrdersCard";
import TotalRevenueCard from "./TotalRevenueCard";
import MonthlySalesChart from "./MonthlySalesChart";
import MonthlyRevenueChart from "./MonthlyRevenueChart";
import "./dashboard.css";

export default function KpiOverviewSection() {
  return (
    <section className="kpi-section">

      <div className="kpi-grid">

        {/* LEFT COLUMN */}
        <div className="kpi-left">
          <div className="glass-card">
            <TotalOrdersCard />
          </div>

          <div className="glass-card">
            <TotalRevenueCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="kpi-right">
          <div className="glass-card chart-card">
            <MonthlySalesChart />
          </div>

          <div className="glass-card chart-card">
            <MonthlyRevenueChart />
          </div>
        </div>

      </div>

    </section>
  );
}
    