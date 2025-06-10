import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#2c2f48', color: 'white', padding: '20px', height: '100vh' }}>
      <h2 style={{ color: '#fff' , backgroundColor: '#2c2f48'}}>🌀 LoyalBridge</h2>
      <ul className="sidebar-list" style={{ listStyle: 'none', padding: 0, marginTop: '40px' }}>
        <li><Link to="/Home" style={{ color: 'white', textDecoration: 'none' }}>🏠 Home</Link></li>
        <li><Link to="/UserManagement" style={{ color: 'white', textDecoration: 'none' }}>🎯 User Points</Link></li>
        <li>🔄 Transactions</li>
        <li><Link to="/partner" style={{ color: 'white', textDecoration: 'none' }}>🌐 Partner</Link></li>
        <li>⚙️ Management</li>
        <li><Link to="/Report" style={{ color: 'white', textDecoration: 'none' }}>📊 Reporting</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
