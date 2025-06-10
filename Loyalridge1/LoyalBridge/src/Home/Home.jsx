import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/test/getUser').then(res => setUsers(res.data));
    axios.get('http://localhost:8081/api/v1/test/getPartner').then(res => setPartners(res.data));
  }, []);

  const userCount = users.length;
  const partnerCount = partners.length;
  const avgConversionRate = partners.length
    ? (
        partners.reduce((sum, p) => sum + (parseFloat(p.rate) || 0), 0) / partners.length
      ).toFixed(2)
    : 0;

const lineChartData = partners.map((partner) => ({
  name: partner.partnerName || 'Unknown',
  rate: parseFloat(partner.rate) || 0, // Fallback to 0 if NaN
}));

const riskChartData = users.map((user) => ({
  name: user.name || 'Unknown',
  risk: parseInt(user.risk, 10) || 0, // Fallback to 0 if NaN
}));

// Add shimmer effect to cards while loading
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return () => clearTimeout(timer);
}, []);

// Then add this className conditionally to your chart-box divs:
const chartBoxClass = isLoading ? 'chart-box shimmer' : 'chart-box';
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Management Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-box">
          <h2>Total Users</h2>
          <p>{userCount}</p>
        </div>
        <div className="summary-box">
          <h2>Total Partners</h2>
          <p>{partnerCount}</p>
        </div>
        <div className="summary-box">
          <h2>Avg Conversion Rate</h2>
          <p>{avgConversionRate}%</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-box">
          <h3>Conversion Rate by Partner</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={lineChartData}>
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorRate)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>User Risk Levels</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={riskChartData}>
              <defs>
                <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="risk"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorRisk)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;