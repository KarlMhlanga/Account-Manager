import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment.id}>
            Date: {payment.date}, Amount: ${payment.amount}, Status: {payment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Payments;
