import React, { useState } from 'react';

const Report = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    'User Activity Report',
    'Transaction Summary',
    'Conversion Analytics',
    'Partner Performance',
    'Monthly Revenue',
    'Fraud Detection Logs',
    'System Audit Trail',
    'Customer Feedback Trends',
  ];

  const filteredReports = reports.filter(report =>
    report.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Report Dashboard</h2>

      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search reports..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>🔍</button>
      </div>

      <ul style={styles.reportList}>
        {filteredReports.map((report, index) => (
          <li key={index} style={styles.reportItem}>
            📄 {report}
          </li>
        ))}
        {filteredReports.length === 0 && (
          <li style={{ marginTop: '10px', color: 'gray' }}>No reports found.</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    flex: 1,
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  searchBar: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2c2f48',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  reportList: {
    listStyle: 'none',
    padding: 0,
  },
  reportItem: {
    backgroundColor: '#2c2f48',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
  },
};

export default Report;
