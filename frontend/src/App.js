import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/account/status')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Assistant Application</h1>
        <button className="App-button" onClick={handleButtonClick}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="App-details">
            <h2>Account Status</h2>
            <p>Status: {data.status}</p>
            <p>Balance: ${data.balance}</p>
            <p>Due Date: {data.dueDate}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
