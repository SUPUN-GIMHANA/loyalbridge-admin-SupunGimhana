


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8081/api/v1/test/getUser')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const handleAddRow = () => {
    const newRow = {
      name: '',
      id: '',
      phoneNo: '',
      status: '',
      freeze: '',
      risk: ''
    };
    setUsers([...users, newRow]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const handleSave = () => {
    axios.post('http://localhost:8081/api/v1/test/saveUsers', users)
      .then(() => {
        alert('Users saved successfully!');
        fetchUsers(); // Refresh table
      })
      .catch(error => {
        console.error('Error saving users:', error);
      });
  };

  // Search filter function
  const filteredUsers = users.filter(user =>
    (user.name || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.id || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.phoneNo || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.status || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.freeze || '').toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.risk || '').toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-container">
      <h2>👤 User Management</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by any field..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Freeze</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td><input value={user.name || ''} onChange={e => handleInputChange(index, 'name', e.target.value)} /></td>
              <td><input value={user.id || ''} onChange={e => handleInputChange(index, 'id', e.target.value)} /></td>
              <td><input value={user.phoneNo || ''} onChange={e => handleInputChange(index, 'phoneNo', e.target.value)} /></td>
              <td><input value={user.status || ''} onChange={e => handleInputChange(index, 'status', e.target.value)} /></td>
              <td><input value={user.freeze || ''} onChange={e => handleInputChange(index, 'freeze', e.target.value)} /></td>
              <td><input value={user.risk || ''} onChange={e => handleInputChange(index, 'risk', e.target.value)} /></td>
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

export default UserManagement;
