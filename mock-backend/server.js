const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const accountStatus = {
  status: "active",
  balance: 120.50,
  dueDate: "2024-07-15"
};

const services = [
  { id: 1, name: "5G", status: "active", details: "100+ Mbps Unlimited" },
  { id: 2, name: "4G Mobile", status: "inactive", details: "2GB" }
];

const payments = [
  { id: 1, date: "2024-06-01", amount: 50.00, status: "completed" },
  { id: 2, date: "2024-05-01", amount: 50.00, status: "completed" }
];

const orders = [
  { id: 1, date: "2024-06-15", items: ["5G", "4G Mobile"], status: "shipped" },
  { id: 2, date: "2024-05-20", items: ["Internet"], status: "delivered" }
];

app.get('/api/account/status', (req, res) => res.json(accountStatus));
app.get('/api/services', (req, res) => res.json(services));
app.post('/api/services', (req, res) => {
  // Add or modify services logic
  res.status(200).send('Service updated');
});
app.get('/api/payments', (req, res) => res.json(payments));
app.post('/api/payments', (req, res) => {
  // Process new payments logic
  res.status(200).send('Payment processed');
});
app.get('/api/orders', (req, res) => res.json(orders));
app.post('/api/orders', (req, res) => {
  // Place a new order logic
  res.status(200).send('Order placed');
});

app.listen(port, () => console.log(`Mock backend listening at http://localhost:${port}`));
