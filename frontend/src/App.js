import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/account/status')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Account Status</h1>
      <p>Status: {data.status}</p>
      <p>Balance: ${data.balance}</p>
      <p>Due Date: {data.dueDate}</p>
    </div>
  );
}

export default App;
