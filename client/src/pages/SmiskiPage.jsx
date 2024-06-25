import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SmiskiPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center">Loading...</div>;
  }

  if (error) {
    return <div className="d-flex justify-content-center align-items-center">{error}</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-75">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Series</th>
              <th>Body Type</th>
              <th>Found In</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.ID || index}>
                <td>{user.Name}</td>
                <td>
                  <img
                    src={user.Picture}
                    alt={user.Name}
                    style={{ width: '100px', height: 'auto' }}
                  />
                </td>
                <td>{user.Series}</td>
                <td>{user["Body Type"]}</td>
                <td>{user.Found}</td>
                <td>{user.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SmiskiPage;
