import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Date: {order.date}, Items: {order.items.join(', ')}, Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
