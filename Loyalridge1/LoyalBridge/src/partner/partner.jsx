
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const sidebar = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = () => {
    axios.get('http://localhost:8081/api/v1/test/getPartner')
      .then(res => setPartners(res.data))
      .catch(err => console.error('Error fetching partners:', err));
  };

  const handleAddRow = () => {
    const newPartner = {
      partnerName: '',
      email: '',
      rate: 0,
      integration: ''
    };
    setPartners([...partners, newPartner]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedPartners = [...partners];
    updatedPartners[index][field] = value;
    setPartners(updatedPartners);
  };

  const handleSave = () => {
    axios.post('http://localhost:8081/api/v1/test/savePartner', partners)
      .then(() => {
        alert('Partners saved successfully!');
        fetchPartners();
      })
      .catch(error => {
        console.error('Error saving partners:', error);
      });
  };

  const handleDelete = (partnerName) => {
    if (window.confirm(`Are you sure you want to delete partner: ${partnerName}?`)) {
      axios.delete(`http://localhost:8081/api/v1/test/deletePartner/${partnerName}`)
        .then(() => {
          alert(`${partnerName} deleted`);
          fetchPartners();
        })
        .catch(err => {
          console.error('Error deleting partner:', err);
        });
    }
  };

  // 🔍 Filter logic
  const filteredPartners = partners.filter(partner =>
    partner.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.integration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-container">
      <h2>👤 Partner Management</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email, integration..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Conversion Rate</th>
            <th>Integration</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredPartners.map((partner, index) => (
            <tr key={index}>
              <td>
                <input
                  value={partner.partnerName}
                  onChange={e => handleInputChange(index, 'partnerName', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={partner.email}
                  onChange={e => handleInputChange(index, 'email', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={partner.rate}
                  onChange={e => handleInputChange(index, 'rate', e.target.value)}
                />
              </td>
              <td>
                <input
                  value={partner.integration}
                  onChange={e => handleInputChange(index, 'integration', e.target.value)}
                />
              </td>
              <td
                style={{ cursor: 'pointer' }}
                onClick={() => handleDelete(partner.partnerName)}
              >
                🗑️
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bottom-buttons">
        <button onClick={handleAddRow}>Add</button>
        <button onClick={handleSave} className="report-btn">Save All</button>
      </div>
    </div>
  );
};

export default sidebar;
