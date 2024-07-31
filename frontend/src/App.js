import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(prevShowContent => !prevShowContent);
  };

  return (
    <div>
      <h1>Welcome to the Customer Account Manager</h1>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        {showContent ? 'Hide Account Details' : 'Manage Account'}
      </Button>
      {showContent && (
        <div className="account-details">
          <p>Account Status: Active</p>
          <p>Balance: $120.50</p>
          <p>Due Date: 2024-07-15</p>
        </div>
      )}
    </div>
  );
}

export default App;
