import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [accountStatus, setAccountStatus] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/account/status')
      .then(response => setAccountStatus(response.data))
      .catch(error => console.error('Error fetching account status:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {accountStatus ? (
        <div>
          <p>Status: {accountStatus.status}</p>
          <p>Balance: ${accountStatus.balance}</p>
          <p>Due Date: {accountStatus.dueDate}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
