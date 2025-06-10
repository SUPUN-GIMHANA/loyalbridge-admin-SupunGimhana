// src/components/LayoutWithSidebar.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutWithSidebar = () => {
  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5' // Optional: background for main content area
    }}>
      {/* Sidebar - fixed width */}
      <Sidebar />
      
      {/* Main content area - flexible */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflow: 'auto'
      }}>
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
};

export default LayoutWithSidebar;