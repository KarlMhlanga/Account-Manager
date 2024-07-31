# Account Manager Application
by Karl Mhlanga

## Project Overview
This project includes a mock backend and a frontend application for managing account statuses, services, payments, and orders. The frontend is built with React, and the backend is a simple mock server to simulate data retrieval and updates.

## Backend Setup
1. Navigate to the `mock-backend` directory:
   ```bash
   cd mock-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. The server runs at `http://localhost:5000`.

## Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The frontend runs at `http://localhost:3000`.

## File Structure
- `mock-backend/`: Contains the mock backend server code.
- `frontend/`: Contains the React frontend application.

## Notes
- Ensure the backend server is running before starting the frontend application.
- The frontend application will attempt to fetch data from the backend server running at `http://localhost:5000`.
- If you encounter issues, check both the server logs and the browser console for errors.

## Troubleshooting
- **Error: `ERR_OSSL_EVP_UNSUPPORTED`**: This issue often occurs with newer Node.js versions. If you encounter this error, consider using Node.js 16.x LTS. You can use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to switch versions.
- **Backend not responding**: Ensure the server is running and accessible at the specified URL. Verify there are no errors in the backend console.

## Additional Considerations
- If the backend server runs on a different port or address, update the API URLs in the frontend code (`src/App.js`).
- Review the code quality and ensure the application is functional before final submission.