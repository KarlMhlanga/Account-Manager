import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name}: {service.details} ({service.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
