import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [accountData, setAccountData] = useState({});
  const [services, setServices] = useState([]);
  const [payments, setPayments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/account/status')
      .then(response => setAccountData(response.data))
      .catch(error => console.error('Error fetching account data:', error));

    axios.get('http://localhost:5000/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services data:', error));

    axios.get('http://localhost:5000/api/payments')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments data:', error));

    axios.get('http://localhost:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders data:', error));
  }, []);

  const handleAccountClick = () => setShowAccountDetails(!showAccountDetails);
  const handleServicesClick = () => setShowServices(!showServices);
  const handlePaymentsClick = () => setShowPayments(!showPayments);
  const handleOrdersClick = () => setShowOrders(!showOrders);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your Customer Account Management Application</h1>
        <button className="App-button" onClick={handleAccountClick}>
          {showAccountDetails ? 'Hide Account Details' : 'Account Details'}
        </button>
        {showAccountDetails && (
          <div className="App-details">
            <h2>Account Status</h2>
            <p>Status: {accountData.status}</p>
            <p>Balance: R{accountData.balance}</p>
            <p>Due Date: {accountData.dueDate}</p>
          </div>
        )}

        <button className="App-button" onClick={handleServicesClick}>
          {showServices ? 'Hide Services' : 'Services'}
        </button>
        {showServices && (
          <div className="App-details">
            <h2>Services</h2>
            <ul>
              {services.map(service => (
                <li key={service.id}>
                  <strong>{service.name}</strong>: {service.details} (Status: {service.status})
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="App-button" onClick={handlePaymentsClick}>
          {showPayments ? 'Hide Payments' : 'Payments'}
        </button>
        {showPayments && (
          <div className="App-details">
            <h2>Payments</h2>
            <ul>
              {payments.map(payment => (
                <li key={payment.id}>
                  Date: {payment.date}, Amount: ${payment.amount}, Status: {payment.status}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="App-button" onClick={handleOrdersClick}>
          {showOrders ? 'Hide Orders' : 'Orders'}
        </button>
        {showOrders && (
          <div className="App-details">
            <h2>Orders</h2>
            <ul>
              {orders.map(order => (
                <li key={order.id}>
                  Date: {order.date}, Status: {order.status}
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
